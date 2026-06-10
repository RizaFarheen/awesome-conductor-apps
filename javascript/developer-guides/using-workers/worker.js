import {
  OrkesClients,
  TaskHandler,
  worker,
} from "@io-orkes/conductor-javascript";

const myTask = worker({ taskDefName: "myTask" })(async (task) => {
  return {
    outputData: {
      hello: "Hello " + task.inputData?.name,
    },
    status: "COMPLETED",
  };
});

const clients = await OrkesClients.from();

const handler = new TaskHandler({
  client: clients.getClient(),
  scanForDecorated: true,
});

await handler.startWorkers();
console.log("Worker is running. Press Ctrl+C to stop.");
