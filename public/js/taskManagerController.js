taskManager.controller('TaskManagerController', [function() {

  var self = this;

  self.taskList = [];

  self.addTask = function() {
    if(self.taskText !== '') {
      self.taskList.push(self.taskText);
      self.taskText = '';
    };
  };

  self.completeTask = function(item) {
    self.hide = true;
  }
}]);