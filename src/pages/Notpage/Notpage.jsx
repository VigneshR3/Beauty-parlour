import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Notpage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #fff1f5, #fce7f3)",
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{ mt: 1, fontWeight: 600, color: "text.primary" }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            px: 4,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Go to Home
        </Button>
      </Paper>
    </Box>
  );
};

export default Notpage;
