import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  TextField,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Select,
  TextareaAutosize,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { Appoint } from "../YupSchema/Appoint";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import BeautyParlourMap from "./BeautyParlourMap";

export const Contact = () => {
  let initialValues = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    date: "",
    email: "",
    servicetype: "",
    message: "",
  };
const apiUrl = import.meta.env.App_Api;
console.log("wfef",apiUrl)
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: Appoint,
    onSubmit: (value) => {
      console.log("values", value);
      const fd = new FormData();
      fd.append("firstname", value.firstname);
      fd.append("lastname", value.lastname);
      fd.append("date", value.date);
      fd.append("email", value.email);
      fd.append("message", value.message);
      fd.append("phonenumber", value.phonenumber);
      fd.append("servicetype", value.servicetype);
      axios
        .post(` ${apiUrl}/appoint`, fd)
        .then((res) => {
          console.log("response", res);
          Swal.fire({
            title: res.data.message,
            icon: "success",
            draggable: true,
          });
          Formik.resetForm();
        })
        .catch((err) => {
          console.log("Error", err);
          Swal.fire({
            title: "Email is not send",
            icon: "error",
            draggable: true,
          });
        });
    },
  });

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: "transparent" }}>
      <Helmet>
        <meta name="description" content="beauty parlour in madurai" />
        <meta property="og:title" content="beauty parlour" />
        <meta name="keywords" content="beauty parlour" />
        <meta name="author" content="PrincessCelestia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" color="white" mb={2}>
            Book Your Beauty Session
          </Typography>
          <Typography
            variant="body1"
            color="black"
            fontSize="1.125rem"
            maxWidth="600px"
            mx="auto"
          >
            Ready to transform your look? Get in touch with us to schedule your
            appointment and begin your beauty journey.
          </Typography>
        </Box>

        <Grid container spacing={8} m={2}>
          {/* Appointment Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(224, 217, 233, 0.34)",
                backdropFilter: "blur(6px)",
                borderRadius: 4,
                p: 4,
              }}
            >
              <Box component="form" onSubmit={Formik.handleSubmit}>
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                >
                  <Typography variant="h6">Lock in Your Date</Typography>
                </Grid>
                <Grid container spacing={2}>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      value={Formik.values.firstname}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      name="firstname"
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      placeholder="Your first name"
                      InputLabelProps={{ style: { color: "black" } }}
                      InputProps={{
                        style: {
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",

                          "&.Mui-error": {
                            color: "white", // Tailwind red-500 if error
                          },
                        },
                      }}
                    />
                    {Formik.touched.firstname && Formik.errors.firstname ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.firstname}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      value={Formik.values.lastname}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      name="lastname"
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      placeholder="Your last name"
                      InputLabelProps={{ style: { color: "black" } }}
                      InputProps={{
                        style: {
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",
                        },
                      }}
                    />
                    {Formik.touched.lastname && Formik.errors.lastname ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.lastname}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      fullWidth
                      value={Formik.values.phonenumber}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      name="phonenumber"
                      label="Phone Number"
                      variant="outlined"
                      type="number"
                      placeholder="+1..."
                      InputLabelProps={{ style: { color: "black" } }}
                      InputProps={{
                        style: {
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",
                        },
                      }}
                    />
                    {Formik.touched.phonenumber && Formik.errors.phonenumber ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.phonenumber}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      fullWidth
                      value={Formik.values.email}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      placeholder="your.email@example.com"
                      InputLabelProps={{ style: { color: "black" } }}
                      InputProps={{
                        style: {
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",
                        },
                      }}
                    />
                    {Formik.touched.email && Formik.errors.email ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.email}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    <FormControl fullWidth>
                      <InputLabel sx={{ color: "black" }}>
                        Service Type
                      </InputLabel>
                      <Select
                        value={Formik.values.servicetype}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        name="servicetype"
                        defaultValue=""
                        sx={{
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",
                          "& .MuiSelect-icon": { color: "black" },
                           
                          "&.Mui-focused": {
                            color: "black",
                          },
                        }}
                      >
                        <MenuItem value="">Select a service</MenuItem>
                        <MenuItem value="hair">Hair Styling</MenuItem>
                        <MenuItem value="facial">Facial Treatment</MenuItem>
                        <MenuItem value="makeup">Makeup</MenuItem>
                        <MenuItem value="bridal">Bridal Package</MenuItem>
                        <MenuItem value="spa">Spa & Wellness</MenuItem>
                        <MenuItem value="nails">Nail Services</MenuItem>
                      </Select>
                    </FormControl>
                    {Formik.touched.servicetype && Formik.errors.servicetype ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.servicetype}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      value={Formik.values.date}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      name="date"
                      type="date"
                      fullWidth
                      label="Preferred Date"
                      InputLabelProps={{
                        shrink: true,
                        style: { color: "black" },
                      }}
                      InputProps={{
                        style: {
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",
                        },
                      }}
                    />
                    {Formik.touched.date && Formik.errors.date ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.date}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid container size={{ xs: 12, sm: 6, md: 4 }}>
                    {/* <StyledTextarea
                      value={Formik.values.message}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      name="message"
                      minRows={4}
                      placeholder="Special requests or notes..."
                    /> */}
                    <TextField
                      value={Formik.values.message}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      name="message"
                      minRows={4}
                      multiline
                      fullWidth
                      label=" message"
                      InputLabelProps={{
                        shrink: true,
                        style: { color: " " },
                      }}
                      InputProps={{
                        style: {
                          color: "black",
                          backgroundColor: " rgba(235, 163, 205, 0.51)",
                        },
                      }}
                    />

                    {Formik.touched.message && Formik.errors.message ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {Formik.errors.message}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>
                <Box item xs={12} md={4}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: " #E893C5",
                      "&:hover": { backgroundColor: "rgb(230, 107, 179)",transform: "scale(1.05)" },
                      mt: 3,
                      py: 1.5,
                      fontWeight: "medium",
                      transform: "scale(1)",
                      transition: "transform 0.3s",
                       
                    }}
                  >
                    Book Your Appointment
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Contact Info */}
        </Grid>
      </Container>
      <Box
        sx={{
          background:
            "rgba(255, 126, 212, 0.24)",
          padding: 2,
          borderRadius: 4,
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          sx={{ padding: 2, borderRadius: 4, justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="black" fontWeight="bold" mb={4}>
              Visit Our Parlour
            </Typography>

            <Stack spacing={3}>
              {[
                {
                  icon: <Phone size={24} color=" #f43f5e" />,
                  label: "Call Us",
                  text: "+91-9092187992",
                },
                {
                  icon: <Mail size={24} color=" #ec4899" />,
                  label: "Email",
                  text: "princesscelestia102@gmail.com",
                },
                {
                  icon: <MapPin size={24} color=" #a855f7" />,
                  label: "Location",
                  text: "135A,Periyaradha Street,Thirupparankundram,Madurai-652005",
                },
                {
                  icon: <Clock size={24} color=" #6366f1" />,
                  label: "Hours",
                  text: "Mon–Sat: 9AM–8PM, Sun: 10AM–6PM",
                },
              ].map(({ icon, label, text }, idx) => (
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  key={idx}
                >
                  <Box
                    data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom"
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "rgba(244,63,94,0.1)",
                    }}
                  >
                    {icon}
                  </Box>
                  <Box
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <Typography color="textPrimary" fontWeight="medium">
                      {label}
                    </Typography>
                    <Typography color="textSecondary">{text}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            {/* Social Icons */}
            <Box mt={6}>
              <Typography color="black" fontWeight="medium" mb={2}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  sx={{
                    bgcolor: "rgba(239, 55, 86, 0.27)",
                    "&:hover": { bgcolor: "rgba(241, 237, 238, 0.6)" },
                  }}
                >
                  <Instagram color="#ec4899" />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "rgba(239, 55, 86, 0.27)",
                    "&:hover": { bgcolor: "rgba(244, 239, 240, 0.6)" },
                  }}
                >
                  <Facebook color="#3b82f6" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} width={600}>
            <Typography variant="h6" color="black" fontWeight="bold" mb={4}>
              Our Location
            </Typography>

            <BeautyParlourMap />
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Typography variant="body1" textAlign="center">
            © 2025 ViOT All Rights Reserved.
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};
