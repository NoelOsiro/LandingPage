import { createBrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../App";

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
          ],
    },
  ]);