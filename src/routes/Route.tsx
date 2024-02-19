import { createBrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../pages/App";
import Contact from "../pages/Contact";
import Feature from "../pages/Features";

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
              element: <Feature/>,
            },
            {
              path: "blog",
              element: <App/>,
            },
          ],
    },
  ]);