import React from 'react';

import { shallow } from 'enzyme';
import { mockedStore } from '../utils/testing';
import Results from './Results';
import { Provider } from 'react-redux';

describe('Results Page Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={mockedStore()}>
        <Results />
      </Provider>
    );
  });

  test('renders component without crashing', () => {
    expect(wrapper.find(Results).length).toBe(1);
  });
});
