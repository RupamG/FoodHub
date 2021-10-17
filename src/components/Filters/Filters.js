import React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LeftFilterSection from "./LeftFilterSection/LeftFilterSection";
import RightFilterSection from "./RightFilterSection/RightFilterSection";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const Filters = (props) => {
  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container
            maxWidth="md"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                  <Item>
                    <LeftFilterSection items={props.items} />
                  </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Item>
                    <RightFilterSection items={props.items} />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Filters;
