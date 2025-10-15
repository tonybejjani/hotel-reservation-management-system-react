/** @format */

import styled from 'styled-components';
import BookingCard from './BookingCard';
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

function BookingCards({ bookings = [] }) {
  // const [searchParams] = useSearchParams();

  // if (bookings?.length === 0) return <Empty resource="bookings" />;
  // const filterValue = searchParams.get('discount') || 'all';
  // const sortByValue = searchParams.get('sortBy') || 'name-asc';

  // let filteredBookings = bookings;

  // if (filteredBookings === 'all') filteredBookings = bookings;

  // if (filterValue === 'no-discount') {
  //   filteredBookings = bookings.filter((booking) => booking.discount === 0);
  // }
  // if (filterValue === 'with-discount') {
  //   filteredBookings = bookings.filter((booking) => booking.discount > 0);
  // }

  // const [field, direction] = sortByValue.split('-');

  // filteredBookings = filteredBookings.sort((a, b) => {
  //   // another trick
  //   // const modifier = direction === 'asc' ? 1 : -1;
  //   // const sortedCabins=  filterCabins.sort( (a,b) => (a[field] - b[field]) * modifier);

  //   const nameA = a[field]; // ignore upper and lowercase
  //   const nameB = b[field]; // ignore upper and lowercase

  //   if (nameA < nameB) {
  //     return direction === 'asc' ? 1 : -1;
  //   }
  //   if (nameA > nameB) {
  //     return direction === 'asc' ? -1 : 1;
  //   }
  // });

  console.log(bookings);

  return (
    <>
      <Menus>
        <CardsGrid>
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
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

export default BookingCards;
