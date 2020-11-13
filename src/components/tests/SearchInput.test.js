import React from 'react';
import { shallow } from 'enzyme';
import { getTestAttr } from '../../utils/testing';
import SearchInput from '../SearchInput';

describe('SearchInput Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchInput />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('search-input');
    expect(wrapper.find(attr).length).toBe(1);
  });
});
