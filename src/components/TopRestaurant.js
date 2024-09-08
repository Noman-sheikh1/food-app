// import RestaurantCardtop from "./RestaurantCardtop";
// const TopRestaurant = ({ topRestauarant }) => {
//     return (  
//         <div >
//             <div className=" m-2 p-2 text-2xl font-extrabold">
//             <h2>
//             Top restaurant chains in Dehradun
//             </h2>

//         </div>
    
//         <div className=" scrollbar-hide overflow-y-auto  mt-4 border-t-2">
//         <div className="flex space-x-4  p-4">
//           {topRestauarant.length > 0 ? (
//             topRestauarant.map((restaurant, index) => (
//               <RestaurantCardtop key={index} resData={restaurant} />
//             ))
//           ) : (
//             <p>No restaurants found</p>
//           )}
//         </div>
//       </div>
//            </div>
//     );
//   }
  
  
//   export default TopRestaurant;
  



  import RestaurantCardtop from "./RestaurantCardtop";

const TopRestaurant = ({ topRestauarant }) => {
    return (  
        <div>
            <div className="m-2 p-2 text-2xl font-extrabold">
                <h2>Top restaurant chains in Dehradun</h2>
            </div>
    
            <div className="scrollbar-hide-x overflow-x-auto mt-4 border-t-2">
                <div className="flex space-x-4 p-4">
                    {topRestauarant.length > 0 ? (
                        topRestauarant.map((restaurant, index) => (
                            <RestaurantCardtop key={index} resData={restaurant} />
                        ))
                    ) : (
                        <p>No restaurants found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TopRestaurant;
