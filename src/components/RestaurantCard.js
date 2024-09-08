const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="border  bg-gray-100 hover:bg-gray-200  m-2 p-2 border-solid w-[300px] flex flex-col box-border transform transition duration-200   hover:scale-95 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg">
        <div>
      <img
        className="w-[265px] h-[170.325px] object-cover rounded-md"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
        alt={resData?.info?.name || "Restaurant Image"}
      />
      </div>
      <div>
      <h3 className="font-bold text-lg mt-2">{resData?.info?.name}</h3>
      <h4 className="max-w-full flex flex-wrap break-words whitespace-normal mb-2">
        {resData?.info?.cuisines.join(", ")}
      </h4>
      <h4>{resData?.info?.avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

