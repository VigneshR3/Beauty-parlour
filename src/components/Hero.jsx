import React from "react";
import { Phone, Mail, MapPin, ChevronDown, Sparkles } from "lucide-react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Link as MuiLink,
  useTheme,
  keyframes,
} from "@mui/material";
 

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

export const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      sx={{}} // Optional dark background
    >
      
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity:"10",
           filter: "brightness(0.8) contrast(1.2) saturate(1.8)",
          zIndex: 0,
        }}
      >
        <source src="/beauty.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
      {/* Animated background glow */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: 256,
            height: 256,
            backgroundColor: "rgba(244, 63, 94, 0.1)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: `${pulse} 3s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: 384,
            height: 384,
            backgroundColor: "rgba(236, 72, 153, 0.1)",
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: `${pulse} 5s ease-in-out infinite 1s`,
          }}
        />
      </Box>

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
         
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "4rem" },
            color: "white",
            mt: 8,
          }}
        >
          Welcome to{" "}
          <Box
            component="span"
            sx={{
            //  backgroundImage:" linear-gradient( 135deg,  rgb(208, 87, 226) 11.2%, rgb(209, 182, 236) 100.2% )",
             backgroundImage:" linear-gradient( 135deg,  #E8CD00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily:"kolkerBrush"
            }}
          >
            PrincessCelestia
          </Box>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "700px",
            margin: "0 auto",
            mb: 5,
            fontSize: { xs: "1.125rem", md: "1.5rem" },
          }}
          color="white"
        >
          Transform your beauty with our expert stylists and premium treatments.
          Experience luxury, elegance, and personalized care in every visit.
        </Typography>

        {/* Contact Icons */}
        {/* <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          mb={3}
          style={{ color: " white" }}
        >
          <MuiLink href="tel:+1234567890" color="inherit" underline="none">
            <Phone size={32} className="hover:text-rose-400 transition" />
          </MuiLink>
          <MuiLink
            href="mailto:info@bellabeauty.com"
            color="inherit"
            underline="none"
          >
            <Mail size={32} />
          </MuiLink>
          <MuiLink href="#contact" color="inherit" underline="none">
            <MapPin size={32} />
          </MuiLink>
        </Stack> */}

        {/* CTA Buttons */}
        <Stack
        data-aos="fade-up"
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          mt={15}
        >
            <Button
              variant="contained"
              href="#services"
              sx={{
                background:  "linear-gradient(261.49deg , rgb(232, 147, 197), rgb(224, 47, 117) )",
                "&:hover": { backgroundColor: "rgb(226, 90, 170)",color:" white" },
                px: 4,
                py: 1.5,
              }}
            >
              Our Services
            </Button>
          <Button
           
            variant="outlined"
            href="#contact"
            sx={{
             background:  "linear-gradient(261.49deg , rgb(215, 27, 83), rgb(224, 47, 117),rgb(224, 47, 117) )",
              borderColor:" #E893C5",
              color: " white",
              "&:hover": {
                backgroundColor: "rgb(219, 68, 156)",
                borderColor:" #E893C5",
                color: "#fff",
              },
              px: 4,
              py: 1.5,
            }}
          >
            Book Appointment
          </Button>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
      data-aos="fade-up"
        position="absolute"
        bottom={32}
        left="50%"
        sx={{
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          color: "#fff",
          opacity: 0.5,
        }}
      >
        <ChevronDown size={32} />
      </Box>
    </Box>
  );
};
