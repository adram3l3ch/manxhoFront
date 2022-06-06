import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import React, { useContext, useState } from 'react';
import ProductContext from './context/product/productcontext';
import { CardActionArea } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from './Menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from '../components/Loader'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Pagination } from "swiper";
import Logo from "../assets/Images/logo.png"


const theme = createTheme()


const Category = () => {
     const {categories,products} = useContext(ProductContext) 
     
    
     const matches = useMediaQuery(theme.breakpoints.down('sm'));
     const navigate = useNavigate()
     const cat = categories
     const [localProducts, setLocalProducts] = useState(products)

     const filterItem = (catid)=>{
          const updatedItems =  products.filter((elem)=>{
              return elem.category === catid     
          })
          setLocalProducts(updatedItems)  
       }
       
   
     
    return   (
         <>
         <Paper>
        <Box sx={{flexGrow:1, pt:12, borderBottom:1, borderBottomColor:'divider'}}>
            <Typography sx={{mb:3, fontFamily:'Roboto',  textAlign:'center'}} variant='h4' component='h5'>CATEGORIES</Typography>
     <Swiper slidesPerView={3}>
       <Grid container spacing={2}>
            <SwiperSlide>
            <Grid  item xs={4} md={4} lg={3}>
                <Card   sx={{maxWidth:345}}>
                     <CardActionArea onClick={()=>setLocalProducts(products)}>
                 <CardMedia 
                   component='img'
                    height='150'
                    image='https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg'
                    />
                    <CardContent> 
                         {matches ? (
                              <Typography variant='subtitle1' sx={{textAlign:'center', fontFamily:'Roboto'}}>All</Typography>
                         ) : (
                              <Typography variant='h5' component='h5' sx={{textAlign:'center', fontFamily:'Roboto'}}>All</Typography>
                         ) }
                       
                    </CardContent>
                    </CardActionArea>
               </Card> 
               </Grid> 
            </SwiperSlide>

        {cat?.map((category)=>(
             <>
             <SwiperSlide key={category._id} > 
                <Grid  item xs={4} md={4} lg={3}>
                <Card   sx={{maxWidth:345}}>
                     <CardActionArea onClick={()=>filterItem(category._id)}>
                 <CardMedia 
                   component='img'
                    height='150'
                    image={`https://api.manxho.co.in${category.image}`}
                    />
                    <CardContent> 
                         {matches ? (
                              <Typography variant='subtitle1' sx={{textAlign:'center', fontFamily:'Roboto'}}>{category.title}</Typography>
                         ) : (
                              <Typography variant='h5' component='h5' sx={{textAlign:'center', fontFamily:'Roboto'}}>{category.title}</Typography>
                         ) }
                       
                    </CardContent>
                    </CardActionArea>
               </Card> 
               </Grid> 
               </SwiperSlide>
             </>
        ))}
       </Grid>
       </Swiper>

       </Box>
       </Paper>
       <Menu localProducts={localProducts}/>
       </>
    );
}

export default Category;
