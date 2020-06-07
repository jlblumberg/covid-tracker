import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../components/Chart/Chart';
import dataMock from '../__mocks__/mockData.json'

describe('Chart', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Chart data={dataMock}/>)
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a chart', () => {
    const wrapper = shallow(<Chart data={dataMock}/>);
    expect(wrapper.find('#chart').exists()).toEqual(true);
  });

});