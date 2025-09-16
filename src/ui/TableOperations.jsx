/** @format */

import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  gap: 1.6rem;

  @media (max-width: 889px) {
    flex-direction: column;

    width: 100%;
    gap: 1.2rem;
  }
`;

export default TableOperations;
