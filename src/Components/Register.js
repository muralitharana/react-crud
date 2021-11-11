import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import { useHistory } from "react-router";
import "./Register.css";
import { useState } from "react";
const Register = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState({
    fullNameErrMsg: "",
    userNameErrMsg: "",
    emailErrMsg: "",
    passwordErrMsg: "",
    errForFullNameField: false,
    errForUserNameField: false,
    errForEmailField: false,
    errForPasswordField: false,
  });

  const [buttonDisable,setButtonDisable] = useState({disable:true})

  const changeHandler = (event) => {
    const newAttr = event.target.name;
    const newValue = event.target.value;
    setUserData({
      ...userData,
      [newAttr]: newValue,
    });
      
    switch (newAttr) {
      case "fullName":
        //1st name, middle name with or without, last name
        const regexPatternFullName = /^[a-zA-Z]+ [a-zA-Z]+([\s]+[a-zA-Z]+)?$/;
        const resultregexPatternFullName = regexPatternFullName.test(newValue);
        if (resultregexPatternFullName === true) {
          setErrMsg({
            ...errMsg,
            fullNameErrMsg: true,
            errForFullNameField: false,
          });
        } else {
          setErrMsg({
            ...errMsg,
            fullNameErrMsg: "Please enter full name",
            errForFullNameField: true,
          });
        }
        break;
      case "userName":
        const regexPatternUserName = /^([a-zA-Z]{3,})+([0-9]{1,})?$/;
        const resultregexPatternUserName = regexPatternUserName.test(newValue);
        if (resultregexPatternUserName === true) {
          setErrMsg({
            ...errMsg,
            userNameErrMsg: true,
            errForUserNameField: false,
          });
        } else {
          setErrMsg({
            ...errMsg,
            userNameErrMsg: "Please enter valid username",
            errForUserNameField: true,
          });
        }
        break;
      case "email":
        const regexPatternEmail =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        const resultregexPatternEmail = regexPatternEmail.test(newValue);
        if (resultregexPatternEmail === true) {
          setErrMsg({
            ...errMsg,
            emailErrMsg: true,
            errForEmailField: false,
          });
        } else {
          setErrMsg({
            ...errMsg,
            emailErrMsg: "Please enter valid email",
            errForEmailField: true,
          });
        }
        break;
      case "password":
        const regexPatternPassword =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        const resultregexPatternPassword = regexPatternPassword.test(newValue);
        if (resultregexPatternPassword === true) {
          setErrMsg({
            ...errMsg,
            passwordErrMsg: true,
            errForPasswordField: false,
          });
        } else {
          setErrMsg({
            ...errMsg,
            passwordErrMsg:
              "Password must contain 8 character with 1 lowercase,1 uppercase, 1 special, 1 numeric",
            errForPasswordField: true,
          });
        }
        break;
      default:
        break;
    }
    if (
      userData.fullName !== "" &&
      userData.userName !== "" &&
      userData.email !== "" &&
      userData.password.length > 6
    ) {
      setButtonDisable({disable:false})
    }
    else{
      setButtonDisable({disable:true})
    }
  };
  const history = useHistory();
  const Register = () => {

    if (
      errMsg.fullNameErrMsg === true &&
      errMsg.userNameErrMsg === true &&
      errMsg.emailErrMsg === true &&
      errMsg.passwordErrMsg === true
    ) {
      console.log(userData);
      const user = JSON.stringify(userData);
      localStorage.setItem("userData", user);
      history.push("./react-crud/");
    }
  };
  return (
    <div>
      <h2>Register Now</h2>
      <div className="registerContainer">
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 0,
              width: "100%",
              marginTop: 1,
              marginBottom: 1,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={errMsg.errForFullNameField}
            id="outlined-basic"
            label="FullName *"
            variant="outlined"
            name="fullName"
            value={userData.fullName}
            onChange={changeHandler}
            helperText={errMsg.fullNameErrMsg}
          />
          <TextField
            error={errMsg.errForUserNameField}
            id="outlined-basic"
            label="UserName *"
            variant="outlined"
            name="userName"
            value={userData.userName}
            onChange={changeHandler}
            helperText={errMsg.userNameErrMsg}
          />
          <TextField
            error={errMsg.errForEmailField}
            id="outlined-basic"
            label="Email *"
            variant="outlined"
            name="email"
            value={userData.email}
            onChange={changeHandler}
            helperText={errMsg.emailErrMsg}
          />
          <TextField
            error={errMsg.errForPasswordField}
            id="outlined-basic"
            label="Password *" 
            variant="outlined"
            name="password"
            value={userData.password}
            onChange={changeHandler}
            helperText={errMsg.passwordErrMsg}
          />
          <Button onClick={Register} variant="outlined" disabled={buttonDisable.disable}>
            Register<AppRegistrationOutlinedIcon/>
          </Button>

        </Box>
      </div>
      <div style={{marginTop:"40px"}}>
        <Button onClick={()=>history.push("./react-crud/")}><ArrowBackOutlinedIcon/>Back To Login</Button>
      </div>
    </div>
  );
};

export default Register;
