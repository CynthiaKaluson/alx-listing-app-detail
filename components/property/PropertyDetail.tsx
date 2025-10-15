import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    const [activeTab, setActiveTab] = useState("what-we-offer");

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">{property.rating} stars</span>
                <span>{property.address.city}, {property.address.country}</span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
                {/* Add more images */}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    {/* Tabs */}
                    <div className="border-b border-gray-200 mt-6">
                        <nav className="flex space-x-8">
                            <button
                                onClick={() => setActiveTab("what-we-offer")}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "what-we-offer"
                                        ? "border-green-500 text-green-600"
                                        : "border-transparent text-gray-500"
                                    }`}
                            >
                                What we offer
                            </button>
                            <button
                                onClick={() => setActiveTab("reviews")}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "reviews"
                                        ? "border-green-500 text-green-600"
                                        : "border-transparent text-gray-500"
                                    }`}
                            >
                                Reviews
                            </button>
                            <button
                                onClick={() => setActiveTab("about-host")}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "about-host"
                                        ? "border-green-500 text-green-600"
                                        : "border-transparent text-gray-500"
                                    }`}
                            >
                                About host
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6">
                        {activeTab === "what-we-offer" && (
                            <div>
                                <h2 className="text-2xl font-semibold">Description</h2>
                                <p className="mt-2">{property.description}</p>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-semibold">What this place offers</h2>
                                    <ul className="flex flex-wrap space-x-4 mt-4">
                                        {property.category.map((amenity, index) => (
                                            <li key={index} className="bg-gray-200 p-2 rounded-md">
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <ReviewSection reviews={property.reviews} />
                        )}

                        {activeTab === "about-host" && (
                            <div>
                                <h2 className="text-2xl font-semibold">About the Host</h2>
                                <p className="mt-2">Information about the host goes here...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column - Booking Section */}
                <div className="lg:col-span-1">
                    <BookingSection price={property.price} />
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;