import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import PlaceHolder from "../PlaceHolder/PlaceHolder";
import "./styles.css";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <div className="container">
      <Typography variant="h4">
        Restaurants, Hotels, Attractions around you
      </Typography>
      <div className="wrapper">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attraction">Attraction</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={3} className="list">
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceHolder place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
