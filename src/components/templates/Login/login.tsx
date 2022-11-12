import React, { useRef, useState } from "react";
import "./login.scss";

import { useNavigate } from "react-router-dom";
import Title from "../../atoms/Title/title";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

import { useAppDispatch } from "../../../redux/hooks";
import { setUserLogged } from "../../../redux/slices/user";

const LoginTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = {
      name: email,
      email: password,
    };
    dispatch(setUserLogged(user));
    navigate("/home");
  }

  return (
    <div className="fym_template_login">
      <div className="fym_template_login--formulary">
        <form className="_p-5" onSubmit={handleSubmit}>
          <Title className="_mb-3 _p-2" tag="h1">
            Faça o login
          </Title>
          <Input
            className="_p-2"
            type="email"
            id="email"
            name="name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            E-mail
          </Input>
          <Input
            className="_mt-3 _p-2"
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          >
            Password
          </Input>
          <Button type="submit" className="_mt-3 _p-2">
            Logar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginTemplate;
