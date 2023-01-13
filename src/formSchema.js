import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('name is required to place your order')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medieum', 'large'], 'Pizza size is required'),
    sauce: yup
        .string()
        .required("Please select a sauce to place your order"),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    tomatos: yup
        .boolean(),
    olives: yup
        .boolean(),
    gluten: yup
        .boolean(),
    special: yup
        .string()
})

// const toppings = ['pepperoni', 'sausage','tomatos', 'olives']

export default formSchema