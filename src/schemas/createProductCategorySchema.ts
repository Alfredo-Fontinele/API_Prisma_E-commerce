import * as yup from 'yup'

export const createProductCategorySchema = yup.object().shape({
    id_product: yup.string().required(),
    id_category: yup.string().required()
})
