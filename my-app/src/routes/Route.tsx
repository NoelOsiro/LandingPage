import { createBrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../pages/App";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <div>Error page goes here</div>,
        children: [
            {
              path: "home",
              element: <App/>,
            },
            {
              path: "contact",
              element: <Contact/>,
            },
            {
              path: "features",
              element: <App/>,
            },
            {
              path: "blog",
              element: <App/>,
            },
          ],
    },
  ]);