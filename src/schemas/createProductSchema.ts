import * as yup from 'yup'

export const createProductSchema = yup.object().shape({
    name: yup.string().min(2).required(),
    price: yup.number().min(0.1).required()
})
