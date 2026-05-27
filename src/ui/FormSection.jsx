/** @format */

import styled from 'styled-components';
import Heading from './Heading';

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  row-gap: 2rem;

  @media (min-width: 768px) {
    padding: 1.6rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 1280px) {
    padding: 1.6rem;
    margin-bottom: 3.2rem;
  }
`;

function FormSection({ children, title, addActionBtns }) {
  return (
    <>
      <StyledFormSection>{children}</StyledFormSection>
    </>
  );
}

export default FormSection;
