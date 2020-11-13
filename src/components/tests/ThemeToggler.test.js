import React from 'react';
import { shallow } from 'enzyme';
import { getTestAttr } from '../../utils/testing';
import ThemeToggler from '../ThemeToggler';

describe('ThemeToggler Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ThemeToggler />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('theme-toggler');
    expect(wrapper.find(attr).length).toBe(1);
  });

  describe('ThemeToggler Behavior', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        darkMode: false,
        onToggle: () => null,
      };
      wrapper = shallow(<ThemeToggler {...props} />);
    });

    test('renders component with darkMode off', () => {
      const attr = getTestAttr('check-box');
      expect(wrapper.find(attr).prop('checked')).toBe(false);
    });

    test('renders component with darkMode on', () => {
      const attr = getTestAttr('check-box');
      wrapper.setProps({ ...props, darkMode: true });
      expect(wrapper.find(attr).prop('checked')).toBe(true);
    });
  });
});
