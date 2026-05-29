/** @format */

import styled from 'styled-components';
import Button from './Button';
import { HiMiniPlus } from 'react-icons/hi2';

/** @format */
const ButtonContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  /* Hide on mobile - FAB takes over */
  @media (max-width: 767px) {
    display: none;
  }

  /* Tablet: Adjust spacing */
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 1rem;
  }

  span {
    font-weight: 500;

    /* Hide text on smaller tablets if needed */
    @media (max-width: 1000px) {
      display: none;
    }
  }

  svg {
    width: 2.2rem;
    height: 2.2rem;

    /* Larger icon when text is hidden */
    /* @media (max-width: 900px) {
      width: 2.2rem;
      height: 2.2rem;
    } */
  }
`;

const StyledButton = styled(Button)`
  font-size: 1.6rem;
  padding: 1rem 1.4rem;
  font-weight: 600;
  /* Hide entire component on mobile */
  @media (max-width: 767px) {
    display: none;
  }

  /* Desktop: Standard button */
  @media (min-width: 1025px) {
    padding: 1.2rem 2rem;
  }

  /* Tablet: Compact button */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 1.6rem;
  }

  /* Smaller tablets: Icon-only */
  @media (max-width: 900px) {
    padding: 1rem;
    min-width: 4.4rem;
    justify-content: center;
  }
`;
function ActionButton({ ...props }) {
  return (
    <StyledButton onClick={props.onClick}>
      <ButtonContentWrapper>
        <HiMiniPlus />
        <span>{props.actionText}</span>
      </ButtonContentWrapper>
    </StyledButton>
  );
}

export default ActionButton;
