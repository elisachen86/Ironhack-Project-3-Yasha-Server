const stages = [
  "submitted",
  // "confirmed",
  // "packed",
  // "ready_to_ship",
  "shipped",
  "received",
];

const getStage = (steps, stages) => {
  const currentStep = steps[steps.length - 1];

  const index = stages.findIndex((stage) => {
    return currentStep.stage === stage;
  });

  return stages[index + 1];
};

module.exports = {
  stages,
  getStage,
};
