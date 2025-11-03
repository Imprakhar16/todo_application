import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../features/auth/authThunk";

export default function LoginUser() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk(form));
  };
  if (success) {
    alert("logged in successfully");
  }
  if (error) {
    alert("Error occured");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN:</h2>
        <label>email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <label>password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <button type="submit">{loading ? "loading.." : "Submit"}</button>
      </form>
    </div>
  );
}
