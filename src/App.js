
import Home from './pages/Home'
import Menu from './pages/Menu'
import Signin from "./pages/Signin";
import Signup from './pages/Signup'
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';
import ResponsiveHeader from './components/ResponsiveHeader';
import Profile from './pages/Profile';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Paper } from '@mui/material';
import './index.css'
import FilteredMenu from './pages/FilteredMenu';
import 'react-toastify/dist/ReactToastify.css';
import AlertToast from './components/AlertToast';
import Checkout from './pages/Checkout';
import OrderReview from './pages/OrderReview';
import ForgotPassword from './pages/ForgotPassword';
import Test from './pages/Test';




const darkTheme = createTheme({
  palette: {
    mode:'dark',
  },
  
})



function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      
      <CssBaseline/>
      <Paper>
    <BrowserRouter>
    {/* <Header/> */}
    <ResponsiveHeader/>
      <Routes>
      
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cat/:id' element={<FilteredMenu/>}/>

        <Route path='/test' element={<Test/>}/>

        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forgot_password' element={<ForgotPassword/>}/>


        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element ={<Checkout/>}/>
        <Route path='/order_review' element={<OrderReview/>}/>
        
      </Routes>
     </BrowserRouter>
     <AlertToast/>
     </Paper>
     
     </ThemeProvider>
    </>
   
  );
}

export default App;
