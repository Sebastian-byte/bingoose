import React from 'react';
import { shallow } from 'enzyme';
import { getTestAttr } from '../../utils/testing';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorMessage />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('error-message');
    expect(wrapper.find(attr).length).toBe(1);
  });
});
