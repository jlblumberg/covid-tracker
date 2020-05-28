import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../components/Stats/Stats';

describe('Stats', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Stats/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});