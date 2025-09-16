/** @format */

import styled from 'styled-components';
import CabinCard from './CabinCard';
import Menus from '../../ui/Menus';
import ResponsivePagination from '../../ui/ResponsivePagination';
import FloatingPagination from '../../ui/FloatingPagination';

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
  return (
    <>
      <Menus>
        <CardsGrid>
          {cabins.map((cabin) => (
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
