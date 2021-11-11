import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Login.css";


const Login = () => {
  const [userData, setUserData] = useState({ userName: "", password: "" });
  const [errMsg, setErrMsg] = useState({
    userNameErrMsg: "",
    passwordErrMsg: "",
    inValidErrMsg: "",
    userNameErrField: false,
    passwordErrField: false,
  });
  const [user, setUser] = useState({
    userName:"username",
    password:"password"
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    console.log(user)
    if(user == null)
    {
      return false
    }
    else{
      setUser(user);
    }
    
  }, []);

  const changeHandler = (event) => {
    const newAttr = event.target.name;
    const newValue = event.target.value;
    setUserData({
      ...userData,
      [newAttr]: newValue,
    });

    switch (newAttr) {
      case "userName":
        setErrMsg({
          ...errMsg,
          userNameErrMsg: "",
          userNameErrField:false
        });
        break;
      case "password":
        setErrMsg({
          ...errMsg,
          passwordErrMsg: "",
          passwordErrField:false
        });
        break;
      default:
        break;
    }
  };

  const history = useHistory();
  const login = () => {
    if (
      userData.userName === user.userName &&
      userData.password === user.password
    ) {
      history.push("./react-crud/Home");
    } else if (userData.userName === "" && userData.password === "") {
      setErrMsg({
        ...errMsg,

        userNameErrMsg: "Please fill username*",
        passwordErrMsg: "Please fill password*",
        userNameErrField: true,
        passwordErrField: true,
      });
    } else if (userData.userName === "" && userData.password !== "") {
      setErrMsg({
        ...errMsg,
        userNameErrField: true,
        passwordErrField:false,
        userNameErrMsg: "Please fill username*",
        passwordErrMsg: "",
      });
    } else if (userData.userName !== "" && userData.password === "") {
      setErrMsg({
        ...errMsg,
        passwordErrField: true,
        userNameErrField:false,
        passwordErrMsg: "Please fill password*",
        userNameErrMsg: "",
      });
    } else if (
      userData.userName !== user.userName ||
      userData.password !== user.password
    ) {
      setErrMsg({
        ...errMsg,
        inValidErrMsg: "Invalid Details",
      });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="loginContainer">
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 0,
              width: "100%",
              marginBottom: 1,
              marginTop: 1,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <PersonOutlineIcon />
          <p style={{color:"red"}}>{errMsg.inValidErrMsg}</p>
          <TextField
          error={errMsg.userNameErrField}
            id="outlined-basic"
            label="Username *"
            variant="outlined"
            name="userName"
            value={userData.userName}
            onChange={changeHandler}
            helperText={errMsg.userNameErrMsg}
          />
          <TextField
          error={errMsg.passwordErrField}
            id="outlined-basic"
            label="Password *"
            variant="outlined"
            name="password"
            value={userData.password}
            onChange={changeHandler}
            helperText={errMsg.passwordErrMsg}
          />
          <Button onClick={login} variant="outlined">
            Login
            <LoginIcon />
          </Button>
        </Box>
        <div className="linkDiv">
          <Link to="/Register" className="link">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
