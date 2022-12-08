/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
  test('should render', () => {
    render(<Dropdown children={<div />} button={<button />} />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = render(<Dropdown children={<div />} button={<button />} />);
    expect(wrapper).toMatchSnapshot();
  });
});
