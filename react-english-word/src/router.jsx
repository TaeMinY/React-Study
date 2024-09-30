import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SIgnUp.jsx";
import TodayWord from "./pages/TodayWord.jsx";
import Voca from "./pages/Voca.jsx";
import More from "./pages/More.jsx";
import MenuLayout from "./layouts/MenuLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "",
        element: <MenuLayout></MenuLayout>,
        children: [
          {
            path: "",
            element: <TodayWord />,
          },
          {
            path: "voca",
            element: <Voca />,
          },
          {
            path: "more",
            element: <More />,
          },
        ],
      },
    ],
  },
]);

export default router;
