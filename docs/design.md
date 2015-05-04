SPA?

Try doing it in Angular, but switch to jquery if that's too difficult.

Don't have to use a database fortunately, can use a data structure (arrays/hash objects presumably)

Remember that the front-end is the most important part - the basic backend is relatively simple.

Need to:
  - Store tasks
  - Add tasks
  - Change tasks
  - Mark tasks as complete
    - Archive, or delete? - Looks like archive.

Optional:
  - Filter by "All", "Active", "Complete"
  - See total tasks
  - Delete all completed tasks

Very optional:
  - logins and databases!

Need unit and feature tests. Try to unify them, so that we don't have a huge number of testing frameworks.

Use npm and bower sparingly.

Consider making two associative arrays/arrays and having them interact - useful for storing "name" and "complete"

Remove unused modules (e.g. jade)

Make testing happen outside my main browser.