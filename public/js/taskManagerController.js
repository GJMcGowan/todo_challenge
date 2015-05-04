taskManager.controller('TaskManagerController', [function() {

  var self = this;

  self.taskList = [];
  self.taskNumber;

  self.addTask = function() {
    if(self.taskText !== '') {
      self.taskList.push({name: self.taskText, hide: false, updateText: ''});
      self.taskText = '';
    };
    self.updateNumber();
  };

  self.completeTask = function(item) {
    item.hide = true;
    self.updateNumber();
  };

  self.updateTask = function(updateText, item) {
    if(updateText !== '') {
      item.name = updateText;
      item.updateText = '';
    };
    self.updateNumber();
  };

  self.updateNumber = function() {
    self.taskNumber = self.taskList.length;
  };
}]);