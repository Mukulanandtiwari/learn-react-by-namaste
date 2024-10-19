import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);  // Log the entire response to inspect its structure
        setResInfo(json?.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    // Safely extract restaurant info with optional chaining
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

    // Safely access itemCards with optional chaining and fallback to an empty array if undefined
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

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
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
