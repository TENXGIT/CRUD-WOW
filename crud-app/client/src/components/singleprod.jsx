import "./singleproduct.css";
import im from "../data/Assets/back2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Singleproduct = ({ data, setdata }) => {
  const handeldelete = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((respones) => {
        setdata((prevUser) => prevUser.filter((each) => data._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="main">
      {data.map((each) => {
        return (
          <div className="single-main" key={each._id}>
            <div className="single-center">
              <img src={im} alt="no-img" />
              <p>{each.product_name}</p>
              <div className="single-prices">
                <p className="old">
                  Marketprice:
                  <sup>&#8377;</sup>
                  {each.new_price}
                </p>
                <p className="new">
                  OurPrice: <sup>&#8377;</sup>
                  {each.old_price}
                </p>
              </div>
              <div className="buttons">
                <Link to={`/Edit/` + each._id}>
                  <button className="bottom">Edit</button>
                </Link>

                <button className="bottom">add to cart</button>

                <button
                  className="bottom"
                  onClick={() => handeldelete(each._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Singleproduct;
