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
import ViewUser from './Components/UserList/ViewUser.jsx';
import UserUpdate from './Components/UserList/UserUpdate.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';

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

      // user list
      {
        path: "users/:id", 
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: ViewUser
      },
      {
        path: "profile/:id", 
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserUpdate
      },
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
