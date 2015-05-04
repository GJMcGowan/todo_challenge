taskManager.controller('TaskManagerController', [function() {

  var self = this;

  self.taskList = [];
  self.taskNumber;

  self.addTask = function() {
    if(self.taskText !== '') {
      self.taskList.push({name: self.taskText, complete: false, updateText: '', hide: false});
      self.taskText = '';
    };
    self.updateNumber();
  };

  self.completeTask = function(item) {
    item.complete = true;
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

  self.activeTasks = function() {
    self.taskList.forEach(function(item) {
      for(i in item) {
        if(i === 'complete' && item[i] === false) {
          item.hide = false;
        } else if(i === 'complete' && item[i] === true) {
          item.hide = true;
        };
      };
    });
  };

  self.completeTasks = function() {
    self.taskList.forEach(function(item) {
      for(i in item) {
        if(i === 'complete' && item[i] === true) {
          item.hide = false;
        } else if(i === 'complete' && item[i] === false) {
          item.hide = true;
        };
      };
    });
  };
}]);