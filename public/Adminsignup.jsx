import React from "react";

const Adminsignup = () => {
  return (
    <div>
      <div className="login-box">
        <form action="">
            <label htmlFor="name">Name : </label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="pass">Password : </label>
          <input type="password" id="pass" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Adminsignup;
