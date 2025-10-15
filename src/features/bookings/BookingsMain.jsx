/** @format */

import BookingTable from './BookingTable';
import BookingTableOperations from './BookingTableOperations';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import styled from 'styled-components';
import MobileAddButton from '../../ui/MobileAddButton';
import MobileFilterButton from '../../ui/MobileFilterButton';
import MobileFilterSheet from '../../ui/MobileFilterSheet';
import { useState } from 'react';
import BookingCards from './BookingCards';
import useBookings from './useBookings';
import Spinner from '../../ui/Spinner';

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

function BookingsMain() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { isLoading, bookings, count } = useBookings();

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
        <Heading as="h1">Bookings</Heading>
        <TabletView>
          <BookingTableOperations mobile={false} />
        </TabletView>
      </Row>
      <Row>
        {/* Desktop Table View */}
        <DesktopView>
          <BookingTable bookings={bookings} count={count} />
        </DesktopView>

        {/* Mobile/Tablet Cards View */}
        <MobileView>
          <BookingCards bookings={bookings} />
          <MobileFilterButton onClick={() => setIsFilterOpen(true)} />
          <MobileFilterSheet
            open={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          >
            <BookingTableOperations mobile={true} />
          </MobileFilterSheet>
        </MobileView>

        {/* Mobile: Floating Action Button */}
        <MobileAddButton window="booking" />
      </Row>
    </>
  );
}

export default BookingsMain;
