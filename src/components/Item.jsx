import { Card, CardActionArea, CardHeader, CardMedia, IconButton } from '@mui/material'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import React from 'react'
import ProductContext from './context/product/productcontext';
import { useContext } from 'react';

const Item = ({item}) => {
    const {addtoCart} = useContext(ProductContext)
    
  return (
    <Card  sx={{maxWidth:300}}>
        <CardActionArea>
                    <CardMedia
                        component='img'
                        height='200'
                        image={`https://abdulrasid82.pythonanywhere.com/${item.image}`}

                    />
        </CardActionArea>   
                     <CardHeader
                    title={item.title}
                    subheader= {`Rs. ${item.price} / ${item.size}`}
                    action={
                        <IconButton onClick={()=>addtoCart(item)}>
                            <AddShoppingCartRoundedIcon/>
                        </IconButton>
                    }
                /> 
                 
                </Card>
  )
}

export default Item