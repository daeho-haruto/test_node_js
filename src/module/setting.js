const today = Date.now();
const todayPlus = today + 500;

export class Setting {
  totalTaskCount;
  maxTaskCount;
  maxSubtaskCount;
  result;
  constructor(
    totalTaskCount,
    maxTaskCount,
    maxSubtaskCount
  ){
    this.totalTaskCount = totalTaskCount;
    this.maxTaskCount = maxTaskCount;
    this.maxSubtaskCount = maxSubtaskCount;
    this.result = ['SUCCESS', 'FAILURE', 'READY']
  }
  startSetting(api) {
    for(let i=1; i<=this.totalTaskCount; i++) {
      const randomTaskCount = Math.floor(Math.random() * this.maxTaskCount + 1)
      for(let j=1; j<=randomTaskCount; j++) {
        const zeroOrOneOrTwo = Math.floor(Math.random() * 3)
        const task = {
          simulationId: i,
          simulationEnvironment: "jcak:test",
          requester: 'jack',
          id: j,
          name: `Test_${i} Task_${j}`,
          result: this.result[zeroOrOneOrTwo],
          testStatus: this.result[zeroOrOneOrTwo],
          environment: 'flab',
          type: 'Demo-Test Type',
          application: 'clody:lastest',
          config: 'clody:lastest',
          totalMetric: {
            mt1: '10',
            mt2: '20',
            mt3: '30'
          },
          metricStatus: this.result[zeroOrOneOrTwo],
          metricType: 'NON',
          scenario: {
            startPoint: {
              x: 10,
              y: 20,
              yaw: 30
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
        const randomSubtaskCount = Math.floor(Math.random() * this.maxSubtaskCount + 1);
        for(let k=1; k<=randomSubtaskCount; k++){
          const subTask = {
            id: k,
            dbUploadStatus: this.result[zeroOrOneOrTwo],
            metric: {
              mt1: '10',
              mt2: '30',
              mt3: '50'
            },
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