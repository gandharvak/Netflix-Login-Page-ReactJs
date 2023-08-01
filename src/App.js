import React, { useEffect, useState } from "react";
import "./App.css";
import { BiShowAlt, BiHide } from "react-icons/bi";

function App() {
  const initialData = {
    email: "",
    password: ""
  };
  const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState(initialData);
  const [passVisible, setPassVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    setPassVisible((pre) => {
      setPassVisible(!pre);
    });
  };

  const visibility = () => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    visibility();
  }, [formData]);

  const handleSubmit = () => {
    //write your code here
  };

  return (
    <div className="form-div">
      <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix-logo"/>
      <h1>Login </h1>
      <div className="form-element">
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={formData.email}
          placeholder="Email"
        />
      </div>
      <div className="form-element">
        <input
          type={passVisible === true ? "text" : "password"}
          name="password"
          onChange={(e) => handleChange(e)}
          value={formData.password}
          placeholder="Password"
        />
        <div className="password-visibility">
          {passVisible === true ? (
            <BiHide className="visibility-btn" onClick={showPassword} />
          ) : (
            <BiShowAlt className="visibility-btn" onClick={showPassword} />
          )}
        </div>
      </div>
      <div className="form-element">
        <button onClick={handleSubmit} disabled={visible}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
