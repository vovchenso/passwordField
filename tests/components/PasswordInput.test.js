import React from 'react';
import PasswordInput from '../../src/components/PasswordInput/PasswordInput';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<PasswordInput />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders without props', () => {
    const rendered = renderer.create(<PasswordInput />).toJSON();
    expect(rendered).toMatchSnapshot();
});

it('renders with placeholder', () => {
    const rendered = renderer.create(
        <PasswordInput
            placeholder="TEST"
        />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
});

it('renders with change callback', () => {
    const rendered = renderer.create(
        <PasswordInput
            onChange={ () => {} }
        />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
});

it('renders with placeholder and callback', () => {
    const rendered = renderer.create(
        <PasswordInput
            placeholder="TEST"
            onChange={ () => {} }
        />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
});


