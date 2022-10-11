import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Statistics from "../component/Statistics/Statistics";
import Topics from "../component/Topics/Topics";
import Main from "./Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Topics></Topics>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
