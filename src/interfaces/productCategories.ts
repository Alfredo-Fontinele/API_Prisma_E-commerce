export interface IProductId {
    id_product: string
}

export interface ICategoryId {
    id_category: string
}

export interface IProductCategory extends ICategoryId, IProductId {}
