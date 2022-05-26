import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Share/Login/Login';
import SignUp from './Pages/Share/SignUp/SignUp';
import Order from './Pages/Home/Order/Order';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Share/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import ManageProduct from './Pages/Dashboard/AdminAccess/ManageProduct';
import ManageAllOrders from './Pages/Dashboard/AdminAccess/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AdminAccess/AddProduct';
import MakeAdmin from './Pages/Dashboard/AdminAccess/MakeAdmin';
import NotFound from './Pages/NotFound/NotFound';
import RequireAdmin from './Pages/Dashboard/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order/:orderId' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='manageProducts' element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }></Route>
            <Route path='manageOrders' element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
              }>
            </Route>
            <Route path='addProduct' element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }></Route>
            <Route path='makeAdmin' element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>}>
            </Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
