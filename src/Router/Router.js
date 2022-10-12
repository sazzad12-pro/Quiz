import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Quiz from "../component/Quiz/Quiz";
import Statistics from "../component/Statistics/Statistics";
import Topics from "../component/Topics/Topics";
import Main from "./Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        loader: async () => {
          return fetch(" https://openapi.programming-hero.com/api/quiz");
        },
        path: "/",
        element: <Topics></Topics>,
      },
      {
        loader: async () => {
          return fetch(" https://openapi.programming-hero.com/api/quiz");
        },
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/topics/:userId",
        loader: async ({ params }) => {
          return fetch(
            ` https://openapi.programming-hero.com/api/quiz/${params.userId}`
          );
        },
        element: <Quiz></Quiz>,
      },
    ],
  },
]);
