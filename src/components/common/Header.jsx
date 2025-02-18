import { CgSearch } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { openAuthModal } from "../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { setSearchString } from "../../store/reducers/searchSlice";
import { useState, useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloggedIn } = useSelector((state) => state.authSlice);
  const { cartItems } = useSelector((state) => state.cartSlice);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  // placeholders
  const placeholders = ["atta", "rice", "oil", "fruits", "milk", "vegetables"];

  // useffect for changing the placeholder index
  useEffect(() => {
    // Function to update the placeholder index every 5 seconds
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    // Clear the interval when the component unmounts or when placeholder array changes
    return () => clearInterval(intervalId);
  }, []);

  // calculating total item & price in the cart
  let totalItems = 0;
  let price = 0;

  Object.values(cartItems).forEach((values) => {
    price += values.productType.price * values.quantity;
    totalItems += values.quantity;
  });

  // opening signup/login modal
  const openAuthModalHandeler = () => {
    dispatch(openAuthModal());
  };

  const goToCartPage = () => {
    if (isloggedIn) {
      navigate("/cart");
    } else {
      dispatch(openAuthModal());
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-between items-center bg-white gap-4 px-10 py-4 font-poppins">
        <h1
          className="text-5xl text-green-500 font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          FASTY
        </h1>
        <div className="flex items-center">
          <div className="mr-4 bg-white px-3 py-1 font-sans rounded-md font-bold text-black flex items-center">
            Delivery in 8 minutes
            <br />
          </div>
        </div>
        <div className="hidden md:flex justify-start items-center bg-gray-100 px-2 py-3 w-full min-[600px]:w-[50%] rounded-md">
          <CgSearch className="text-2xl text-green-500 " />
          <input
            type="text"
            placeholder={`You can search "${placeholders[placeholderIndex]}"`}
            className="px-2 bg-transparent w-full outline-none text-green-500 "
            onClick={() => {
              navigate("/search");
            }}
            onChange={(e) => {
              dispatch(setSearchString(e.target.value));
            }}
          />
        </div>
        <div className="flex gap-4 justify-center items-center">
          {isloggedIn ? (
            <MdAccountCircle
              className="text-green-500 font-medium text-6xl cursor-pointer font-cabin hover:text-pink-500"
              onClick={() => {
                navigate("/account");
              }}
            />
          ) : (
            <RiLoginCircleLine
              className="text-green-500 font-medium text-5xl cursor-pointer hover:text-pink-500"
              onClick={openAuthModalHandeler}
            />
          )}
          <div
            className="bg-green-500 px-6 py-1 w-full rounded-md text-white hidden min-[600px]:flex justify-center items-center gap-2 cursor-pointer"
            onClick={goToCartPage}
          >
            <IoCart className="text-5xl" />
            <h1 className="text-3xl">|</h1>
            <div className="flex flex-col justify-center items-center">
              <h1>{totalItems} Items</h1>
              <div className="flex justify-center items-center text-base">
                <PiCurrencyInrDuotone />
                <h1>{price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-start items-center bg-gray-100 px-5 py-2 w-full rounded-md">
        <CgSearch className="text-xl text-green-500" />
        <input
          type="text"
          placeholder={`You can search "${placeholders[placeholderIndex]}"`}
          className="px-3 py-3 text-2xl font-poppins bg-transparent w-full outline-none text-green-500"
          onClick={() => {
            navigate("/search");
          }}
          onChange={(e) => {
            dispatch(setSearchString(e.target.value));
          }}
        />
      </div>
      <div className="w-full bg-white text-center py-1 text-red-600 font-bold blink">
        <h1>
          We are not live yet! Product listings and prices are not final. Get
          ready for 50% OFF and FREE Delivery when we launch in your area soon.
        </h1>
      </div>
    </header>
  );
};

export default Header;
