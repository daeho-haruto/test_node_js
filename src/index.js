import cors from 'cors';
import express from "express";
import { Setting } from "./module/setting.js";

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
const PORT = 8000;

/**
 * Class - Setting
 * totalSimulationCount - simulation 개수 ex)맨 앞에 1, 2, 2, 3 .. 정해주는
 * maxTaskCount (랜덤) - 하나의 simulation 안에 들어갈 task 최대 개수
 * maxSubtaskCount (랜덤) - 하나의 task 안에 들어갈 subTask 최대 개수
 */
const setting1 = new Setting(3, 5, 10);
const api1 = setting1.startSetting({
  items: [],
  total: 10,
  page: 1,
  size: 10
});

/* / 접속시 나올 메시지 */
app.get("/", (request, response) => { 
  response.send(`<h1>test</h1>`);
});

// app.get("/v1/tasks/1", (request, response) => {  
//   // response.send(`<h1>hi simulations</h1>`);
//   let queryData = url.parse(request.url, true).query;

//   const iter =  queryData.iter;
//   if(iter == '1') {
//     response.send(subTask1);
//   }
// });

app.get("/v1/tasks", (request, response) => {
  response.send(api1);
})

/* PORT에서 서버 구동 */
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});