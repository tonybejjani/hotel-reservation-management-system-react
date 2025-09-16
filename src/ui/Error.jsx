/** @format */

import styled from 'styled-components';

// eslint-disable-next-line react/prop-types

const StyledError = styled.p`
  color: var(--color-red-700);

  /* @media (max-width: 576px) {
    
  } */
`;
// eslint-disable-next-line react/prop-types
function Error({ children }) {
  return <StyledError>{children}</StyledError>;
}

export default Error;
