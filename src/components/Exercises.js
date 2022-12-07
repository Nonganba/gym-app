import React from "react";
import { useEffect, useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box
      id="exercises"
      mt="50px"
      sx={{
        mt: { lg: "110px" },
        p: "20px",
      }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
