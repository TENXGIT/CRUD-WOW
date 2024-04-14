import React from "react";
import "../components/SingleCart.css";
const SingleCart = () => {
  return (
    <div>
      <>
        <div>
          <div>
            <div className="SingleCart-main">
              {/* <img src={image} alt="" /> */}
              <span className="product-name-main">
                <span className="product-name">product name:</span>
                <p>bharath</p>
              </span>

              <span className="price">
                Price:<span>80 &#8377;</span>
              </span>
              <div className="qty">
                {/* QTY: */}
                {/* <select
                // onChange={(e) => {
                //   dispatch({
                //     type: "ADD",
                //     payload: {
                //       id: id,
                //       qty: e.target.value,
                //     },
                //   });
                // }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select> */}
              </div>
              <button
                //   onClick={() => {
                //     dispatch({
                //       type: "REMOVE_FROM_CART",
                //       payload: { props: props },
                //     });
                //   }}
                className="remove"
              >
                remove
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SingleCart;
