import * as yup from 'yup'

export const productCategorySchema = yup.object().shape({
    id_product: yup.string().required(),
    id_category: yup.string().required()
})

export const productSchema = yup.object().shape({
    name: yup.string().min(2).required(),
    price: yup.number().min(0.1).required(),
    image: yup.string().required(),
    description: yup.string().required()
})
