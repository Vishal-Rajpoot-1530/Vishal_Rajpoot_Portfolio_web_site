import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./components/Home.jsx";
 
import Contact from "./components/Contact.jsx";
import Educations from "./components/Educations.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
       
      { path: "/Contact", element: <Contact /> },
      { path: "/educations", element: <Educations /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
