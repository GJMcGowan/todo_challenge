## To-Do Challenge

My task was to build a Todo list as a mini front-end application.

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

To setup, clone this repo and run `bower install` and `npm install` to install the dependencies. Run `npm start` to see the site (go to /SpecRunner to see the Jasmine tests), and `karma start test/karma.conf.js` to see the Angular tests.

###Features:
  * Entering and updating tasks
  * Completing tasks
  * Hiding tasks that are hidden, and being able to change between completed tasks with a tab
  
###Technologies:
  * Node (EJS for server)
  * Jasmine for maing testing, and Karma for test automation.
  * Angular and JS for the backend and frontend of the app.
  
###Improvements:

This is obviously quite unfinished and needs to be tidied up with some HTML/CSS styling. I am mostly happy with the features I implemented, but if I was going to extend the app I would try to implement the following:
  * Deleting tasks.
  * Databases (likely MongoDB)
  * Logins and sessions (so there can be more than one user)
