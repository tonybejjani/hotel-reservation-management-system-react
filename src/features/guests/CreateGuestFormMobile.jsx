/** @format */

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useCreateGuest from './useCreateCabin';
import useEditGuest from './useEditGuest';
import { useGlobalContext } from '../../context/GlobalContext';
import FormRow from '../../ui/FormRow';
import OneColumnWrapper from '../../ui/OneColumnWrapper';
import { useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 4rem;
`;

function CreateGuestFormMobile({ guestToEdit = {}, onCloseModal }) {
  const { createGuest, isCreating } = useCreateGuest();
  const { editGuest, isEditing } = useEditGuest();

  const { id: editId, ...editValues } = guestToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { setGuestRowData } = useGlobalContext();
  const { errors } = formState;

  function onSubmit(data) {
    isEditSession
      ? editGuest(
          { newGuest: { ...data }, id: editId },
          {
            onSuccess: () => {
              reset();
              onCloseModal?.();
            },
          },
        )
      : createGuest(
          { ...data },
          {
            onSuccess: () => {
              reset();
              onCloseModal?.();
              setGuestRowData(data);
            },
          },
        );
  }

  const isWorking = isCreating || isEditing;

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
      <FormWrapper>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          type={onCloseModal ? 'modal' : 'regular'}
          style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
        >
          <FormRow label={'Full name'} error={errors?.fullName?.message}>
            <Input
              type="text"
              id="fullName"
              disabled={isWorking}
              {...register('fullName', {
                required: 'This field is required',
              })}
            />
          </FormRow>

          <FormRow label={'Email'} error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              disabled={isWorking}
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
          </FormRow>
          <FormRow label={'National ID'} error={errors?.nationalID?.message}>
            <Input
              type="text"
              id="nationalID"
              disabled={isWorking}
              {...register('nationalID', {
                required: 'This field is required',
              })}
            />
          </FormRow>
          <FormRow label={'Nationality'} error={errors?.nationality?.message}>
            <Input
              type="text"
              id="nationality"
              disabled={isWorking}
              {...register('nationality', {
                required: 'This field is required',
              })}
            />
          </FormRow>

          <OneColumnWrapper>
            <Button
              variation="secondary"
              type="button"
              onClick={() => onCloseModal?.()}
              disabled={isWorking}
              size="smallForm"
            >
              Cancel
            </Button>
            <Button disabled={isWorking} size="smallForm">
              {isWorking
                ? isEditSession
                  ? 'Updating...'
                  : 'Creating...'
                : isEditSession
                  ? 'Edit Guest'
                  : 'Add Guest'}
            </Button>
          </OneColumnWrapper>
        </Form>
      </FormWrapper>
    </motion.div>
  );
}

export default CreateGuestFormMobile;
