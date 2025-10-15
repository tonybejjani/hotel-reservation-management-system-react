/** @format */

import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa';

const FilterButton = styled.button`
  position: fixed;
  bottom: 17rem;

  z-index: 1000;
  background: var(--color-brand-600);
  right: 2rem;
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(var(--color-brand-600-rgb), 0.4);
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1.6rem;

  /* Ensure proper stacking above content */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--color-brand-500),
      var(--color-brand-700)
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(var(--color-brand-600-rgb), 0.5);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  &:focus {
    outline: 2px solid var(--color-brand-200);
    outline-offset: 4px;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  @media (min-width: 768px) {
    display: none;
  }

  /* Phablet: Slightly larger FAB */
  @media (min-width: 640px) and (max-width: 767px) {
    width: 6rem;
    height: 6rem;
    /* Account for larger bottom nav */
    right: 2.4rem;
  }

  /* Very small screens: Smaller FAB */
  @media (max-width: 380px) {
    width: 5.2rem;
    height: 5.2rem;
    right: 1.6rem;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

function MobileFilterButton({ onClick }) {
  return (
    <FilterButton aria-label="Filter cabins" onClick={onClick}>
      <FaFilter />
    </FilterButton>
  );
}

export default MobileFilterButton;
