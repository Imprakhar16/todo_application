import { createRoot } from "react-dom/client";
import { store } from "./store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Toaster position="top-right" />
      <App />
    </Provider>
  </>
);
