import React from 'react';
import { shallow } from 'enzyme';
import { getTestAttr } from '../../utils/testing';
import AnimatedBox from '../AnimatedBox';

describe('AnimatedBox Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AnimatedBox />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('animated-box');
    expect(wrapper.find(attr).length).toBe(1);
  });
});
