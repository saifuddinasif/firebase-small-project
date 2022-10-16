
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header.js/Header';
import Routes from './Components/Routes/Routes';
import Orders from './Components/Orders/Orders';



function App() {


const router = createBrowserRouter([

  {
    path:'/',
    element: <Main></Main>,
    children: [
  
       {
        path:'/',
        element: <Home></Home>,
       },

         
       {
        path:'/login',
        element: <Login></Login>,
       },

       {
        path:'/orders',
        element: <Routes><Orders></Orders></Routes>,
       },


       {
        path:'/register',
        element: <Register></Register>,
       },

       {
        path:'/header',
        element: <Header></Header>,
       },


    ]

  }
])


  return (
    <div className="App">
   
   
    <RouterProvider router={router}>


      
    </RouterProvider>

          
    </div>
  );
}

export default App;
