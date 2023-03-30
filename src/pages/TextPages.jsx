import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Button, Box } from '@mui/material';
import Footer from "../components/Footer";



const Pages = () => {

  const params = useParams();
  
  
  return (
    <Container>
      <Box sx={{
        backgroundColor: "#999",
        mt: 20
      }}>

        <iframe src={'https://api.manxho.co.in/text/' + params.page + '/'}  width="100%" height="500"  style={{overflow: 'scroll'}}></iframe>

      </Box>
      <Footer />
    </Container>
  );
};

export default Pages;