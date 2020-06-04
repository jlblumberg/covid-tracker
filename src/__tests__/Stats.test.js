import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../components/Stats/Stats';
import dataMock from '../__mocks__/mockData.json'

describe('Stats', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Stats data={dataMock} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('inherits data from app', () => {
    const wrapper = shallow(<Stats data={dataMock} />);
    expect(wrapper.text()).toContain('Loading data...');
    expect(wrapper.find('#stats').exists()).toEqual(true);
  });
  
});