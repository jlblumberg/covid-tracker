import React from 'react';
import { mount } from 'enzyme';
import App from '../App'
import axios from 'axios';
import { fetchData, fetchDailyData } from '../api/index';
import mockResponse from '../__mocks__/mockResponse.json'
import mockDailyDataResponse from '../__mocks__/mockDailyDataResponse.json'
jest.mock('axios');

describe('App', () => {

  it('renders correctly', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('stores data in state', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state().data).toEqual({});
  });

});

describe('App, using fetchData, ', () => {

  it('can handle correctly fetching data', async () => {
    axios.get.mockResolvedValue(mockResponse);
    const handledResponse = await fetchData();
    await expect(handledResponse).toEqual({ confirmed: 1, recovered: 3, deaths: 2, lastUpdate: 4 });
    await expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api');
  });

  it('can handle erroneously fetching data', async () => {
    axios.get.mockRejectedValue('error message');
    const rejectedResponse = await fetchData();
    await expect(rejectedResponse).toEqual(new Error('error message'));
    await expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api');
  });

});

describe('App, using fetchDailyData, ', () => {

  it('can handle correctly fetching data', async () => {
    axios.get.mockResolvedValue(mockDailyDataResponse);
    const handledResponse = await fetchDailyData();
    await expect(handledResponse).toEqual([{ "confirmed": 10, "date": 10, "deaths": 10 }]);
    await expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api/daily');
  });

  it('can handle erroneously fetching data', async () => {
    axios.get.mockRejectedValue('error message');
    const rejectedResponse = await fetchDailyData();
    await expect(rejectedResponse).toEqual(new Error('error message'));
    await expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api/daily');
  });

});
