/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const yupCreateNoteInput = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  isArchived: yup.boolean(),
  
});
