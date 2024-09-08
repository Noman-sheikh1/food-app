const RestaurantCardtop = (props) => {
    const { resData } = props;
  
    return (
        <div className="border  bg-stone-100 hover:bg-stone-200 m-2 p-2 border-solid w-[280px] flex flex-col box-border transform transition duration-200   hover:scale-95 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg">
            <div>
          <img
            className="w-[260px] h-[160.325px] object-cover rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
            alt={resData?.info?.name || "Restaurant Image"}
          />
          </div>
          <div>
          <h3 className="font-bold text-lg mt-2">{resData?.info?.name}</h3>
          <h4 className="max-w-full flex flex-wrap break-words whitespace-normal mb-2">
            {resData?.info?.cuisines.join(", ")}
          </h4>
          <h4>{resData?.info?.avgRating} ⭐ stars</h4>
          </div>
        </div>
      );
  };
  
  export default RestaurantCardtop;
  
  