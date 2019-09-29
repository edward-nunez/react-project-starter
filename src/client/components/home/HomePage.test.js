import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

it('renders header', () => {
  const homepage = shallow(<HomePage />);

  expect(homepage.find('h1').length).toBe(1);
});
