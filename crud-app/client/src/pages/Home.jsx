import React, { useEffect, useState } from "react";
import axios from "axios";
import Singleproduct from "../components/singleprod";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const responce = await axios.get("http://localhost:8000/api/getall");
      setdata(responce.data);
    };
    fetchdata();
  }, [data]);

  return (
    <div>
      <div>
        <Link to={"/Addnewdata"}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              boxShadow: "1px 1px 5px 1px black",
              width: "25%",
              height: "30px",
              textDecoration: "none",
              marginLeft: "70%",
              marginTop: "1%",
            }}
          >
            Add new product
          </button>
        </Link>
      </div>

      <div className="singleprod">
        <div>
          <Singleproduct data={data} setdata={setdata} />
        </div>
      </div>
    </div>
  );
};

export default Home;
