export interface ProductInterface {
    id: number;
    title: string;
    description: string;
    sales: number;
    guid: string;
    status: boolean;
    stock: number;
    brand: {
        id: number,
        guid: string,
        title: string
    },
    category: {
        id: number,
        guid: string,
        title: string
    },
    productPricings: {
        tax: number,
        min_order: number,
        price: string
    }
    productImages: []
}

export interface CategoriesInterface {
    id: number;
    guid: string;
    title: string
}

export interface TableHeader {
    name: string,
    key?: string,
    key2?: string,
    width: number | string
}

export interface CreateData {
    
}