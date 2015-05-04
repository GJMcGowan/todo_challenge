var List = function() {
  this.items = {};
};

List.prototype.read = function() {
  return this.items;
};

List.prototype.create = function(task) {
  this.items[task] = "Incomplete";
};

List.prototype.update = function(item, update_text) {
  this.remove(item);
  this.create(update_text);
};

List.prototype.complete = function(item) {
  this.items[item] = "Complete"
};

List.prototype.remove = function(item) {
  delete this.items[item];
};

List.prototype.totalLength = function(item) {
  return Object.keys(this.items).length
};