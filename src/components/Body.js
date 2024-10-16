import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestauants, setListOfRestauants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.079100&lng=70.140152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setListOfRestauants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestauants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const filteredRestaurant = listOfRestauants.filter((res) =>
                            res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestauants.filter(
                            (res) => res.data.avgRating >= 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;