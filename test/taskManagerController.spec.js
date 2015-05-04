describe('TaskManagerController', function() {
  beforeEach(module('TaskManager'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskManagerController');
  }));

  var makeTask = function() {
    ctrl.taskText = 'Feed cat'
    ctrl.addTask();
  };

  it('starts with an empty list of tasks', function() {
    expect(ctrl.taskList).toEqual([])
    expect(ctrl.taskText).toBeUndefined();
  });

  describe('List functionality', function() {
    it('can add an item to the list', function() {
      makeTask();
      expect(ctrl.taskList).toEqual(['Feed cat']);
    });

    // How do I test for CSS here? Integration testing somewhere else?
    it('can hide a task when complete', function() {
      makeTask();
      ctrl.completeTask();
      expect(ctrl.taskList[0].hide).toBe(true);
    });

    it('can update a task', function() {
      makeTask();
      ctrl.updateTask();
      expect(ctrl.taskList)
    });

    xit('can total the number of tasks')
  });
});