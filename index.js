import cors from 'cors';
import express from "express";
import { Setting } from "./setting.js";

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
const PORT = 8000;

const setting1 = new Setting(3, 3, 10);
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