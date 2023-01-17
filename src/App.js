import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home, Login, Register} from "./pages"
import './App.scss'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Home/>
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/register",
      element : <Register />
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
