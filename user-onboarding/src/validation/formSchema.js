import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
                  .string()
                  .trim()
                  .required("X"),
    last_name: yup
                  .string()
                  .trim()
                  .required("X"),
    email: yup
             .string()
             .email("X")
             .required("X"),
    password: yup
                .string()
                .trim()
                .required("X"),
    tos: yup
           .bool()
           .oneOf([true], "You must agree to the Terms of Service") 
  })

export default formSchema;
