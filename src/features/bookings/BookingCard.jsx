/** @format */

import styled from 'styled-components';
// import { HiPencil, HiTrash } from 'react-icons/hi2';
// import Modal from '../../ui/Modal';
// import Menus from '../../ui/Menus';
// import CreateCabinForm from './CreateCabinForm';
// import ConfirmDelete from '../../ui/ConfirmDelete';
// import useDeleteCabin from './useDeleteCabin';
import useDeleteBooking from './useDeleteBooking';
import Modal from '../../ui/Modal';
import Menus from '../../ui/Menus';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
  HiMiniCalendar,
  HiOutlineMoon,
  HiOutlineHomeModern,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi2';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import { format, isToday } from 'date-fns';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';
import Tag from '../../ui/Tag';

const Card = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);

  @media (min-width: 767px) and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const InfoValue = styled.span`
  font-size: 1.6rem;
  color: var(--color-grey-800);
  font-weight: 500;
`;

const GuestInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  @media (min-width: 470px) {
    font-size: 1.6rem;
  }
`;

const GuestName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-800);
  border-radius: var(--border-radius-md);

  @media (min-width: 470px) {
    font-size: 1.8rem;
  }
`;

const GuestEmail = styled.div``;

const CardInfo = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  font-size: 1.6rem;
`;

function CabinCard({ booking = [] }) {
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const navigate = useNavigate();
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  } = booking;

  return (
    <>
      <Card>
        <CardHeader>
          <Stacked>
            <Tag type={statusToTagName[status]}>
              {status?.replace('-', ' ')}
            </Tag>
            <GuestInfo>
              <GuestName>{guestName}</GuestName>
              <GuestEmail>{email}</GuestEmail>
            </GuestInfo>
          </Stacked>

          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={bookingId} />
              <Menus.List id={bookingId}>
                <Menus.Button
                  icon={<HiEye />}
                  onClick={() => navigate(`/bookings/${bookingId}`)}
                >
                  See details
                </Menus.Button>

                {status === 'unconfirmed' && (
                  <Menus.Button
                    icon={<HiArrowDownOnSquare />}
                    onClick={() => navigate(`/checkin/${bookingId}`)}
                  >
                    Check in
                  </Menus.Button>
                )}
                {status === 'checked-in' && (
                  <Menus.Button
                    icon={<HiArrowUpOnSquare />}
                    disabled={isCheckingOut}
                    onClick={() => checkout(bookingId)}
                  >
                    Check out
                  </Menus.Button>
                )}

                <Modal.Open opens="delete-form">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete" opens="delete-form">
                <ConfirmDelete
                  resourceName={`Booking #` + bookingId}
                  disabled={isDeleting}
                  onConfirm={() => deleteBooking(bookingId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </CardHeader>
        <CardInfo>
          <InfoRow>
            <InfoLabel>
              <HiOutlineHomeModern size="25" />
            </InfoLabel>
            <Amount>{cabinName}</Amount>
          </InfoRow>
          <InfoRow>
            <InfoLabel>
              <HiMiniCalendar size="25" />
            </InfoLabel>
            <InfoValue>
              <span>
                {format(new Date(startDate), 'MM/dd/yyyy')} &mdash;{' '}
                {format(new Date(endDate), 'MM/dd/yyyy')}
              </span>
            </InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>
              <HiOutlineMoon size="25" />
            </InfoLabel>
            <InfoValue>
              <span>
                {isToday(new Date(startDate))
                  ? 'Today'
                  : ` ${numNights} night${numNights === 1 ? ' ' : 's'} stay`}
              </span>
            </InfoValue>
          </InfoRow>

          <InfoRow>
            <InfoLabel>
              <HiOutlineCurrencyDollar size="25" />
            </InfoLabel>
            <InfoValue>
              <Amount>{formatCurrency(totalPrice)}</Amount>
            </InfoValue>
          </InfoRow>
        </CardInfo>
      </Card>
    </>
  );
}

export default CabinCard;
