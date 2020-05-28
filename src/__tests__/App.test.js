import React from 'react';
import { mount } from 'enzyme';
import App from '../App'

describe('App', () => {

  it('renders correctly', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has children components of Chart, Location, and Stats', () => {
    const wrapper = mount(<App/>);
    const html = '<div><div>Stats</div><div>Chart</div><div>Location</div></div>'
    expect(wrapper.childAt(0).html()).toEqual(html)
  })

});
