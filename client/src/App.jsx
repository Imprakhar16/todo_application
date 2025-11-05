import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginUser from "./pages/auth/loginUser";
import RegisterUser from "./pages/auth/registerUser";
import VerifyEmail from "./pages/auth/verifyEmail";
import CreateTodo from "./pages/todos/createTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterUser />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/create-todo" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
