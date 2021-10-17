import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./RightFilterSection.css";

const RightFilterSection = (props) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      {" "}
      <div className="right-filter-section">
        <Typography className="title" variant="h6">
          {`Results(${props.items.length})`}
        </Typography>
        <hr />
        <Container maxWidth="md">
          <div className="sort-section">
            <div className="left-section">
              <Stack direction="row" spacing={2}>
                <Chip
                  label="5+ ratings"
                  variant="outlined"
                  size="small"
                  onDelete={handleDelete}
                />
                <Chip
                  label="Non-vegetarian"
                  variant="outlined"
                  size="small"
                  onDelete={handleDelete}
                />
              </Stack>
            </div>
            <div className="right-section">
              <span className="right-section-text">Sort by : </span>
              <select name="sort" id="sort">
                <option value="most-popular">Most Popular</option>
                <option value="most-recent">Most Recent</option>
                <option value="most-ordered">Most Ordered</option>
              </select>
            </div>
          </div>
        </Container>

        <Container className="cardGrid" maxWidth="md">
          <Grid container spacing={2}>
            {Array.from(props.items).map((item) => (
              <Grid item key={item.idMeal} xs={12} sm={6} lg={4}>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image={item.strMealThumb}
                    title={item.strMeal}
                  />
                  <CardContent className="cardContent">
                    <Typography
                      className="card-title"
                      gutterBottom
                      variant="h5"
                      align="start"
                    >
                      {item.strMeal}
                    </Typography>
                    <Typography align="start" className="card-subtitle">
                      {item.strArea}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="btn"
                      variant="contained"
                      size="small"
                      color="error"
                    >
                      <PageviewIcon className="icon" />
                      view
                    </Button>
                    <Button
                      className="btn"
                      variant="contained"
                      size="small"
                      color="success"
                    >
                      <ShoppingCartIcon className="icon" />
                      order
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default RightFilterSection;
