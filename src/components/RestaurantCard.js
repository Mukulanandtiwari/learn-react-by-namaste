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
        <div data-testid="resCard" className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo / 100} for two</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
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