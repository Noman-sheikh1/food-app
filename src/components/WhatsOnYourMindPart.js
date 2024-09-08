import OnMindCards from "./OnMindCards";
 


const WhatsOnYourMindPart = ({ listOfWhatonMind }) => {
  return (
    <div className="relative">
      <h2 className=" block text-2xl font-extrabold p-4">
        What's on your Mind?
      </h2>
      <div className="scrollbar-hide overflow-x-auto mt-4 border-t-2">
        <div className="flex space-x-4 p-4">
          {listOfWhatonMind.length > 0 ? (
            listOfWhatonMind.map((restaurant, index) => (
              <OnMindCards key={index} resData={restaurant} />
            ))
          ) : (
            <p>No restaurants found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsOnYourMindPart;
