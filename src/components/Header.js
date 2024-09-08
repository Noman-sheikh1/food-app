const Header = () => {
    return (
      <div className="flex z-10 fixed top-0 left-0 right-0 justify-between w-full bg-amber-600 shadow-xl shadow-grey-50">
        <div className="w-[100px] m-2 " >
          <img className="rounded-2xl"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv86s5jLvuvNk7tN5cWRz-cq90TxdOeIpnEw&s"
            }
            alt="not found"
          />
        </div>
        <div>
          <ul className="flex text-xl space-x-5 p-5 m-5   ">
             <li className="text-black hover:text-white hover:cursor-pointer mx-4">App corporate</li>
            <li className="text-black hover:text-white hover:cursor-pointer mx-4">Search</li>
            <li className="text-black hover:text-white hover:cursor-pointer mx- 4">Offers</li>
            <li className="text-black hover:text-white hover:cursor-pointer mx-4">Help</li>
            <li className="text-black hover:text-white hover:cursor-pointer mx-4">sign In</li>
            <li className="text-black hover:text-white hover:cursor-pointer mx-">Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  