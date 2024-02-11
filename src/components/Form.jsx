import React, { useEffect, useState } from "react";
import { DatePicker, Space, Input, message } from "antd";
import styles from "./Form.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import userSchema from "../../../backend/validations/user";

function Form() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    dateOfBirth: undefined,
  });

  const handleChange = (value, input) => {
    setformData((prevVal) => {
      return {
        ...prevVal,
        [input]: value,
      };
    });
  };

 

  const handleSubmit = () => {
   

    axios
      .post("https://user-record.onrender.com/signup", formData)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          message.success(response?.data?.msg);
          navigate("/");
        }
      })
      .catch((error) => {
        //   messageconsole
        message.error(error?.response?.data?.errors);
        console.log(error);
      });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f5f5f7" }}
    >
      <div className={styles.formDiv}>
        <div>
          <Input
            onChange={(e) => handleChange(e.target.value, "name")}
            size="large"
            placeholder="Name"
          />
        </div>
        <div className="w-100">
          <DatePicker
            size="large"
            onChange={(date) => handleChange(date, "dateOfBirth")}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <Input
            type="email"
            onChange={(e) => handleChange(e.target.value, "email")}
            size="large"
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            onChange={(e) => handleChange(e.target.value, "phone")}
            size="large"
            placeholder="Phone"
          />
        </div>
        <motion.div
          onClick={handleSubmit}
          whileTap={{ scale: 0.95 }}
          className="btn btn-success"
        >
          Submit
        </motion.div>
      </div>
      <div
        className={
          styles.bottomDiv + " " + "w-100 d-flex justify-content-center "
        }
      >
        <motion.button
          onClick={() => navigate("/")}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary"
        >
          Home
        </motion.button>
      </div>
    </div>
  );
}

export default Form;
