/** @format */

import styled from 'styled-components';

const StyledDataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.6rem;
  padding: 0.8rem 0;

  @media (min-width: 670px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1.6rem;
    padding: 0.8rem 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
