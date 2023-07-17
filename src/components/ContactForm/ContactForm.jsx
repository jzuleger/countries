import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react';

import './ContactForm.css';

function ContactForm({ headline, onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  return (
    <section className="contact-form">
      <Heading as="h2" size="md">
        {headline}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form__form">
        <Stack spacing={5}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Your full name"
              autoComplete="name"
              {...register('name', {
                required: 'This is required'
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="phone">Phone number </FormLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              autoComplete="tel"
              {...register('phone', {
                required: 'This is required',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'The phone numbers should be numbers only'
                }
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </section>
  );
}

export default ContactForm;
