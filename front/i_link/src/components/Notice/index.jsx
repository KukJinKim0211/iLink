import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import NoticeWriteForm from "./noticewriteform";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { Box, Grid } from "@mui/material";
import NoticeDetail from "./noticedetail";

const notice = [
  //더미데이터
  {
    notice_id: 4,
    notice_title: "주말은 언제올까요 정말정말 배고프네요 저녁 추천좀 부탁드립니다.",
    notice_content : "폭우가 계속되고있습니다. 가정에서 다들 쉬시고 저녁 맛있는거 드시고 내일 조심히 출근하시고 화이팅입니다.",
    notice_date: "방가방가",
    notice_user: "배지우",
    notice_count: "2",
  },
  {
    notice_id: 3,
    notice_title: "9/1 일 지우원장님의 생일파티가 유치원에서 있습니다. 많은참여 부탁드립니다.",
    notice_content : "폭우가 계속되고있습니다. 가정에서 다들 쉬시고 저녁 맛있는거 드시고 내일 조심히 출근하시고 화이팅입니다.",
    notice_date: "포켓몬",
    notice_user: "배지우",
    notice_count: "2",
  },
  {
    notice_id: 2,
    notice_title: "계속 이어지는 폭우로 인해 가정에서 휴식을 취하시기 바랍니다.",
    notice_content : "폭우가 계속되고있습니다. 가정에서 다들 쉬시고 저녁 맛있는거 드시고 내일 조심히 출근하시고 화이팅입니다.",
    notice_date: "안녕",
    notice_user: "배지우",
    notice_count: "2",
  },
  {
    notice_id: 1,
    notice_title: "코로나 방역수칙으로 인한 가정에서 주의 요망",
    notice_content : "폭우가 계속되고있습니다. 가정에서 다들 쉬시고 저녁 맛있는거 드시고 내일 조심히 출근하시고 화이팅입니다.",
    notice_date: "반가워",
    notice_user: "배지우",
    notice_count: "2",
  },
];

export default function Notice() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // 모달창 스타일 지정
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 600,
    bgcolor: "#F8FAD7",
    border: "5px solid #FCE6D4",
    boxShadow: 24,
    p: 4,
  };

  const idCount = useRef(5);
  const [notices, setNotices] = useState(notice);
  const [details, setDetails] = useState('');

  const addNotice = (notice) => {
    notice.notice_id = idCount.current;
    setNotices([notice, ...notices]);
    
    idCount.current += 1;
  };

  const detailNotice = (notice) =>{
    setDetails(notice)
    
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  //모달창 상태관리

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    
  
    setOpen1(true);}
  const handleClose1 = () => setOpen1(false);



  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  //삭제 함수

  const onRemove = (id) => {
    
    setNotices(notices.filter((notice) => notice.notice_id !== id));
  };
  return (
    <div id="font_test">
      <h2>공지사항</h2>
      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ background: "#FF8A7B" }}>
                <TableCell id="font_test" width="30px" alingn="center">
                  번호
                </TableCell>
                <TableCell id="font_test" width="700px" align="center">
                  제목
                </TableCell>
                <TableCell id="font_test" width="50px" align="center">
                  작성인
                </TableCell>
                <TableCell id="font_test" width="110px" align="center">
                  작성일
                </TableCell>
                <TableCell id="font_test" width="50px" align="center">
                  조회
                </TableCell>
                <TableCell
                  id="font_test"
                  width="30px"
                  align="center"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {notices.map((notice) => (
                <TableRow
                  onClick ={()=> {handleOpen1()
                    detailNotice(notice)
                    
                    
                  }}
                  key={notice.notice_id}
                  sx={{
                    background: "white",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell  align="center" component="th" scope="row">
                    {notice.notice_id}
                  </TableCell>
                  <TableCell  id="font_test" align="left">{notice.notice_title}</TableCell>
                  <TableCell  align="center">{notice.notice_user}</TableCell>
                  <TableCell  align="center">
                    {year}년{month}월{day}일
                  </TableCell>
                  <TableCell  align="center">{notice.notice_count}</TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{ color: "red" }}
                      size="small"
                      onClick={() => onRemove(notice.notice_id)}
                    >
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
        className="write-button"
        sx={{
          borderColor:"red",
          border:1,
          color:"black",
          background: "#7FC3FD",
          display:"flex",
          justifyContent:"center",
          marginTop: "15px",
          marginLeft: "1080px",
          width: 30,
          height: 40,
        }}
        onClick={handleOpen2}
      >
        글작성
      </Button>
      
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* 모달창 스타일 */}
        <Box sx={style}>
          <NoticeDetail  detailNotice={details} />
          <div>
            <Button sx={{ ml: 90 }} onClick={handleClose1}>
              닫기
            </Button>
          </div>
        </Box>
      </Modal>






      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* 모달창 스타일 */}
        <Box sx={style}>
          <NoticeWriteForm idCount={idCount.current} addNotice={addNotice} />
          <div>
            <Button sx={{ ml: 90 }} onClick={handleClose2}>
              닫기
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
