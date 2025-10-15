/** @format */

import styled from 'styled-components';
import CabinCard from './CabinCard';
import Menus from '../../ui/Menus';
// import ResponsivePagination from '../../ui/ResponsivePagination';
// import FloatingPagination from '../../ui/FloatingPagination';
import { useSearchParams } from 'react-router-dom';
import { Empty } from '../../ui/Table';

const CardsGrid = styled.div`
  display: grid;
  gap: 2rem;
  /* Add bottom padding to account for floating pagination */
  padding-bottom: 8rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 894px) {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 0; /* No floating pagination on tablet */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 699px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

function CabinCards({ cabins = [] }) {
  const [searchParams] = useSearchParams();

  if (cabins?.length === 0) return <Empty resource="cabins" />;
  const filterValue = searchParams.get('discount') || 'all';
  const sortByValue = searchParams.get('sortBy') || 'name-asc';

  let filteredCabins = cabins;

  if (filteredCabins === 'all') filteredCabins = cabins;

  if (filterValue === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  const [field, direction] = sortByValue.split('-');

  filteredCabins = filteredCabins.sort((a, b) => {
    // another trick
    // const modifier = direction === 'asc' ? 1 : -1;
    // const sortedCabins=  filterCabins.sort( (a,b) => (a[field] - b[field]) * modifier);

    const nameA = a[field]; // ignore upper and lowercase
    const nameB = b[field]; // ignore upper and lowercase

    if (nameA < nameB) {
      return direction === 'asc' ? 1 : -1;
    }
    if (nameA > nameB) {
      return direction === 'asc' ? -1 : 1;
    }
  });

  return (
    <>
      <Menus>
        <CardsGrid>
          {filteredCabins.map((cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </CardsGrid>
      </Menus>

      {/* Tablet/Small laptop pagination */}
      {/* <ResponsivePagination count={count} /> */}

      {/* Mobile floating pagination */}
      {/* <FloatingPagination count={count} /> */}
    </>
  );
}

export default CabinCards;
