import React from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  function handleFacebookLogin() {
    navigate("/checkout");
  }

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <p>This is the sign-in page. Implement sign-in functionality here.</p>

      <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
    </div>
  );
}

export default Signin;
