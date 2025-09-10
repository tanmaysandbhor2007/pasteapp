import React from 'react';
import { RouterProvider, Routes } from "react-router-dom"
import { createBrowserRouter } from "react-router"
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Paste } from './components/Paste';
import Viewpastes from './components/Viewpaste';
import toast, { Toaster } from 'react-hot-toast';


const router= createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
      <Navbar/>
      <Home/>

      </div>
    },
    {
      path:"/pastes",
      element:<div>
         <Navbar/>
         <Paste/>

      </div>
    },
    {
      path:"/pastes/:id",
      element:<div>
         <Navbar/>
         <Viewpastes/>

      </div>
    }

  ]
)

function App() {
  return (
    <div >
      <RouterProvider router={router}/>
       <Toaster />
    </div>
  );
}

export default App;