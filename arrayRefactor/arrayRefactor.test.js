const refactor = require('./arrayRefactor');

describe('arrayRefactor--', () => {
  test('.sumOfElements', () => {
    expect(refactor.sumOfElements()).toEqual(15);
  });
  test('.difficultTasks', () => {
    expect(refactor.difficultTasks()).toEqual([120, 180, 220, 180, 320]);
  });
});
