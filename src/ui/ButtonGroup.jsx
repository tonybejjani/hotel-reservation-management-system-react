/** @format */

import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: flex-end;

  @media (min-width: 440px) {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: flex-end;
  }
`;

export default ButtonGroup;
