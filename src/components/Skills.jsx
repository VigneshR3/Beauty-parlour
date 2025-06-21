import React from "react";
import { Scissors, Palette, Sparkles, Heart, Star, Crown } from "lucide-react";
import { Album } from "lucide-react";
import { Volleyball } from "lucide-react";
import { Box, Typography, Container, Grid, Paper, Stack } from "@mui/material";
 
import { RiShining2Fill } from "react-icons/ri";

const serviceCategories = [
  {
    icon: Scissors,
    title: "Hair Styling",
    services: [
      "Haircuts & Styling",
      "Hair Coloring",
      "Hair Treatments",
      "Bridal Hair",
      "Hair Extensions",
    ],
    gradient: "linear-gradient(to right, #f43f5e, #ec4899)",
  },
  {
    icon: Palette,
    title: "Makeup Services",
    services: [
      "Bridal Makeup",
      "Party Makeup",
      "Professional Makeup",
      "Makeup Lessons",
      "Special Events",
    ],
    gradient: "linear-gradient(to right, #a855f7, #6366f1)",
  },
   {
    icon: Sparkles,
    title: "Facial Treatments",
    services: [
      "Deep Cleansing",
      "Anti-Aging Facials",
      "Hydrating Masks",
      "Acne Treatment",
      "Skin Brightening",
    ],
    gradient: "linear-gradient(to right, #ec4899, #a855f7)",
  },
  {
    icon: Heart,
    title: "Eyebrow & Eyelash Services ",
    services: [
      "Eyebrow Tinting & Shaping",
      "Eyelash Extensions & Lifting",
      "Microblading",
    ],
    gradient: "linear-gradient(to right, #6366f1, #3b82f6)",
  },
  {
    icon: Star,
    title: "Nail Services",
    services: [
      "Manicure",
      "Pedicure",
      "Nail Art",
      "Gel Polish",
      "Nail Extensions",
    ],
    gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    services: [
      "Complete Bridal Look",
      "Pre-Wedding Treatments",
      "Engagement Makeup",
      "Mehendi Services",
      "Family Packages",
    ],
    gradient: "linear-gradient(to right, #06b6d4, #14b8a6)",
  },
  {
    icon: Palette,
    title: "Mehendi & Henna Services",
    services: [
      "Bridal Mehendi",
      "Pre-Wedding Treatments",
      "Party & Occasional Henna ",
    ],
    gradient: "linear-gradient(to right, #06b6d4, #14b8a6)",
  },
  {
    icon: Album,
    title: "Saree Pleating & Draping",
    services: [
      "Professional saree draping for weddings, receptions, and events  ",
      "Different styles: Traditional, Bengali, Gujarati, and more",
      "Secure pleating and pinning for all-day comfort",
    ],
    gradient: "linear-gradient(to right,rgb(45, 164, 185),rgb(83, 176, 165))",
  },
  {
    icon: Volleyball,
    title: "Aari Work & Embroidery",
    services: [
      "Handcrafted embroidery designs for blouses, sarees, and lehengas ",
      "Traditional and modern patterns for wedding and party wear ",
      "Customization available based on fabric and design preference ",
    ],
    gradient: "linear-gradient(to right,rgb(223, 131, 38),rgb(208, 208, 112))",
  },
];

export const Skills = () => {
  return (
    <Box id="services" sx={{ py: 10,background: "linear-gradient(261.49deg , rgba(235, 163, 205, 0.51), rgba(232, 177, 199, 0.74) )", }}>
       
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" color="black" mb={2}>
            Our Beauty Services
          </Typography>
          <Typography
            variant="body1"
            color="rgb(19, 49, 61)"
            maxWidth="600px"
            mx="auto"
            fontSize="1.125rem"
          >
            Discover our comprehensive range of beauty and wellness services
            designed to make you look and feel your best
          </Typography>
        </Box>

        <Grid container spacing={1}>
          {serviceCategories.map((category, index) => (
            <Grid
            data-aos="zoom-in"
              container
              size={{ xs: 6, sm: 6, md: 4, xl: 3, lg: 3 }}
              key={index}
            >
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 4,
                  p: 1,
                  bgcolor: " ",
                  backdropFilter: "blur(6px)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  minHeight: 376,
                  width: {
                    xs: "10rem",
                    md: "23rem",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: category.gradient,
                    mb: 3,
                    transition: "transform 0.3s",
                    ".MuiPaper-root:hover &": {
                      transform: "rotate(12deg)",
                    },
                  }}
                >
                  <category.icon size={32} color="white" />
                </Box>
                <Typography variant="body1" fontWeight="bold" color=" Black" minHeight={50} mb={2}>
                  {category.title}
                </Typography>
                <Stack spacing={1}>
                  {category.services.map((service,i) => (
                    <Box
                      key={service}
                      sx={{
                        backgroundColor: " #eee",
                        color: "black",
                        fontSize: "0.875rem",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                      }}
                    >
                      <RiShining2Fill size={12} style={{color:" rgb(195, 179, 3)",}}/>{service}
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
