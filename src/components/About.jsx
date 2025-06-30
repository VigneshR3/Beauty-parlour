import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Stack,
  useTheme,
} from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
 

export const About = () => {
  const theme = useTheme();

  const stats = [
    { value: 500, label: "Happy Clients", suffix: "+" },
    { value: 4, label: "Years Experience", suffix: "+" },
    { value: 6, label: "Expert Stylists", suffix: "+" },
    { value: 50, label: "Beauty Services", suffix: "+" },
  ];

  return (
    <Box  

      id="about"
      sx={{
        py: 10,
        // backgroundColor: "rgba(156, 104, 239, 0.34)", // bg-rose-800/50
         

        backdropFilter: "blur(2px)",
      }}
    >
       
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6} data-aos="fade-up">
            <Typography variant="h4" fontWeight="bold" color="black" mb={3}>
              About PrincessCelestia
            </Typography>
            <Typography
              color="rgb(19, 49, 61)"
              variant="body1"
              fontSize="1.125rem"
              mb={3}
              sx={{ lineHeight: 1.8 }}
            >
              With over 2 years of excellence in beauty and wellness,
              PrincessCelestia Beauty Parlour has been transforming lives through
              exceptional beauty services. Our team of skilled professionals is
              dedicated to enhancing your natural beauty with premium treatments
              and personalized care.
            </Typography>
            <Typography
              color="rgb(19, 49, 61)"
              variant="body1"
              fontSize="1.125rem"
              mb={5}
              sx={{ lineHeight: 1.8 }}
            >
              From cutting-edge hair styling to rejuvenating skincare
              treatments, we offer a complete range of beauty services in a
              luxurious and relaxing environment. Your beauty journey starts
              here.
            </Typography>

            <Grid container spacing={3}>
              {stats.map((stat, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });

                return (
                  <Grid item xs={6} key={index} ref={ref}>
                    <Box textAlign="center">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="rgb(19, 49, 61)"
                        mb={1}
                      >
                        {inView ? (
                          <CountUp
                            end={stat.value}
                            duration={2}
                            suffix={stat.suffix}
                          />
                        ) : (
                          0
                        )}
                      </Typography>
                      <Typography variant="body2" color="rgb(19, 49, 61)">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          {/* Right Visual */}
          {/* <Grid item xs={12} lg={6}>
            <Box
              sx={{
                borderRadius: "16px",
                p: 4,
                background: "linear-gradient(135deg, rgba(244,63,94,0.2), rgba(236,72,153,0.2))",
                backdropFilter: "blur(6px)",
              }}
            >
               
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};
