import React, { useState } from "react";
import cart from "../data/Assets/cart_icon.png";
import "../components/nav.css";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const Nav = () => {
  const [data, setdata] = useState();
  const [Data, setData] = useState([]);
  const handelchange = async (e) => {
    setdata(e.target.value);
    const response = await fetch("http://localhost:8000/api/getall");
    const matter = await response.json();
    setData(matter);
  };

  return (
    <div>
      <div className="nav-main">
        <div>
          <input
            id="input"
            type="text"
            placeholder="Enter the product"
            onChange={handelchange}
            value={data}
          />

          <button className="search">search</button>
          <Link to={"/"}>
            <button className="search">home</button>
          </Link>
        </div>

        <div id="cart">
          <Link to={"/Cart"}>
            <img className="cart-icon" src={cart} alt="cart" />
          </Link>

          <div className="count">0</div>
        </div>
      </div>
      {data &&
        Data.filter(
          (item) =>
            item.product_name.startsWith(data) && item.product_name !== data
        )
          .slice(0, 5)
          .map((each) => (
            <div
              style={{
                cursor: "pointer",
                background: "white",
                width: "200px",
                marginLeft: "1%",
              }}
              key={each._id}
              onClick={(e) => setdata(each.product_name)}
            >
              {each.product_name}
            </div>
          ))}
    </div>
  );
};

export default Nav;
