import toast from "react-hot-toast";
import { createOrder, orderCompleted, orderFailed } from "../../api/agent";
import { useNavigate } from "react-router-dom";
import { setOffersEmpty } from "../../store/reducers/offerSlice";
import { setCartEmpty } from "../../store/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";

const PaymentButton = ({ address, appliedOffer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [btnLoader, setBtnLoader] = useState(false);
  // when user want to create the order
  const createOrderHandeler = async () => {
    const token = localStorage.getItem("token");

    // if token is not found
    if (!token) {
      toast.error("User Not Found Login Again !");
      return;
    }

    // if address is not found
    if (!address) {
      toast.error("Address can't be blank !");
      return;
    }

    setBtnLoader(true);
    try {
      // creating the order
      const { data } = await createOrder(appliedOffer, token);

      // options
      const options = {
        name: "Fasty",
        key: data.key_id,
        order_id: data.order.id,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0_P5pMDJo1r8zYSDslQKYw8ybDYqSKd-e_zDoudxRQ&s",
        handler: async (response) => {
          try {
            setBtnLoader(true);
            const data = await orderCompleted(
              {
                orderId: options.order_id,
                paymentId: response.razorpay_payment_id,
                offerId: appliedOffer && appliedOffer.createdOfferId,
                address,
              },
              token
            );
            console.log(data);
            toast.success("Order Completed");
            // if user apply some offer we have to clear
            if (appliedOffer) {
              dispatch(setOffersEmpty());
            }

            // clearing the cart
            dispatch(setCartEmpty());
            // navigating to orders page
            navigate(`/account/orders/${options.order_id}`);
          } catch (error) {
            console.error("Error completing order");
            toast.error("Order completion failed. Please try again.");
          }
          setBtnLoader(false);
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();

      // if the payment is failed
      rzp1.on("payment.failed", async (res) => {
        try {
          await orderFailed(options.order_id, token);
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Payment Failed !");
    }
    setBtnLoader(false);
  };

  return (
    <>
      {address ? (
        <button
          type="submit"
          disabled
          className="primary-bg-darker-pink text-white py-2 rounded-md my-6 mx-2 flex justify-center items-center relative group"
          onClick={createOrderHandeler}
        >
          {btnLoader ? (
            <RiLoader3Fill className="text-2xl animate-spin" />
          ) : (
            "CONTINUE TO PAYEMNT"
          )}
          <span className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 mt-20 text-green-500 font-bold animate-pulse">
          Available very soon in your area
          </span>
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-400 text-white py-2 rounded-md my-4 mx-2"
        >
          CONTINUE TO PAYEMNT
        </button>
      )}
    </>
  );
};

export default PaymentButton;
