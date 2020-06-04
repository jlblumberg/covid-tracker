import React from 'react';
import { mount } from 'enzyme';
import App from '../App'
import axios from 'axios';
import { fetchData } from '../api/index';
import mockResponse from '../__mocks__/mockResponse.json'
jest.mock('axios');

describe('App', () => {

  it('renders correctly', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has children components of Chart, Location, and Stats', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.childAt(0).text()).toEqual('StatsChartLocation')
  });

  it('stores data in state', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state().data).toEqual({});

  });

});

describe('App, using API, ', () => {

  it('Can handle correctly fetching data', async () => {
    axios.get.mockResolvedValue(mockResponse);
    const handledResponse = await fetchData();
    await expect(handledResponse).toEqual({ confirmed: 1, recovered: 3, deaths: 2, lastUpdate: 4 });
    await expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api');
  });

  it('Can handle erroneously fetching data', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error message')));
    await expect(fetchData()).rejects.toThrow('error message');
    await expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api');
  });

});

