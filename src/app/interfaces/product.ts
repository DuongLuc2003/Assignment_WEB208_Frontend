export interface IProduct {
    _id?: number;
    name: string | null | undefined;
    price: number | null | undefined;
    original_price: number;
    description: string;
    avatar:any
    images: any;
    slug: string;
    categoryId: number;
}

