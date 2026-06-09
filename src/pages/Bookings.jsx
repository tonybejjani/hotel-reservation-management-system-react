/** @format */

import { Outlet } from 'react-router-dom';

function Bookings() {
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
