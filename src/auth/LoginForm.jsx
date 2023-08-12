import React, { useState } from "react";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Xử lý sau khi đăng nhập thành công
        navigate("/todo");
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        alert("Đăng nhập thất bại");
      });
  };
  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Đăng nhập thành công
        navigate("/");
        // const user = result.user;
        // console.log(user);
      })
      .catch((error) => {
        // Xảy ra lỗi khi đăng nhập
        alert(error);
      });
  };

  // const handleFacebookLogin=async()=>{
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   try {
  //     await firebase.auth().signInWithPopup(provider);
  //     navigate('/todo')
  //     console.log('Đăng nhập bằng Facebook thành công!');
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  return (
    <div>

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
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Mật Khẩu</label>
          </div>
          <a onClick={handleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Đăng nhập
          </a>
          <a onClick={handleGoogleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Đăng Nhập GG
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
