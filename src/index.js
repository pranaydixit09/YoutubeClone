import React from "react";
import App from "./app.js";
import "./style.css";


// ReactDOM.render(<App />,document.getElementById("root"));

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

