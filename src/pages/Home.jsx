import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";
import { getAllTodo } from "../reduxtool/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import AuthWrapper from "../auth/AuthWrapper";

function convertTimestampToDateTime(timestamp) {
  // Tạo một đối tượng Date từ timestamp (tính bằng mili giây)
  const dateObj = new Date(timestamp);

  // Lấy thông tin ngày, tháng, năm, giờ, phút, giây từ đối tượng Date
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");

  // Trả về ngày tháng năm giờ phút giây dưới dạng một chuỗi
  const formattedDateTime = `${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}

const Home = () => {
  const dispatch = useDispatch();
  const db = firebase.firestore();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoReducer);
  useEffect(() => {
    db.collection("todos")
      .orderBy("createAt", "desc")
      .get()
      .then((todolist) => {
        const arr = [];
        todolist.forEach((item) => arr.push({ ...item.data(), id: item.id }));
        dispatch(getAllTodo(arr));
      });
  });

  return (
    // <div>
    //   {todos.map((item) => (
    //     <div class="card text-center" key={item.id}>
    //       <div class="card-header">{item.text}</div>
    //       <div class="card-body">
    //         <h5 class="card-title">{item.describe}</h5>
    //         <p class="card-text">{item.price}</p>
    //         <a class="btn btn-primary">Xem</a>
    //       </div>
    //       <div class="card-footer text-muted">
    //         Cập nhật lúc {convertTimestampToDateTime(item.createAt)}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {todos.map((item) => (
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="card text-center" key={item.id}>
                  <div class="card-header">{item.text}</div>
                  <div class="card-body">
                    <h5 class="card-title">{item.describe}</h5>
                    <p class="card-text">{item.price}</p>
                    <a class="btn btn-primary">Mua</a>
                  </div>
                  <div class="card-footer text-muted">
                    Cập nhật lúc {convertTimestampToDateTime(item.createAt)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
