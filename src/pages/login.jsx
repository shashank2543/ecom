import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { loginUser } from "../actions/authAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({ loginUser, isLoggedin }) => {
  const history = useHistory();

  useEffect(() => {
    if (isLoggedin) {
      history.goBack();
    }
  }, [isLoggedin]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          Email
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          Password
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedin: state.auth.isLoggedin,
});

export default connect(mapStateToProps, { loginUser })(Login);
