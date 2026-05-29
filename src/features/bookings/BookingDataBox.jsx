/** @format */

import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import {
  HiMiniCalendar,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

import DataItem from '../../ui/DataItem';
import { Flag } from '../../ui/Flag';

import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const MobileHeader = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 2rem;
  color: #e0e7ff;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 1.2rem;

  svg {
    height: 2.4rem;
    width: 2.4rem;

    @media (min-width: 440px) {
      height: 3.2rem;
      width: 3.2rem;
    }
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.6rem;

    @media (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  & span {
    font-family: 'Sono';
    font-size: 1.6rem;
    margin-left: 4px;

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
  }

  @media (min-width: 440px) {
    padding: 2rem 4rem;
    row-gap: 1.8rem;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 1.6rem;

  @media (min-width: 670px) {
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  @media (min-width: 670px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1.2rem;
    margin-bottom: 1.6rem;
    color: var(--color-grey-500);
  }
`;

const Bullet = styled.span`
  display: none;

  @media (min-width: 1024px) {
    display: inline;
  }
`;
const Price = styled.div`
  font-size: 1.4rem;
  padding: 0.8rem 2.4rem 2.4rem 2.4rem;
  border-radius: var(--border-radius-sm);
  margin-top: 1.2rem;

  text-align: center;

  background-color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }

  @media (min-width: 670px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 1.6rem 3.2rem;
    border-radius: var(--border-radius-sm);
    margin-top: 2.4rem;
  }
`;

const PaidItem = styled.div`
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  text-align: center;
  background-color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};

  @media (min-width: 670px) {
    background-color: transparent;
    color: ${(props) =>
      props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: center;

  @media (min-width: 670px) {
    text-align: right;
  }
`;

// A purely presentational component
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <MobileHeader>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>
        <DateWrapper>
          <HiMiniCalendar />
          <p>
            {format(new Date(startDate), 'MM/dd/yyyy')} (
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), 'MM/dd/yyyy')}
          </p>
        </DateWrapper>
      </MobileHeader>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <Bullet>&bull;</Bullet>
          <p>{email}</p>
          <Bullet>&bull;</Bullet>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice,
              )} breakfast)`}
          </DataItem>

          <PaidItem isPaid={isPaid}>
            {isPaid ? 'Paid' : 'Will pay at property'}
          </PaidItem>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
