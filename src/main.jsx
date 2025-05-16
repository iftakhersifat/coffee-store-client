import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import View from './Components/View.jsx';
import Signup from './Components/Firebase/Signup.jsx';
import Signin from './Components/Firebase/Signin.jsx';
import AuthProvider from './Components/Context/AuthProvider.jsx';
import UserList from './Components/UserList/UserList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index:true, Component:Home},
      {
        path: "add-coffee", Component: AddCoffee
      },
      {
        path: "update/:id", 
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: "coffees/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: View,
      },
      // signup
      {
        path: "signup", Component: Signup
      },
      {
        path: "signin", Component: Signin
      },
      {
        path: "users", Component: UserList
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
