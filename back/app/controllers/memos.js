const path = require("path");

const db = require(path.join(__dirname, "..", "models"));
const Memos = db.memos;

// 알림장 등록
// [post] /memos/register
exports.memo_regist = async function (req, res) {
  // *** Content-Type: application/json

  // 알림장
  const memo = {
    group_no: req.body.groupNo, // 반별 알림장
    memo_content: req.body.memoContent,
    memo_date: req.body.memoDate,
  };

  await Memos.create(memo)
    .then((data) => {
      console.log("알림장 등록 완료");
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "알림장 등록 실패",
      });
    });
};

// 알림장 목록 조회
// [get]  /memos/list/:groupNo
exports.memo_list = async function (req, res) {
  const groupNo = req.params.groupNo;

  await Memos.findAll({ where: { group_no: groupNo } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "목록 조회 과정에 문제 발생",
      });
    });
};

// 알림장 상세 조회
// [get]  /memos/:memoNo
exports.memo_detail = async function (req, res) {
  const memoNo = req.params.memoNo;
  await Memos.findByPk(memoNo)
    .then((data) => {
      if (data === null) {
        res.status(500).json({
          message: "해당 정보를 찾을 수 없습니다.",
        });
      } else {
        console.log(data);
        res.status(200).json(data);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "목록 조회 과정에 문제 발생",
      });
    });
};

// 알림장 정보 수정
// [put]  /memos/:memoNo
exports.memo_update = async function (req, res) {
  const memoNo = req.params.memoNo;

  // 알림장
  const memo = {
    memo_content: req.body.memoContent,
  };

  await Memos.update(memo, { where: { memo_no: memoNo } })
    .then((result) => {
      if (result[0] === 1) {
        // 수정 완료
        console.log("알림장 수정 완료");
        res.redirect(`/memos/${memoNo}`); // 알림장 정보 조회 페이지
      } else {
        // 수정 실패
        res.json({
          message: "해당 알림장을 찾을 수 없거나 데이터가 비어있음",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "알림장 수정 실패",
      });
    });
};

// 알림장 정보 삭제
// [delete] /memos/:memoNo
exports.memo_remove = async function (req, res) {
  const memoNo = req.params.memoNo;

  await Memos.destroy({ where: { memo_no: memoNo } })
    .then((result) => {
      if (result == 1) {
        // 삭제 완료
        res.json("알림장 삭제 완료");
      } else {
        // 삭제 실패
        res.json({
          message: "해당 알림장을 찾을 수 없습니다.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "알림장 삭제 실패",
      });
    });
};
