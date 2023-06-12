import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Recap from "./pages/Recap.tsx/Recap";

const router = createBrowserRouter([
  {
    path: "/:matchId",
    element: <Recap />
  },
  {
    path: "/",
    element: <App />
  }
]);

const Router = () =>{
  return <RouterProvider router={router} />
}

export default Router;