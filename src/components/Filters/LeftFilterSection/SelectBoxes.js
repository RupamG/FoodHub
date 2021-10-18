import React from "react";
import { Typography } from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SelectBoxes = (props) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox value={props.item} size="small" color="error" />}
          label={
            <Typography
              className="filter-label"
              variant="body2"
              color="textSecondary"
            >
              {props.item}
            </Typography>
          }
        />
      </FormGroup>
    </>
  );
};

export default SelectBoxes;
