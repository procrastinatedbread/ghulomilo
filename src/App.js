import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

import Home from "./pages/features/Home";
import Bookmark from "./pages/features/Bookmark";
import Explorer from "./pages/features/Explorer";
import Profile from "./pages/Profile/Profile";
import Mockman from "mockman-js";

import RequiresAuth from "./components/RequiresAuth";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/explore" element={<Explorer />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
