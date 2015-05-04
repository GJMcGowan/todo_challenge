taskManager.controller('TaskManagerController', [function() {

  var self = this;

  self.taskList = [];

  self.addTask = function() {
    if(self.taskText !== '') {
      self.taskList.push({name: self.taskText, hide: false, updateText: ''});
      self.taskText = '';
    };
  };

  self.completeTask = function(item) {
    item.hide = true;
  };

  self.updateTask = function(updateText, item) {
    if(updateText !== '') {
      item.name = updateText;
      item.updateText = '';
    };
  };
}]);