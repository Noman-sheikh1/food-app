import RestaurantCard from "./RestaurantCard";
const ResturantCardwithFooddelevering = ({ listOfRestaurants }) => {
    return (
        <div className="flex flex-row flex-wrap p-3 m-2 scrollbar-hide"> 
        { listOfRestaurants.map((restaurants)=>(
         
           
          
              <RestaurantCard  resData={restaurants}/>
          ))}
          </div>
    );
  }
  
  
  export default ResturantCardwithFooddelevering;
  