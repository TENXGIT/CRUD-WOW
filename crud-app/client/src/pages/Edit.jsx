import React, { useEffect, useState } from "react";
import "../pages/edit.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const users = {
    product_name: "",
    old_price: "",
    new_price: "",
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState(users);

  // const inputhandler = (e) => {
  //   const { name, value } = e.target;
  //   setproduct({ ...product, [name]: value });
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log("cant get data", error);
      });
  }, [id]);

  const handelchange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handelupdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, data)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handelupdate}>
        <label>Product Name:</label>
        <input
          type="text"
          value={data.product_name}
          onChange={handelchange}
          name="product_name"
        />
        <label>OldPrice:</label>
        <input
          type="text"
          value={data.old_price}
          onChange={handelchange}
          name="old_price"
        />
        <label>NewPrice:</label>
        <input
          type="text"
          value={data.new_price}
          onChange={handelchange}
          name="new_price"
        />
        <button className="update">Update</button>
      </form>
    </div>
  );
};

export default Edit;
