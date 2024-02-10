import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portofolio from './Component/Portofolio/Portofolio';
import Contact from './Component/Contact/Contact';

let router=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:'/Home',element:<Home/>},
    {path:'/About',element:<About/>},
    {path:'/Portofolio',element:<Portofolio/>},
    {path:'/Contact',element:<Contact/>}
  ]}
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
