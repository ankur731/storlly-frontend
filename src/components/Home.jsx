import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import styles1 from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://user-record.onrender.com/")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="container-fluid p-4"
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="row">
        {data.map((item, index) => {
          return (
            <UserCard
              name={item.name}
              phone={item.phone}
              email={item.email}
              dateOfBirth={item.dateOfBirth}
            />
          );
        })}
      </div>
      <div
        className={
          styles1.bottomDiv + " " + "w-100 d-flex justify-content-center "
        }
      ></div>
    </div>
  );
}

const UserCard = ({ name, email, phone, dateOfBirth }) => {
  return (
    <div className="col-12 col-lg-4 col-xl-3 mt-3 mt-lg-4">
      <div className={styles.userCard}>
        <p className="mb-1">
          Name : <span>{name}</span>
        </p>
        <p className="mb-1">
          Phone : <span>{phone}</span>
        </p>
        <p className="mb-1">
          Email : <span>{email}</span>
        </p>
        <p className="mb-1">
          DOB : <span>{dateOfBirth}</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
