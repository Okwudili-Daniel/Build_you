import HomeScreen from "../Pages/HomeScreen";
import Layout from "../componets/Layout";
import { createBrowserRouter } from "react-router-dom";



export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <HomeScreen />,
          },
        ],
      },
]);