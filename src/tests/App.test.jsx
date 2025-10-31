import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.jsx';

describe('App routing and rendering', () => {
  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders homepage content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const welcomeHeading = screen.getByRole('heading', { level: 1, name: /welcome to zenfratech school/i });
    expect(welcomeHeading).toBeInTheDocument();
  });

  test('renders About page content', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    const aboutHeading = screen.getByRole('heading', { level: 1, name: /meet our dedicated staff/i });
    expect(aboutHeading).toBeInTheDocument();
  });
});
