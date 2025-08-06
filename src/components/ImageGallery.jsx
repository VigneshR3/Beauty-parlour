import React, { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css"; // Optional if you want extra styling
import { Card, CardMedia, Typography } from "@mui/material";
import { Grid } from "@mui/material";

const makeupImages = [
  "/makeup2.jpg",
  "/makeup3.jpg",
  "/makeup4.jpg",
  "/makeup5.jpg",
  "/makeup1.jpg",
  "/makeup6.jpg",
  "/makeup7.jpg",
  "/makeup8.jpg",
  "/makeup9.jpg",
  "/makeup10.jpg",
  "/makeup11.jpg",
  "/beaty-20.jpg",
  "/beaty-21.jpg"
  
   
];
 

const ImageGallery = () => {
  const bookRef = useRef();

 useEffect(() => {
  const interval = setInterval(() => {
    if (bookRef.current) {
      const flipBook = bookRef.current.pageFlip();
      const currentPage = flipBook.getCurrentPageIndex();
      const totalPages = flipBook.getPageCount();

      if (currentPage >= totalPages - 1) {
        flipBook.turnToPage(0); // go back to first page
      } else {
        flipBook.flipNext(); // go to next page
      }
    }
  }, 3000); // flip every 3 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <Grid container>
      <Grid container size={{ xs: 12, md: 6 }} >
        <img src="/makeup13.jpg" alt="" width="100%" height="100%" style={{borderRadius:'15px',objectFit:'contain' }}/>
      </Grid>
      <Grid container size={{ xs: 12, md: 6 }} direction="row" sx={{backgroundColor:' #ffff',justifyContent:"center",overflow:'hidden'}}>
         
        <HTMLFlipBook
          width={300}
          height={400}
          maxShadowOpacity={0.5}
           ref={bookRef}
          mobileScrollSupport={true}
          style={{borderRadius:"15px"}}
        >
          {makeupImages.map((item,i) => {
            return (
              
              <img
              key={i}
                src={item}
                alt="beautyparlour"
                style={{ borderRadius: "15px" ,objectFit:'cover'}}
              /> 
               
               
            
            );
          })}
        </HTMLFlipBook>
      </Grid>
    </Grid>
  );
};

export default ImageGallery;
