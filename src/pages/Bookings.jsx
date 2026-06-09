/** @format */

import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Bookings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Outlet />
      {/* <Row type="vertical">
        <Heading as="h1">Bookings</Heading>

        <BookingTableOperations />
      </Row>
      <BookingTable /> */}
    </>
  );
}

export default Bookings;
