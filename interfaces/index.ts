export interface PropertyProps {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    address: {
        city: string;
        country: string;
    };
    price: number;
    category: string[];
    reviews: any[];
}