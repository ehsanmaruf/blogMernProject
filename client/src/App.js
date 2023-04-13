import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

import TopBar from "./components/TopBar/TopBar";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Home";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
