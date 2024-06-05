import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AllVideo from './components/Pages/AllVideo.jsx'
import LoginForm from './components/LoginForm.jsx'
import Protected from './components/AuthLayout.jsx'
import SignUpForm from './components/SignUpForm';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element:  <AllVideo />,
        exact: true,
        index: true,

        
      },
      {   
        path : "/login",
         element : (<Protected authentication={false}>
          <LoginForm />
        </Protected>)
       },
       {
        path:"/signup",
        element : (
          <Protected authentication={false}>
            <SignUpForm/>
          </Protected>
        )
       }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>

  <Provider store={store}>

    <RouterProvider router={router} />
    <ToastContainer/>
    </Provider>
  </QueryClientProvider>
  
  
)
