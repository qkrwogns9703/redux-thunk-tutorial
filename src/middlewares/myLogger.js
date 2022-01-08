const myLogger = (store) => (next) => (action) => {
  console.log("action", action); //액션 출력
  const result = next(action); // 다음 미들웨어에게 액션을 전달합니다.

  //업데이트 이휴 상태 조회
  console.log("\t", store.getState());

  return result;
};

export default myLogger;
