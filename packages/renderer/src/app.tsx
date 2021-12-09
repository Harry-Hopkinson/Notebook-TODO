import React, { useState } from "react";
import Editor from "./editor";
import "./app.css";

const App: React.FC = () => {
    return (
        <div className="app">
            <Editor />
        </div>
    )
}

export default App;