import React, { useState } from "react";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Xử lý sau khi đăng kí thành công
        navigate("/todo");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("Địa chỉ email đã được sử dụng bởi một tài khoản khác.");
            break;
          case "auth/invalid-email":
            setError("Địa chỉ email không đúng định dạng.");
            break;
          case "auth/weak-password":
            setError("Mật khẩu phải có ít nhất 6 ký tự.");
            break;
          default:
            setError("Đã xảy ra lỗi khi đăng kí. Vui lòng thử lại sau.");
            break;
        }
      });
  };

  return (
    <div>
      {/* <h1>Đăng Kí</h1>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
      <input type="password" value={password} placeholder='Mật khẩu' onChange={(e) => setPassword(e.target.value)} /> <br/>
      <div style={{color:'red'}}>{error}</div>
      <button onClick={handleRegister}>Đăng kí</button> */}

      <div className="login-box">
        <form>
          <div className="user-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Mật Khẩu</label>
          </div>
          <div style={{ color: "red" }}>{error}</div>
          <a onClick={handleRegister}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Đăng kí
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
