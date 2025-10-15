import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        id: "1",
        name: "Modern Apartment in Downtown",
        description: "Beautiful modern apartment located in the heart of downtown. Perfect for couples and business travelers. Features stunning city views and all modern amenities.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
        rating: 4.8,
        address: {
            city: "New York",
            country: "USA"
        },
        price: 120,
        category: ["WiFi", "Kitchen", "Parking", "Pool", "Gym", "Air Conditioning"],
        reviews: [
            {
                name: "John Doe",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                rating: 5,
                comment: "Amazing place! Very clean and modern. The location is perfect."
            },
            {
                name: "Jane Smith",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
                rating: 4,
                comment: "Great apartment with all the amenities we needed. Would stay again!"
            }
        ]
    }
];