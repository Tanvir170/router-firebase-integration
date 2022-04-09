import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const LogIn = () => {
    const {signInWithGoogle}= useFirebase();
  return (
    <div>
      <h2>Please LogIn</h2>
      <div style={{margin: '20px'}}>
      <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LogIn;
