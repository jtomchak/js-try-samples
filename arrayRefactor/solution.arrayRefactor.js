//Refactor

const numbers = [1, 2, 3, 4, 5];
function sumOfElements(array) {
  let total = 0;
  numbers.forEach(function (number) {
    total += number;
  });
  return total;
}

//Refactor me too
const tasks = [30, 45, 120, 180, 220, 180, 320];
function difficultTasks(array) {
  let dTasks = [];

  tasks.forEach(function (task) {
    if (task >= 120) {
      dTasks.push(task);
    }
  });

  return dTasks;
}

module.exports = {
  sumOfElements,
  difficultTasks,
};
