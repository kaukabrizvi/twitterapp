import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import Profile from "./routes/profiles"


const rootElement = document.getElementById("root");
render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="profiles" element={<Profile />} />
</Routes>
</BrowserRouter>,
rootElement
);