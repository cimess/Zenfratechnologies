import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../pages/About.jsx';

// Mock gsap to avoid actual animations during test
jest.mock('gsap', () => ({
  fromTo: jest.fn(() => ({
    stagger: jest.fn()
  }))
}));

describe('About page', () => {
  test('renders heading and staff cards', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { level: 1, name: /meet our dedicated staff/i });
    expect(heading).toBeInTheDocument();

    // Staff cards have role listitem
    const staffCards = screen.getAllByRole('listitem');
    expect(staffCards.length).toBeGreaterThan(0);
  });
});
