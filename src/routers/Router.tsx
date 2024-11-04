import {createBrowserRouter} from "react-router-dom";
import App from "@/App.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ArticlePage from "@/pages/ArticlePage.tsx";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: "article/:path",
        element: <ArticlePage/>
      }
    ]
  }
])
