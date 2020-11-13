import React from 'react';
import { shallow } from 'enzyme';
import { getTestAttr } from '../../utils/testing';
import PlaceholderLoading from '../PlaceholderLoading';

describe('PlaceHolderLoading Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlaceholderLoading />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('placeholder');
    expect(wrapper.find(attr).length).toBe(1);
  });
});
