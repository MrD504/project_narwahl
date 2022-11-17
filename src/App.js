import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./lib/Layout";

function App() {
  return (
    <div className="App dark">
      <Layout>
        <Routes>
          <Route path="/account" exact element={<div>account</div>} />
          <Route path="*" element={<Navigate to="/account" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
