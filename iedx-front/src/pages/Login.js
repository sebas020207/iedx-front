import React, { useState } from "react";
import "../css/login.css";
import LogoIedx from "../imagenes/edx logo.png";
import useAxios from "../hooks/useAxios";
import { useHistory } from "react-router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { post } = useAxios();

  const onChange = (event) => {
    const name = event.target.name;
    if (name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      console.log({ email, password });
      try {
        const response = await post("admin/login", { email, password });
        console.log({ response })
        if (response.data && response.data.access) {
          const token = response.data.access;
          localStorage.setItem("token", token);
          history.replace("/admin/home");
          window.location.reload();
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <div className="main-container login">
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={LogoIedx} alt="logo" className="logo" />
        </div>

        <div className="container">
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            value={email}
            onChange={onChange}
            placeholder="Ingresa Email"
            name="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={password}
            placeholder="Ingresa Password"
            required
          />

          <button type="submit">Iniciar sesión</button>
        </div>
        <div className="container">
          <a href="#" style={{ color: "#ffffff" }}>
            Se te olvidó tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
