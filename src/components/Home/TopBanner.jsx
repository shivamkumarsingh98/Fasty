import banners from "../../assets/constants/images";
import video1 from "../../assets/constants/video1.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import Kumbhbanner from "../../assets/constants/Kumbhbanner.png";

const TopBanner = () => {
  const isMdScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className="w-full h-full md:w-full md:h-full my-4 ">
      <div className="relative w-full h-full">
        <img
          src="/topbanner2.png"
          className="w-full h-full object-cover mt-2 px-5 md:px-0"
        />
        {/* <img
          src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/11.8.3/tr:w-1280,ar-1438-235,pr-true,f-auto,q-80//images/paan-corner/paan-corner-banner-desktop.png"
          className="w-full h-full object-cover mt-2 px-5 md:px-0"
        /> */}
      </div>
    </div>
  );
};

export default TopBanner;
