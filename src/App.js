import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import RequiresAuth from "../src/components/RequiresAuth";
import Home from "../src/pages/Features/Home";
import Bookmark from "./pages/Features/Bookmark";
import Explorer from "./pages/Features/Explorer";
import Profile from "./pages/Profile/Profile";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
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
