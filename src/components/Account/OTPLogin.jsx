import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const OTPLogin = () => {
  const [mobile, setmobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const sendOTP = async () => {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/customers/send-otp", {
        mobile,
      });

      if (response.status === 200) {
        alert("OTP sent successfully!");
        navigate("/verify");
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login with OTP</h2>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={sendOTP}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

export default OTPLogin;
