export interface IProduct {
    id?: number;
    name: string | null | undefined;
    price: number | null | undefined;
    original_price: number;
    description: string;
    avatar: string
    image?: string;
    slug: string;
    categoryId: number;
}