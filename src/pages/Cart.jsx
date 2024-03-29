import { Box, Card, CardMedia, Container, Grid, Typography, CardContent, IconButton, Paper, Stack, Button, Divider } from '@mui/material'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext, useState } from 'react';
import CartItem from './CartItem';

import ProductContext from '../components/context/product/productcontext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const {cartItems} = useContext(ProductContext)
  const navigate = useNavigate()
  
  return (
    <Container sx={{pt:14, pb:2, height:'100vh'}}>
      {cartItems?.length < 1 ? (
        <>
        <Typography gutterBottom variant='h3' sx={{textAlign:'center'}}>Sorry no Item in the cart!</Typography>
        <Box sx={{textAlign:'center'}}>
          <Button onClick={()=>navigate('/menu')} fullWidth variant='contained' sx={{color:'inherit', bgcolor:'brown', ":hover":{bgcolor:'#922724'}}}>Shop Now</Button>
        </Box>
        </>
      ) : (
        <>
        
        <Typography gutterBottom variant='h3'>Your Shopping Cart</Typography>
      <Grid container spacing={2}>
        {cartItems?.map((item,index)=>(
         <>
         <Grid item xs={12} md={4}>
            <CartItem item={item}/>
         </Grid>
         </>
        ))}
      </Grid>
      
      <Box sx={{display:'flex', mt:'7%', width:'100%', alignItems:'center', justifyContent:'space-between'}}>
        <Typography variant='h5'>Subtotal: &#8377; 24545</Typography>
        <Box>
          {matches ? (
            <>
            <Button sx={{ml:9, mb:2, minWidth:'150px', color:'inherit', bgcolor:'brown', ":hover":{bgcolor:'brown'}}} size='large'  type='button' variant='contained'>Empty</Button>
            
            </>
          ):(
            <>
            <Button sx={{ml:9, minWidth:'150px', color:'inherit', bgcolor:'brown', ":hover":{bgcolor:'brown'}}} size='large'  type='button' variant='contained'>Empty</Button>
            </>
          )}
          {/* <Button sx={{ml:9, minWidth:'150px', color:'inherit', bgcolor:'brown', ":hover":{bgcolor:'brown'}}} size='large'  type='button' variant='contained'>Empty</Button> */}
          <Button sx={{ml:9, minWidth:'150px'}} size='large'  type='button' variant='contained'>Checkout</Button>
        </Box>
      </Box>
        
        </>
      )} 
    </Container>
  )
}

export default Cart
