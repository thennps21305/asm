import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "../firebase";
import AuthWrapper from "../auth/AuthWrapper";

const EditTodo = () => {
  const [todo, setTodo] = useState();
  const [describe, setDescribe] = useState("");
  const [price, setPrice] = useState("");
  const db = firebase.firestore();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    db.collection("todos")
      .doc(id)
      .get()
      .then((response) => {
        setTodo(response.data().text);
        setDescribe(response.data().describe);
        setPrice(response.data().price);
      });
  }, []);
  const handleUpdate = () => {
    db.collection("todos")
      .doc(id)
      .update({
        text: todo,
        describe: describe,
        price: price,
      })
      .then(() => navigate("/todo"));
  };
  return (
    // <AuthWrapper>
    //   <div>
    //     <h1>Sửa ToDo</h1>
    //     <input
    //       type="text"
    //       onChange={(e) => setTodo(e.target.value)}
    //       value={todo}
    //     />
    //     <input
    //       type="text"
    //       value={describe}
    //       onChange={(e) => setDescribe(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       value={price}
    //       onChange={(e) => setPrice(e.target.value)}
    //     />
    //     <button onClick={handleUpdate}>Update</button>
    //   </div>
    // </AuthWrapper>

    <AuthWrapper>
      <div className="login-box">
        <form>
          <h1 style={{ color: "red" }}>Cập Nhật Danh Sách</h1>
          <div className="user-box">
            <input
              type="text"
              placeholder="Tên"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
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
          <a onClick={handleUpdate}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cập Nhật
          </a>
          {/* <button onClick={handleAdd}>Thêm </button> */}
        </form>
      </div>
    </AuthWrapper>
  );
};

export default EditTodo;
