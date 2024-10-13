import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestauants, setlistOfRestauants] = useState(resList);

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestauants.filter((res) => res.data.avgRating > 4);
                    setlistOfRestauants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestauants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;