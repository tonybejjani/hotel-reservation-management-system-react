/** @format */

// import { useEffect } from 'react';
// import { getCabins } from '../services/apiCabins';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import CabinCards from '../features/cabins/CabinCards';

import CabinTableOperations from '../features/cabins/CabinTableOperations';
import styled from 'styled-components';
import useCabins from '../features/cabins/useCabins';
import Spinner from '../ui/Spinner';
import MobileAddButton from '../ui/MobileAddButton';
import MobileFilterButton from '../ui/MobileFilterButton';
import MobileFilterSheet from '../ui/MobileFilterSheet';
import { useState } from 'react';

const DesktopView = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TabletView = styled.div`
  display: block;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileView = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
`;

function Cabins() {
  const { isLoading, cabins } = useCabins();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  return (
    <>
      <Row type="vertical">
        <Heading as="h1">Cabins</Heading>
        <TabletView>
          <CabinTableOperations mobile={false} />
        </TabletView>
      </Row>
      <Row>
        {/* Desktop Table View */}
        <DesktopView>
          <CabinTable cabins={cabins} />
        </DesktopView>

        {/* Mobile/Tablet Cards View */}
        <MobileView>
          <CabinCards cabins={cabins} />
          <MobileFilterButton onClick={() => setIsFilterOpen(true)} />
          <MobileFilterSheet
            open={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          >
            <CabinTableOperations mobile={true} />
          </MobileFilterSheet>
        </MobileView>

        {/* Mobile: Floating Action Button */}
        <MobileAddButton window="cabin" />
      </Row>
    </>
  );
}

export default Cabins;
