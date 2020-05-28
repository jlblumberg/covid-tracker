import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../components/Chart/Chart';

describe('Chart', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Chart/>)
    expect(wrapper).toMatchSnapshot();
  });

});