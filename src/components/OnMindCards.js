
const OnMindCards= ({resData}) => {
    

    return (
        <div className="w-[160px] h-[190px]">

       
        <div className=" w-[154px] h-[184px]" >
             
          <img
            className="  cursor-pointer p-2 m-2"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+resData.imageId}alt="not loaded "/>
       
         
        </div>
        </div>
      );
}
export default OnMindCards;


