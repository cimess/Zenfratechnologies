import React from 'react';
import { render, screen } from '@testing-library/react';
import StaffCard from '../../components/StaffCard.jsx';

describe('StaffCard component', () => {
  const staffProps = {
    name: 'Jane Doe',
    position: 'Teacher',
    photoURL: 'https://randomuser.me/api/portraits/women/10.jpg'
  };

  test('renders name and position', () => {
    render(<StaffCard {...staffProps} />);
    expect(screen.getByText(staffProps.name)).toBeInTheDocument();
    expect(screen.getByText(staffProps.position)).toBeInTheDocument();
  });

  test('renders staff photo with alt attribute', () => {
    render(<StaffCard {...staffProps} />);
    const image = screen.getByAltText(`Photo of ${staffProps.name}`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', staffProps.photoURL);
  });
});
