import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

export const CameraUpload = () => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleButtonClick = () => {
    inputRef.current.click(); // input ko programmatically click karo
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      console.log("File selected:", file.name);
      // Upload ya processing logic yaha dal sakte ho
    }
  };

  return (
    <div>
      <FaCamera
        onClick={handleButtonClick}
        className="text-2xl text-green-500 cursor-pointer"
      />

      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {preview && (
        <div style={{ marginTop: "20px" }}>
          <p>Preview:</p>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

// export default CameraUpload;
