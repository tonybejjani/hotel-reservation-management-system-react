/** @format */

import ActionButton from '../../ui/ActionButton';
import Modal from '../../ui/Modal';
import CreateGuestForm from './CreateGuestForm';

function AddGuest() {
  return (
    <Modal>
      <Modal.Open opens="guest-form">
        <ActionButton actionText="Add New Guest" />
      </Modal.Open>

      <Modal.Window opens="guest-form" title="Add New Guest">
        <CreateGuestForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddGuest;
