import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Addnewdata = () => {
  const products = {
    product_name: "",
    old_price: "",
    new_price: "",
  };
  const navigate = useNavigate();
  const [product, setproduct] = useState(products);
  const inputhandler = (e) => {
    const { name, value } = e.target;
    setproduct({ ...product, [name]: value });
  };
  const handelsubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", product)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <form>
          <label>Product Name:</label>
          <input
            name="product_name"
            type="text"
            onChange={inputhandler}
            placeholder="name"
          />
          <label>OldPrice:</label>
          <input
            type="text"
            onChange={inputhandler}
            placeholder="Old Price"
            name="old_price"
          />
          <label>NewPrice:</label>
          <input
            type="text"
            onChange={inputhandler}
            placeholder="NewPrice"
            name="new_price"
          />
          {/* <label>Upload image:</label>
          <input type="file" /> */}
          <button className="update" onClick={handelsubmit}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnewdata;
