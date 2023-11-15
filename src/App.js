import NotFound from "./pages/NotFound/NotFound";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"




function App() {
  return (
    <>
    
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </>
  );
}

export default App;
