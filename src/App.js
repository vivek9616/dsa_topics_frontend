import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import TopicList from "./components/TopicList";
import Login from "./components/Login/Login";
import Profile from "./components/Login/Profile";
import { TopicProvider } from "./context/TopicContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <TopicProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={<Login onLogin={(user) => handleLogin(user)} />}
            />
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <div className="App-header">
                    <Profile username={username} />
                    <h2>DSA Topics</h2>
                    <TopicList />
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </TopicProvider>
  );
}

export default App;