import * as yup from 'yup';

export const insuranceValidationSchema = yup.object().shape({
  provider_name: yup.string().required(),
  customer_id: yup.string().nullable(),
});
