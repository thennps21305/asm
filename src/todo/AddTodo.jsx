import React, { useState } from "react";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../auth/AuthWrapper";
const AddTodo = () => {
  const [todo, setTodo] = useState();
  const [describe, setDescribe] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const db = firebase.firestore();
  const handleAdd = () => {
    const newTodo = {
      text: todo,
      describe: describe,
      price: price,
      completed: false,
      createAt: new Date().getTime(),
    };
    db.collection("todos")
      .add(newTodo)
      .then(() => navigate("/todo"));
  };
  return (
    <AuthWrapper>
      <div className="login-box">
        <form>
          <h1 style={{ color: "red" }}>Thêm Danh Sách</h1>
          <div className="user-box">
            <input
              type="text"
              placeholder="Tên"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              placeholder="Mô Tả"
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              placeholder="Giá"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <a onClick={handleAdd}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Thêm
          </a>
          {/* <button onClick={handleAdd}>Thêm </button> */}
        </form>
      </div>
    </AuthWrapper>
  );
};

export default AddTodo;
