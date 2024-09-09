import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';  // Counter 컴포넌트 가져오기

describe('Counter 컴포넌트', () => {
  it('Counter 컴포넌트를 렌더링합니다', () => {
    render(<Counter />);
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  });
});