/** @format */

import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import { useBooking } from './useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../ui/Spinner';

import { useCheckout } from '../check-in-out/useCheckout';
import { HiArrowUpOnSquare, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import useDeleteBooking from './useDeleteBooking';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Empty from '../../ui/Empty';
import OneColumnWrapper from '../../ui/OneColumnWrapper';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const MobileDisplay = styled.div`
  width: 100%;
  display: flex;
  padding-right: 0.6rem;

  @media (min-width: 750px) {
    display: none;
  }
`;

const DesktopDisplay = styled.div`
  display: none;
  @media (min-width: 750px) {
    display: inline-block;
  }
`;

function BookingDetail() {
  const { isLoading, isFetching, booking } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading || isFetching) return <Spinner />;

  console.log(booking);
  if (!booking) return <Empty resource="booking" />;

  const { status, id } = booking;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Modal>
        <Row type="horizontal">
          <MobileDisplay>
            <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
          </MobileDisplay>

          <HeadingGroup>
            <Heading as="h1">Booking #{id}</Heading>
            <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
          </HeadingGroup>
          <DesktopDisplay>
            <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
          </DesktopDisplay>
        </Row>

        <BookingDataBox booking={booking} />

        <OneColumnWrapper>
          <ButtonGroup>
            {status === 'unconfirmed' && (
              <Button onClick={() => navigate(`/checkin/${id}`)}>
                Check in
              </Button>
            )}
            {status === 'checked-in' && (
              <Button
                icon={<HiArrowUpOnSquare />}
                disabled={isCheckingOut}
                onClick={() => checkout(id)}
              >
                Check out
              </Button>
            )}
            <Modal.Open opens="delete-form">
              <Button variation="danger">Delete</Button>
            </Modal.Open>

            <Button variation="secondary" onClick={moveBack}>
              Back
            </Button>

            <Modal.Window name="delete" opens="delete-form">
              <ConfirmDelete
                resourceName={`Booking #` + id}
                disabled={isDeleting}
                onConfirm={() =>
                  deleteBooking(id, { onSettled: () => navigate(-1) })
                }
              />
            </Modal.Window>
          </ButtonGroup>
        </OneColumnWrapper>
      </Modal>
    </>
  );
}

export default BookingDetail;
