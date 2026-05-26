/** @format */

import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import ActionButton from '../../ui/ActionButton';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabinForm">
        <ActionButton actionText="Add New Cabin" />
      </Modal.Open>
      <Modal.Window opens="cabinForm" title="new cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
