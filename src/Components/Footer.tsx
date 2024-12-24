

import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width:'208vh',
        height: "auto",
        backgroundColor: "#1976d2",
        paddingY: "5rem",
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              Food Delivery App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="whitesmoke" variant="subtitle1">
              {`${new Date().getFullYear()} | foood | menu | call us:1234567890`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;