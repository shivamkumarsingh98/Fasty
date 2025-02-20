import banners from "../../assets/constants/images";
import video1 from "../../assets/constants/video1.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import Kumbhbanner from "../../assets/constants/Kumbhbanner.png";

const TopBanner = () => {
  const isMdScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className="w-full h-full md:w-full md:h-full my-4">
      {isMdScreen ? (
        <div className="relative w-full h-full">
          <img
            src={Kumbhbanner}
            className="w-full h-full object-cover mt-2 px-5 md:px-0"
          />
          {/* 🔔 Bells Animation */}
          <div className="absolute top-0 left-[5%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[15%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[30%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[45%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[60%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[75%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[85%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
          <div className="absolute top-0 left-[95%] text-3xl scale-150 animate-bell-move">
            🔔
          </div>
        </div>
      ) : (
        <img
          src={Kumbhbanner}
          className="w-full h-full object-cover mt-2 px-5 md:px-0"
        />
      )}
      {/* <div className="w-full border rounded-md ">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="w-[30%] h-auto  content-center object-cover rounded-xl mt-2 px-5 md:px-0"
        />
      </div> */}
    </div>
  );
};

export default TopBanner;
