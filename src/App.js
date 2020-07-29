import React from "react";
import "./App.css";

import { initNotification } from "./services/firebaseService";

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={initNotification}>Configure Notifications</button>
    </div>
  );
}
