import React from 'react';
import { shallow } from 'enzyme';
import { getTestAttr } from '../../utils/testing';
import ResultList from '../ResultList';

describe('PlaceHolderLoading Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResultList />);
  });

  test('renders component without crashing', () => {
    const attr = getTestAttr('result-list');
    expect(wrapper.find(attr).length).toBe(1);
  });

  describe('ResultList Behavior', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        items: [],
        loading: false,
      };
      wrapper = shallow(<ResultList {...props} />);
    });

    test('renders an empty list', () => {
      const attr = getTestAttr('list');
      expect(wrapper.find(attr).prop('data').length).toBe(0);
    });

    test('renders some list elements', () => {
      const attr = getTestAttr('list');
      wrapper.setProps({
        ...props,
        items: [
          { heading: 'Hello', url: 'https://test.com', snippet: 'Test text' },
        ],
      });
      expect(wrapper.find(attr).prop('data').length).toBe(1);
    });
  });
});
