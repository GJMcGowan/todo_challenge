describe('List', function() {
  beforeEach(function() {
    list = new List();
  });

  describe('Basic Functions', function() {
    it('has nothing listed when initialised', function() {
      // hacky way to check for empty object
      expect(Object.keys(list.items).length).toBe(0);
    });

    it('can write an item to the list and read it back', function() {
      list.create('Feed goldfish');
      expect(list.read()).toEqual({'Feed goldfish': "Incomplete"});
    });

    it('the list can have multiple entries', function() {
      list.create('Feed goldfish');
      list.create('Post birthday card');
      expect(list.read()).toEqual({'Feed goldfish': "Incomplete", 'Post birthday card': "Incomplete"});
    });

    it('items on the list can be updated', function() {
      list.create('Fewd golfeesh');
      list.update('Fewd golfeesh', 'Feed goldfish');
      expect(list.read()).toEqual({'Feed goldfish': 'Incomplete'});
    });

    it('items on the list can be completed', function() {
      list.create('Feed goldfish');
      list.complete('Feed goldfish');
      expect(list.read()).toEqual({'Feed goldfish': 'Complete'});
    });

    it('items on the list can be deleted', function() {
      list.create('Feed goldfish');
      list.remove('Feed goldfish');
      expect(Object.keys(list.items).length).toBe(0);
    });

    it('list can report its length', function() {
      list.create('Feed goldfish');
      expect(list.totalLength()).toEqual(1);
    });

  });
});