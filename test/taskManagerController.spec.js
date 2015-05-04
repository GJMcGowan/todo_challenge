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
      expect(ctrl.taskList[0].name).toEqual('Feed cat');
    });

    // How do I test for CSS here? Integration testing somewhere else?
    // This test is basically useless as it is.
    it('can hide a task when complete', function() {
      makeTask();
      ctrl.completeTask('Feed cat');
      task = ctrl.taskList[0];
      expect(task.name).toEqual('Feed cat');
      // expect(task.hide).toEqual(true);
    });

    it('can update a task', function() {
      makeTask();
      ctrl.updateTask('Feed dog', ctrl.taskList[0]);
      expect(ctrl.taskList[0].name).toEqual('Feed dog')
    });

    it('can total the number of tasks', function() {
      
    });
  });
});