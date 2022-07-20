/**
 * Refactor w/o forEach
 * Keep the test passing
 */
const numbers = [1, 2, 3, 4, 5];
function sumOfElements(array) {
  let total = 0;
  numbers.forEach(function (number) {
    total += number;
  });
  return total;
}

/**
 * Refactor again w/o forEach
 * Keep the test passing
 */
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

// exports for testing
module.exports = {
  sumOfElements,
  difficultTasks,
};
