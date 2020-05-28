import React from 'react';
import { shallow } from 'enzyme';
import Location from '../components/Location/Location';

describe('Location', () => {
  
  it('renders correctly', () => {
    const wrapper = shallow(<Location/>);
    expect(wrapper).toMatchSnapshot();
  });

});

