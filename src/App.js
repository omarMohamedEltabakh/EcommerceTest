import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './component/Layout/Layout';
import Home from "./component/Home/Home";
import Sale from './component/Sale/Sale';
import AllProducts from './component/AllProducts/AllProducts';
import ProductDetails from './component/ProductDetails/ProductDetails';
import SignIn from "./component/SignIn/SignIn";
import SignUp from './component/SignUp/SignUp';

const App = () => {


  const routers = createBrowserRouter([
    { path: '', element: <Layout />,children:[
      {index:"true",element:<Home/>},
      {path:"sale",element:<Sale/>},
      {path:"AllProducts",element:<AllProducts/>},
      {path:"productdetails/:id",element:<ProductDetails/>},
      {path:"signIn",element:<SignIn/>},
      {path:"signup",element:<SignUp/>},
    ] }
  ])




  return <>
    <RouterProvider router={routers} />
  </>


}

export default App;
