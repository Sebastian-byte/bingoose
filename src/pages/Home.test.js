import React from 'react';

import { shallow } from 'enzyme';
import Home from './Home';
import { getTestAttr } from '../utils/testing';

describe('Home Page Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('home');
    expect(wrapper.find(attr).length).toBe(1);
  });
});
