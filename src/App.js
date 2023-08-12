import "./App.css";
import "./App.Scss";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/layout/layout";
import Product from "./pages/Product";
import Todos from "./todo/Todos";
import AddTodo from "./todo/AddTodo";
import EditTodo from "./todo/EditTodo";
import LoginForm from "./auth/LoginForm";
import RegistrationForm from "./auth/RegistrationForm";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/edittodo/:id" element={<EditTodo />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
