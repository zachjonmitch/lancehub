import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.usernameEmpty = 'Username is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.emailEmpty = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.notEmail = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.passwordEmpty = 'Password is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmationEmpty = 'Password confirmation is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordMatch= 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

