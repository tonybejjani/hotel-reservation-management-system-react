/** @format */
import styled from 'styled-components';
import AddBooking from '../features/bookings/AddBooking';
import { useMoveBack } from '../hooks/useMoveBack';
import ButtonText from '../ui/ButtonText';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

const Stacked = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
function NewBooking() {
  const moveBack = useMoveBack();
  return (
    <>
      <Stacked>
        <Row type="horizontal">
          <Heading as="h1">New Booking</Heading>
        </Row>
        <Row>
          <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>
      </Stacked>

      <Row>
        <AddBooking />
      </Row>
    </>
  );
}

export default NewBooking;
