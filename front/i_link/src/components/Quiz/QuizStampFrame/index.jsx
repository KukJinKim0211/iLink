import {
  Box,
  Button,
  Grid,
  Typography,
  Modal,
  TextField,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import heart from "../../Detail/Parents/FeelPng/heart.png";
import axios from "axios";
import { baseURL, urls } from "../../../api/axios";

const defaultStamp = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
];

const QuizStampFrame = ({ kidNo }) => {
  const [stampCount, setStampCount] = useState(0);
  const [kid, setKid] = useState(kidNo);

  const getKidInfo = () => {
    try {
      const fullURL = baseURL + urls.fetchKidsDetail + kidNo;
      axios.get(fullURL).then((response) => {
        setStampCount(parseInt(response.data.kid_stamp));
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getKidInfo();
  }, [kidNo]);

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        background: "#4ca761",
        height: "85%",
        border: "1.5vw solid #cda352",
      }}
    >
      <Grid container sx={{ height: "100%", width: "100%" }}>
        {defaultStamp.map((stamp, index) => (
          <Grid
            item
            xs={2}
            key={stamp.id}
            sx={{
              height: "30%",
              mt: "1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                background: "#D6FABA",
                width: "80%",
                height: "80%",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {stampCount > index && (
                <Avatar
                  src={heart}
                  variant="square"
                  sx={{ width: "90%", height: "90%" }}
                ></Avatar>
              )}
            </Box>
          </Grid>
        ))}
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default QuizStampFrame;
