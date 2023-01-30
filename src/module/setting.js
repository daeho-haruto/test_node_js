const today = Date.now();
const todayPlus = today+32000;

export class Setting {
  totalSimulationCount;
  maxTaskCount;
  maxSubtaskCount;
  result;
  constructor(
    totalSimulationCount,
    maxTaskCount,
    maxSubtaskCount
  ){
    this.totalSimulationCount = totalSimulationCount;
    this.maxTaskCount = maxTaskCount;
    this.maxSubtaskCount = maxSubtaskCount;
    this.result = ['SUCCESS', 'FAILURE', 'READY']
  }
  startSetting(api) {
    let taskID = 1;
    for(let i=1; i<=this.totalSimulationCount; i++) {
      const randomTaskCount = Math.floor(Math.random() * this.maxTaskCount + 1)
      for(let j=1; j<=randomTaskCount; j++) {
        const zeroOrOneOrTwo = Math.floor(Math.random() * 3)
        const task = {
          simulationId: i,
          simulationEnvironment: "jcak:test",
          requester: 'jack',
          id: taskID,
          name: `Task_${i}-${taskID}`,
          result: this.result[zeroOrOneOrTwo],
          testStatus: this.result[zeroOrOneOrTwo],
          environment: 'flab',
          type: 'navigation',
          application: 'clody:lastest',
          config: 'clody:lastest',
          totalMetric: {
          },
          metricStatus: this.result[zeroOrOneOrTwo],
          metricType: 'NON',
          scenario: {
            startPoint: {
              x: 10,
              y: 20,
              yaw: 3
            },
            endPoint: {
              x: 20,
              y: 50,
              yaw: 60,
            }
          },
          createAt: undefined,
          removedAt: undefined,
          updatedAt: undefined,
          startedAt: today,
          endedAt: todayPlus,
          timeout: 1000,
          currentIteration: 10,
          subTasks: []
        };
        taskID++;
        const randomSubtaskCount = Math.floor(Math.random() * this.maxSubtaskCount + 1);
        for(let k=1; k<=randomSubtaskCount; k++){
          const subTask = {
            id: k,
            dbUploadStatus: this.result[zeroOrOneOrTwo],
            metricStatus: this.result[zeroOrOneOrTwo],
            result: this.result[zeroOrOneOrTwo],
            testStatus: this.result[zeroOrOneOrTwo]
          }
          task.subTasks.push(subTask);
        }

        api.items.unshift(task)
      }
    }
    return api
  }
}