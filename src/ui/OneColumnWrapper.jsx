/** @format */

import styled from 'styled-components';
import Heading from './Heading';

const CreateCancelWrapper = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  button:nth-child(1) {
    grid-row: 2/3;
    grid-column: 1;
  }

  @media (min-width: 430px) {
    display: flex;
    justify-content: flex-end;
  }
`;

function OneColumnWrapper({ children }) {
  return (
    <>
      <CreateCancelWrapper>{children}</CreateCancelWrapper>
    </>
  );
}

export default OneColumnWrapper;
