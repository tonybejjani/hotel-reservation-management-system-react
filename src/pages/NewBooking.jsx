/** @format */
import styled from 'styled-components';
import { easeIn, easeInOut, motion } from 'framer-motion';
import AddBooking from '../features/bookings/AddBooking';
import { useMoveBack } from '../hooks/useMoveBack';
import ButtonText from '../ui/ButtonText';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HiMiniXCircle } from 'react-icons/hi2';

const Stacked = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.isMobile === true
      ? 'margin: 0rem 2rem 2rem 2rem; '
      : 'margin-bottom: 2rem;'}
  ${(props) =>
    props.isMobile === true
      ? 'position: sticky; top: 0;  z-index:1000; background: linear-gradient(135deg,rgba(255, 255, 255, 0.95) 0%,rgba(255, 255, 255, 0.9) 100%);backdrop-filter: blur(40px);-webkit-backdrop-filter: blur(10px);  padding-top:2rem; '
      : ''}
`;

const PageWrapper = styled.div`
  padding-bottom: 4rem;
`;

const HideOnMobile = styled.div`
  ${(props) => (props.isMobile === true ? 'display: none;' : '')}

  @media (min-width: 768px) {
    display: block;
  }
`;

const ShowOnMobile = styled.div`
  ${(props) => (props.isMobile === true ? 'display: block;' : '')}

  svg {
    width: 5.2rem;
    height: 5.2rem;

    @media (min-width: 440px) {
      width: 6.2rem;
      height: 6.2rem;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function NewBooking() {
  const moveBack = useMoveBack();
  const location = useLocation();
  const isMobileView = location.state?.isMobileView;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 35,
      }}
    >
      <PageWrapper>
        <Stacked isMobile={isMobileView}>
          <Row type="horizontal">
            <Heading as="h1">New Booking</Heading>
          </Row>
          <HideOnMobile isMobile={isMobileView}>
            <Row>
              <ButtonText onClick={moveBack}>&larr; Back </ButtonText>
            </Row>
          </HideOnMobile>
          <ShowOnMobile isMobile={isMobileView}>
            <Row>
              <ButtonText onClick={moveBack}>
                {' '}
                <HiMiniXCircle />
              </ButtonText>
            </Row>
          </ShowOnMobile>
        </Stacked>

        <Row>
          <AddBooking isMobile={isMobileView} />
        </Row>
      </PageWrapper>
    </motion.div>
  );
}

export default NewBooking;
