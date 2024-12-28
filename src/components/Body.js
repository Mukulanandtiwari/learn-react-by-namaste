import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestauants, setListOfRestauants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.075297&lng=70.133673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            console.log(json);
            setListOfRestauants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        } catch (error) {
            console.error("Failed to fetch data: ", error);
        }
    };


    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection.
            </h1>
        );
    };

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestauants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body p-8 bg-gray-50 flex flex-col items-center">
            <div className="search w-full max-w-[600px] mb-5 p-2 bg-white rounded-md shadow-md text-base flex justify-between">
                <input
                    type="text"
                    data-testid="searchInput"
                    className="w-[80%] border-none p-2 text-base rounded-md"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="bg-[#f16522] text-white border-none py-2 px-4 cursor-pointer text-base rounded-md transition-colors duration-300 ease-in-out hover:bg-[#e4561b]"
                    onClick={() => {
                        const filteredRestaurant = listOfRestauants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="filter mb-5">
                <button
                    className="bg-teal-700 text-white py-2 px-4 rounded cursor-pointer text-base transition-colors duration-300 ease-in-out hover:bg-teal-800"
                    onClick={() => {
                        const filteredList = listOfRestauants.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="search m-4 p-4 flex items-center">
                <label>UserName : </label>
                <input
                    className="border border-black p-2"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="res-container flex flex-wrap gap-5 justify-center">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default Body;