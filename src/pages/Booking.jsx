/** @format */
import { useEffect } from 'react';
import BookingDetail from '../features/bookings/BookingDetail';
function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <BookingDetail />;
}

export default Booking;
