import React, { useState } from "react";

const User = {
  email: "sewey@gmail.com",
  pw: "sewey1234#"
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const sumbitButton = () => {
    if (email === User.email && password === User.pw) {
      alert("Login");
    } else {
      alert("Wrong!");
    }
  };

  return (
    <div className="page">
      <h2 className="title">Enter Email and Password</h2>
      <div className="content">
        <h2 className="inputTitle">Email</h2>
        <div>
          <input
            className="input"
            type="text"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="error">
          {!emailValid && email.length > 0 && <div>Wrong Email</div>}
        </div>
        <h2 className="inputTitle">Password</h2>
        <div>
          <input
            className="input"
            type="text"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="error">
          {!pwValid && password.length > 0 && <div>Wrong Password</div>}
        </div>
        <button onClick={sumbitButton}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
