import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Button  } from "@chakra-ui/react";
import Register from "./Register";
import axios from "axios";

const Login = ({
  
  name,
  pass,
  setName,
  setPass,
  setRName,
  setRPass,
  setEmail,
  setAdmin,
  rname,
  rpass,
  email,
  nahid,
  
}) => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [newuser, setNewUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  console.log(newuser);
  return (
    <>
      <div className="containerr">
        {toggle ? (
          <Register
            setRName={setRName}
            setRPass={setRPass}
            setEmail={setEmail}
            setAdmin={setAdmin}
            setUsers={setUsers}
            rname={rname}
            rpass={rpass}
            email={email}
            nahid={nahid}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="login-inp"
              placeholder="Enter username"
              required="required"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              className="login-inp"
              placeholder="Enter password"
              required="required"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {console.log(newuser)}
            <br />
            <Button
              className="login-btn"
              onClick={() => {
                let newUser = users.find((item) => {
                  return (item.username == name) & (item.password == pass);
                });
                console.log(newUser);
                setNewUser(newUser);
                {
                  newUser ? navigate("/blogs") : console.log("salam");
                }
              }}
            >
              Log in
            </Button>
            <p>
              Need an acount?
              <span
                className="register"
                onClick={() => {
                  setToggle(true);
                }}
              >
                Sign in
              </span>
            </p>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;