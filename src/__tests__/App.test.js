import React from 'react';
import { mount } from 'enzyme';
import App from '../App'
// import axios from 'axios';
// import { fetchData } from '../api/index';
// jest.mock('axios');

describe('App', () => {

  it('renders correctly', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has children components of Chart, Location, and Stats', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.childAt(0).text()).toEqual('StatsChartLocation')
  })

});
