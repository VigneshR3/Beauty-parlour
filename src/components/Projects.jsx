import React from "react";
import { ExternalLink, Heart } from "lucide-react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Chip,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import ImageGallery from "./ImageGallery";
import { Helmet } from "react-helmet";

const galleryItems = [
  {
    title: "Bridal Makeover",
    description:
      "Complete bridal transformation with elegant hair styling and flawless makeup for the perfect wedding day look.",
    image: "/bride.jpg",
    services: ["Bridal Makeup", "Hair Styling", "Pre-Wedding", "Photography"],
    category: "Bridal",
  },
  {
    title: "Hair Color Transformation",
    description:
      "Stunning hair color makeover with professional balayage technique and nourishing treatments.",
    image: "/pinkhair.jpg",
    services: ["Hair Coloring", "Balayage", "Hair Care", "Styling"],
    category: "Hair",
  },
  {
    title: "Facial Glow Treatment",
    description:
      "Rejuvenating facial treatment for radiant, glowing skin with our signature hydrating therapy.",
    image: "/womanbeauty.jpg",
    services: ["Facial", "Skin Care", "Hydration", "Anti-Aging"],
    category: "Skincare",
  },
  {
    title: "Party Makeup Glam",
    description:
      "Glamorous party makeup with bold colors and dramatic styling for special occasions.",
    image: "/womanparty.jpg",
    services: ["Party Makeup", "Evening Look", "Bold Colors", "Glamour"],
    category: "Makeup",
  },
  {
    title: "Nail Art Design",
    description:
      "Creative nail art with intricate designs and premium gel polish for long-lasting beauty.",
    image: "/nail.jpg",
    services: ["Nail Art", "Gel Polish", "Manicure", "Design"],
    category: "Nails",
  },
  {
    title: " Eyebrow & Eyelash Services",
    description:
      "Enhance the natural beauty of your eyes with expert eyebrow shaping and eyelash treatments",
    image: "/eys.jpg",
    services: [
      "Threading / Waxing",
      "Eyebrow Tinting",
      "Eyebrow Lamination",
      "Microblading",
    ],
    category: "Eyebrow",
  },
  {
    title: "Aari Work & Embroidery",
    description:
      " Perfect for bridal wear, festive outfits, and custom-designed clothing, these handcrafted arts bring timeless charm to any fabric",
    image: "/ariwork.jpg",
    services: [
      "Zardosi Aari Work",
      "Bead & Stone Aari Work",
      "Thread Aari Embroidery",
      "Cutwork Aari",
      "Hand Embroidery",
      "Machine Embroidery",
      "Patch Embroidery",
      "Custom Bridal Embroidery",
    ],
    category: "Aari Work",
  },
  {
    title: "Saree Pleating & Draping",
    description:
      " Elevate your traditional look with expert saree pleating and draping for a flawless, elegant finish at any special occasion.",
    image: "/saree.jpg",
    services: [
      "Front Pleats Styling",
      "Pallu Pleating",
      "Pre-Pleated Saree Setup",
      "Custom Pleating for Photoshoots",
      "Classic Nivi Style",
      "Bengali Style",
      "Gujarati Style",
      "Lehenga Style Draping",
      "Bridal Saree Draping",
    ],
    category: "Saree Pleating",
  },
];
//Share
 

export const Projects = () => {

  //  const [FavorColor, setFavorColor] = React.useState(false);
  // const handleFavority = () => {
  //   setFavorColor(!FavorColor);
  // };
  const handleShare = async(images , title , description) => {
   if (navigator.share) {
    try {
      await navigator.share({
        title:  title,
        text:  title,
        url: `https://vf97435m-5173.inc1.devtunnels.ms`, // replace with your image URL
      });
      console.log("Shared successfully!");
    } catch (err) {
      console.error("Error sharing:", err);
    }
  } else {
    alert("Web Share not supported on this device.");
  }
};
  return (
    <Box
      id="gallery"
      sx={{
        py: 10,
        // background:
        //   "linear-gradient(261.49deg, rgba(224, 47, 117, 0.8) -90.53%, rgba(232, 147, 197, 0.8) 178.18%)",
      }}
    >
      <Helmet>
        <meta property="og:title" content="Beauty parlour" />
        <meta property="og:description" content="Beauty parlour in madurai" />
        <meta property="og:image" content="https://vf97435m-5173.inc1.devtunnels.ms/bride.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vf97435m-5173.inc1.devtunnels.ms/preview" />
      </Helmet>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" color="black" mb={2}>
            Our Work Gallery
          </Typography>
          <Typography
            variant="body1"
            color="black"
            fontSize="1.125rem"
            maxWidth="600px"
            mx="auto"
          >
            Explore our stunning transformations and beauty makeovers that
            showcase our expertise and artistry
          </Typography>
        </Box>
        <ImageGallery />
        <Grid container spacing={4}>
          {galleryItems.map((item, index) => (
            <Grid container size={{ xs: 12, md: 4 }} key={index}>
              <Card
                data-aos="zoom-in"
                sx={{
                  backgroundColor: "rgba(41, 11, 23, 0.5)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  width: { xs: "90vw", md: "100%" },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      background:
                        "linear-gradient(to top, rgba(136,19,55,0.8), transparent)",
                      opacity: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      pb: 2,
                      transition: "opacity 0.3s",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <Box  sx={{display:"flex", justifyContent:"flex-end" }} gap={2}>
                      {/* <IconButton
                      onClick={handleFavority}
                        sx={{
                          color: FavorColor ? "red" : undefined,
                          background: "rgba(255,255,255,0.2)",
                          backdropFilter: "blur(3px)",
                        }}
                      >
                        <Heart size={20} />
                      </IconButton> */}
                      <IconButton
                        onClick={()=>{handleShare(item.image , item.category,item.description)}}
                        sx={{
                          color: "white",
                          background: "rgba(255,255,255,0.2)",
                          backdropFilter: "blur(3px)",
                        }}
                      >
                        <ExternalLink size={20} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant="caption"
                    color="rgba(234, 228, 233, 0.95)"
                    mb={1}
                    display="block"
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="white"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#ccc" mb={2}>
                    {item.description}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {item.services.map((service, i) => (
                      <Chip
                        data-aos="fade-right"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-delay={i * 200}
                        key={service}
                        label={service}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(189, 171, 175, 0.2)",
                          color: "white",
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
