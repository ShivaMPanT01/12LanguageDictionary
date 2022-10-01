import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DictionayContextProvider from "./store/dictionary-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DictionayContextProvider>
            <App />
        </DictionayContextProvider>
    </React.StrictMode>
);
