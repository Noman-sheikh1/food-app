import { useEffect, useState } from "react";
import ResturantCardwithFooddelevering from "./ResturantCardwithFooddelevering";
import WhatsOnYourMindPart from "./WhatsOnYourMindPart";
import TopRestaurant from "./TopRestaurant";

const Body = () => {
  const [listOfWhatonMind, setListOfWhatOnmind] = useState([]);
  const [topRestauarant, setTopRestaurant] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json);
      const restaurants1 =
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info ||
        [];
      setListOfWhatOnmind(restaurants1);
      console.log(restaurants1);
      // console.log("now second part api");
      const restaurants2 =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setTopRestaurant(restaurants2);
      const restaurants3 =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants3);
      console.log(restaurants3);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className=" pt-36 mt-18 ml-12 mr-12 overflow-x-auto whitespace-nowrap flex space-x-4">
        <WhatsOnYourMindPart listOfWhatonMind={listOfWhatonMind} />
      </div>
      <div className="pt-1 mt-1  ml-12 mr-12 overflow-x-auto whitespace-nowrap flex space-x-4">
        <TopRestaurant topRestauarant={topRestauarant} />;
      </div>
      <div className="ml-6 mr-6">
        <ResturantCardwithFooddelevering
          listOfRestaurants={listOfRestaurants}
        />
      </div>
    </div>
  );
};

export default Body;
