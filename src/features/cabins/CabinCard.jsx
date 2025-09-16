/** @format */

import styled from 'styled-components';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import Menus from '../../ui/Menus';
import CreateCabinForm from './CreateCabinForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useDeleteCabin from './useDeleteCabin';

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

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CabinName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-800);
  /* margin-bottom: 0.4rem; */

  /* background-color: var(--color-brand-50); */

  border-radius: var(--border-radius-md);
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CabinId = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  font-weight: 500;
`;

const CardActions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CardInfo = styled.div`
  display: grid;
  gap: 1rem;
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

  @media (min-width: 767px) and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

function CabinCard({ cabin = [] }) {
  const { deleteCabin, isDeleting } = useDeleteCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  console.log(cabin);
  return (
    <>
      <Card>
        <CardHeader>
          <CabinName>{name}</CabinName>
          <CardActions>
            <div>
              <Modal>
                <Menus.Menu>
                  <Menus.Toggle id={cabinId} />

                  <Menus.List id={cabinId}>
                    <Modal.Open opens="cabinForm">
                      <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                    </Modal.Open>
                    <Modal.Open opens="delete-form">
                      <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                    </Modal.Open>
                  </Menus.List>

                  <Modal.Window opens="cabinForm" title="edit cabin ">
                    <CreateCabinForm cabinToEdit={cabin} />
                  </Modal.Window>

                  <Modal.Window opens="delete-form">
                    <ConfirmDelete
                      resourceName={`Cabin ` + name}
                      disabled={isDeleting}
                      onConfirm={() => deleteCabin(cabinId)}
                    />
                  </Modal.Window>
                </Menus.Menu>
              </Modal>
            </div>
          </CardActions>
        </CardHeader>
        <CardInfo>
          <InfoRow>
            <InfoLabel>Fits up to </InfoLabel>
            <InfoValue>{maxCapacity} guests</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Price </InfoLabel>
            <InfoValue>{regularPrice}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Discount</InfoLabel>
            <InfoValue>{discount}</InfoValue>
          </InfoRow>

          {/* <InfoRow>
              <InfoLabel>description</InfoLabel>
              <InfoValue>{description}</InfoValue>
            </InfoRow> */}

          <InfoRow>
            <InfoValue>
              <img src={image} alt={name} />
            </InfoValue>
          </InfoRow>
        </CardInfo>
      </Card>
    </>
  );
}

export default CabinCard;
