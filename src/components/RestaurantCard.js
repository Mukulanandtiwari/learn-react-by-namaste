import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);

    const {
        name,
        cloudinaryImageId,
        locality,
        areaName,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div data-testid="resCard" className="w-64 p-4 bg-white rounded-xl shadow-md text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img className="w-24 h-24 mb-3 rounded-lg object-cover" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
            <h4 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-gray-600">{locality}</h4>
            <h4 className="text-sm text-gray-600">{areaName}</h4>
            <h4 className="text-sm text-gray-600">{costForTwo / 100} for two</h4>
            <h4 className="text-sm text-gray-600">{avgRating} stars</h4>
            <h4 className="text-sm text-gray-600">{deliveryTime} minutes</h4>
            <h4 className="text-sm text-gray-600">User: {loggedInUser}</h4>
        </div>
    )
};

// Higher Order Component
// 1. input - RestaurantCard
// 2. output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;