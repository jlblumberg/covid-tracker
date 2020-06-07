import React from 'react';
import { shallow } from 'enzyme';
import Location from '../components/Location/Location';

describe('Location', () => {
  
  it('renders correctly', () => {
    const wrapper = shallow(<Location/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a form to choose the location to plot', () => {
    const wrapper = shallow(<Location/>);
    expect(wrapper.find('#location-picker').exists()).toEqual(true);
  });

});

