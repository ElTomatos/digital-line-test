import { TableData } from "../types/tables";

export const errorMessages = {
  name: "please enter name",
  surname: "please enter surname",
  age: "please enter correct age",
  city: "please enter city",
};

export const isTextFieldValid = (value: string | undefined) =>
  value ? value.trim().length > 0 : false;

export const isNumberFieldValid = (value: string | undefined) =>
  value ? !isNaN(Number(value.trim())) : false;

export const validateEditRecordForm = (formData: TableData) => {
  const errors: Record<string, string> = {};

  if (!isTextFieldValid(formData.name)) {
    errors.name = errorMessages.name;
  }

  if (!isTextFieldValid(formData.surname)) {
    errors.surname = errorMessages.surname;
  }

  if (!isNumberFieldValid(formData.age)) {
    errors.age = errorMessages.age;
  }

  if (!isTextFieldValid(formData.city)) {
    errors.city = errorMessages.city;
  }

  return errors;
};

export const addErrorClass = (baseClass: string, error: string | undefined) =>
  error ? `${baseClass} has-error` : baseClass;
