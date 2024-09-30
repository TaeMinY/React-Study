import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import UserPost from "./pages/UserPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "info/:id",
        element: <Info />,
        children: [
          {
            path: "post",
            element: <UserPost />,
          },
        ],
        action: async ({ request, params }) => {
          console.log("API요청");
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 3000);
          });

          return {};
        },
        loader: async ({ request, params }) => {
          console.log("API요청");
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 3000);
          });

          return {
            username: "홍길동",
            posts: [
              { title: "게시글 제목", text: "게시글 내용" },
              { title: "게시글2 제목", text: "게시글2 내용" },
              { title: "게시글3 제목", text: "게시글3 내용" },
            ],
          };
        },
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
