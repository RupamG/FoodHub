import React from "react";

import { Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./LeftFilterSection.css";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 500,
    label: "₹500",
  },

  {
    value: 2000,
    label: "₹2000",
  },
];

function valuetext(value) {
  return `₹${value}`;
}

const LeftFilterSection = () => {
  return (
    <>
      <div className="left-filter-section">
        <div className="title-section">
          <Typography className="title" variant="h6">
            Filters
          </Typography>
          <Typography className="resetAll" variant="h6">
            Reset all
          </Typography>
        </div>

        <hr />
        {/* Filters */}
        <div className="filters">
          {/* Format */}
          <div className="format">
            <div className="filter-heading">
              <p className="filter-title">Format</p>
              <div className="icon-filter">
                <ArrowDropUpIcon />
              </div>
            </div>
            <div className="filter-body">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Buffet
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Mini Buffet
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox defaultChecked size="small" color="error" />
                  }
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Lunch Box
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Snack Box
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Live Counter
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Food Trucks
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Pop-up
                    </Typography>
                  }
                />
              </FormGroup>
            </div>
          </div>
          <hr />
          {/* Price Range */}
          <div className="price-range">
            <div className="filter-heading">
              <p className="filter-title">Price ₹500 - ₹2000</p>
              <div className="icon-filter">
                <ArrowDropUpIcon />
              </div>
            </div>
            <div className="filter-body">
              <Slider
                className="slider"
                size="small"
                aria-label="Custom marks"
                defaultValue={2000}
                getAriaValueText={valuetext}
                step={10}
                max={5000}
                min={0}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </div>
          </div>
          <hr />
          {/* Ocassion */}
          <div className="price-range">
            <div className="filter-heading">
              <p className="filter-title">Ocassion</p>
              <div className="icon-filter">
                <ArrowDropUpIcon />
              </div>
            </div>
            <div className="filter-body">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Birthday Celebration
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Baby Shower
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox defaultChecked size="small" color="error" />
                  }
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      House Warming
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      House Party
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" color="error" />}
                  label={
                    <Typography
                      className="filter-label"
                      variant="body2"
                      color="textSecondary"
                    >
                      Society Event
                    </Typography>
                  }
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftFilterSection;
