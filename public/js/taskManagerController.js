taskManager.controller('TaskManagerController', [function() {

  var self = this;

  self.taskList = [];

  self.addTask = function() {
    if(self.taskText !== '') {
      var task = {name: self.taskText}
      self.taskList.push(task);
      self.taskText = '';
    };
  };

  self.completeTask = function(item) {
    item.hide = true;
  };

  self.updateTask = function() {
  };
}]);