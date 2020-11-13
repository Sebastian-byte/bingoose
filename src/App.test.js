import React from 'react';
import App from './App';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockedStore } from './utils/testing';

describe('Main App Rendering Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={mockedStore()}>
        <App />
      </Provider>
    );
  });

  test('renders the app without crashing', () => {
    expect(wrapper.find(App).length).toBe(1);
  });
});
