import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

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
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo/100} for two</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;