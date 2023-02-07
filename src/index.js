import cors from 'cors';
import express from "express";
import { Setting } from "./module/setting.js";

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));

const PORT = 8000;

const subTask = {
  "id": "1",
  "dbUploadStatus": "SUCCESS",
  "metric": {
    "mt1": "321",
    "mt2": "132"
  },
  "metricStatus": "SUCCESS",
  "result": "SUCCESS",
  "testStatus": "SUCCESS",
  "recordedDbUrl": "https://du4izlkxnef0k.cloudfront.net/task-12-1/database/database.db",
  "rosbagUrl": "https://du4izlkxnef0k.cloudfront.net/task-12-1/rosbag/rosbag.zip",
  "createAt": null,
  "removedAt": null,
  "updatedAt": null,
  "startedAt": null,
  "endedAt": null
}

/**
 * Class - Setting
 * totalSimulationCount - simulation 개수 ex)맨 앞에 1, 2, 2, 3 .. 정해주는
 * maxTaskCount (랜덤) - 하나의 simulation 안에 들어갈 task 최대 개수
 * maxSubtaskCount (랜덤) - 하나의 task 안에 들어갈 subTask 최대 개수
 */
const setting1 = new Setting(5, 10, 10);
const api1 = setting1.startSetting({
  items: [],
  total: 10,
  page: 1,
  size: 10
});

const api2 = setting1.startSetting({
  items: [],
  total: 10,
  page: 1,
  size: 9
})

/* / 접속시 나올 메시지 */
app.get("/", (request, response) => { 
  response.send(`<h1>test</h1>`);
});

const scrollTest = false

let test = 0

// setInterval(function() {
//   test++
//   console.log(test)
// }, 3000);

app.get("/v1/tasks", (request, response) => {
  if(scrollTest){
    if(test % 2 === 0){
      response.send(api1);
    }
    else {
      response.send(api2);
    }
  }
  else {
    response.send(api1)
  }
})

app.get("/v1/tasks/1/", (request, response) => {  
  let iter = request.query.iter;
  response.send(subTask)
});

/* PORT에서 서버 구동 */
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});