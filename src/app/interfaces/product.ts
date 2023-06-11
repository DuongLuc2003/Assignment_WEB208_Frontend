export interface IProduct {
    _id: number;
    name: string;
    slug: string;
    price: number;
    original_price: number;
    description: string;
    avatar: {
      base_url: string;
      publicId: string;
    };
    images: {
      base_url: string;
      publicId: string;
    }[];
    categoryId: string;
}

