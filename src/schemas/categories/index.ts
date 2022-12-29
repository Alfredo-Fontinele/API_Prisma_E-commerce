import * as yup from 'yup'

export const categorySchema = yup.object().shape({
    name: yup.string().min(2).required()
})
