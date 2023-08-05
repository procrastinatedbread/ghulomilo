import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Signup />

      {/* <Routes>
        <Route path="/" />
        <Route path="/signup" />
        <Route path="/login" element={<Login />} />
        <Route path="/bookmark" />
        <Route path="/explore" />
        <Route path="/profile/:username" />
        <Route path="/mockman" />
      </Routes> */}
    </div>
  );
}

export default App;
