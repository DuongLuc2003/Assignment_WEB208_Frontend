export interface IProduct {
    _id?: number;
    name: string | null | undefined;
    price: number | null | undefined;
    original_price: number;
    description: string;
    avatar:any
    image?: string;
    slug: string;
    categoryId: number;
}

