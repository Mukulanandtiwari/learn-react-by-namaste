import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const dummy = "Dummy Data";
    const resInfo = useRestaurantMenu(resId); // Custom hook to fetch restaurant menu data
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    // If itemCards is still undefined or empty, handle that case
    if (itemCards.length === 0) {
        return (
            <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
                <h2>No menu items available</h2>
            </div>
        );
    }

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordions */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
