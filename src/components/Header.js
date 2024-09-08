const Header = () => {
    return (
      <div className="flex z-10 fixed top-0 left-0 right-0 justify-between w-full bg-amber-600 shadow-xl shadow-grey-50">
        <div className="w-[100px] p-4">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv86s5jLvuvNk7tN5cWRz-cq90TxdOeIpnEw&s"
            }
            alt="not found"
          />
        </div>
        <div>
          <ul className="flex text-xl space-x-5 p-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  