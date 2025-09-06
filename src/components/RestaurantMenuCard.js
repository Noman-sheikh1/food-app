import { useEffect } from "react";
const RestaurantMenuCard=()=>{
    //const[resInfo,setResInfo]=useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        try {
          const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=311806&catalog_qa=undefined&submitAction=ENTER"
          );
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    return (
        <div>
            <h1>
                our special restaurant  menu
            </h1>
            <h2>
                for snacks
            </h2>
            <ul>
                <li>samosa</li>
                <li>chowmeen</li>
                <li>
                    bread pakoda
                </li>
            </ul>
        </div>
    );

}
export  default RestaurantMenuCard;