import * as yup from 'yup';

const schema = yup.object().shape({
    first_name: yup
                  .string()
                  .trim()
                  .required("You must enter a first name.")
                  .matches(/[A-Za-z]/, "First name must contain only letters."),
    last_name: yup
                  .string()
                  .trim()
                  .required("You must enter a last name.")
                  .matches(/[A-Za-z]/, "Last name must contain only letters."),
    email: yup
             .string()
             .email("You must enter a valid email.")
             .required("You must enter an email."),
    password: yup
                .string()
                .trim()
                .required("You must enter a password.")
                .min(3, "Password must be at least 3 characters."),
    tos: yup
           .bool()
           .oneOf([true], "You must agree to the Terms of Service.") 
  })

export default schema;
