import React from "react";
import { Box } from "@mui/material";
import { baseURL } from "../../../api/axios";

const QuizKioskQuestion = ({ quizTitle, quizUrl }) => {
  let question;
  if (quizUrl) {
    question = (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          fontSize: "8vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={baseURL + quizUrl}
          style={{ height: "70%" }}
          alt="퀴즈이미지"
        />
        <span>{quizTitle}</span>
      </Box>
    );
  } else {
    question = (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          fontSize: "12vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>{quizTitle}</span>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        fontFamily: "NanumGimYuICe",
        color: "white",
        display: "flex",
        flexGrow: 1,
      }}
    >
      {question}
    </Box>
  );
};

export default QuizKioskQuestion;
