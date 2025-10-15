/** @format */

import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import styled from 'styled-components';
import AddCabin from '../cabins/AddCabin';
const ActionButton = styled.div`
  margin-left: auto;

  & button {
    box-shadow: 0 3px 6px 0 rgba(25, 27, 36, 0.16),
      0 -1px 4px 0 rgba(25, 27, 36, 0.04);
  }
  & svg {
    scale: 1.8;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0.5rem 0;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? 'var(--color-grey-900)' : 'var(--color-grey-0)'};
`;

const MobileSheetSection = styled.section`
  margin-bottom: 1.8rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? 'var(--color-grey-900)' : 'var(--color-grey-0)'};
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;

  margin-bottom: 0.8rem;
  color: ${({ theme }) =>
    theme.isDarkMode ? 'var(--color-brand-200)' : 'var(--color-grey-700)'};
`;

function CabinTableOperations({ mobile = false }) {
  if (mobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <MobileContainer>
          <MobileSheetSection>
            <SectionTitle>Discount</SectionTitle>
            <Filter
              filterField="discount"
              mobile={mobile}
              options={[
                { value: 'all', label: 'All' },
                { value: 'no-discount', label: 'No Discount' },
                { value: 'with-discount', label: 'With Discount' },
              ]}
              defaultFilter={0}
            />
          </MobileSheetSection>

          <MobileSheetSection>
            <SectionTitle>Sort By</SectionTitle>
            <SortBy
              mobile
              options={[
                { value: 'name-asc', label: 'Sort by name (A-Z)' },
                { value: 'name-desc', label: 'Sort by name (Z-A)' },
                {
                  value: 'regularPrice-asc',
                  label: 'Sort by price (lowest first)',
                },
                {
                  value: 'regularPrice-desc',
                  label: 'Sort by price (highest first)',
                },
                {
                  value: 'maxCapacity-asc',
                  label: 'Sort by capacity (lowest first)',
                },
                {
                  value: 'maxCapacity-desc',
                  label: 'Sort by capacity (highest first)',
                },
              ]}
            />
          </MobileSheetSection>
        </MobileContainer>
      </div>
    );
  }

  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'With Discount' },
        ]}
        defaultFilter={0}
      />
      <SortBy
        mobile={false}
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          {
            value: 'regularPrice-asc',
            label: 'Sort by price (lowest first)',
          },
          {
            value: 'regularPrice-desc',
            label: 'Sort by price (highest first)',
          },
          {
            value: 'maxCapacity-asc',
            label: 'Sort by capacity (lowest first)',
          },
          {
            value: 'maxCapacity-desc',
            label: 'Sort by capacity (highest first)',
          },
        ]}
      />
      <ActionButton>
        <AddCabin />
      </ActionButton>
    </TableOperations>
  );
}

export default CabinTableOperations;
