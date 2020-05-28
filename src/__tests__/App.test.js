import React from 'react';
import { mount } from 'enzyme';
import App from '../App'

describe('App', () => {

  it('Renders correctly', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

});
