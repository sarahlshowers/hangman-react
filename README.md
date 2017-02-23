# The Hangman

## Installation

1. Clone (or fork if you would like to contribute) the repo.
2. Then `npm install` to get all dependencies.
3. Run with `npm start`
4. Type in `localhost:3000` to play the game on your browser (preferably Chrome)

Specs

- [x] `GET` all from the api: http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words
- [x] User should see total number of letters in the secret word as represented by underscores.
- [x] User wins the game after guessing all correct letters without meeting the losing condition.
- [x] User loses the game after guessing incorrectly 6 times.
- [x] User can see the correct guesses while not seeing the remainder of the secret word.
- [x] User can see a list of incorrect guesses is displayed.

Extensions
- [ ] User can configure the difficulty level for the game
- [ ] User can see a hangman diagram
- [ ] User can guess a full word
- [ ] User can play in Multiplayer mode


## Project Summary

**Process**
    The app development cycle lasted 29 hours. My decision to go into a React driven stack was to continue my growth and validation of knowledge in this framework (which is still beginner). The project was challenging, but I never felt out of answers or ideas to troubleshoot. There were points when I was stuck, and I definitely felt that in using React, I may have taken on more than I should have. I do want to continue to refactor the code, implement some bug fixes with the game logic, add user authentication for multiplayer, and build support for developing multiplayer capability. I chose to use express as my web server, and after further review, I would like to store users in a document based db (Mongo) preferably without an ORM. I regret that I did not test the code the way that I wanted, and if I could've done something different, it would have been to give myself more time to write adequate testing for the app. I would also, after a refactor of the UI, to publish through Heroku.  

**Stack**:
- Backend: Express/Node.js, Webpack
- Frontend: ReactJS
- Testing: Mocha/Chai/Enzyme

**File Structure**:
- bin
    + www : sets up server & HTTP details
- client
    + Game.jsx: Game logic & state
    + App.jsx: API retrieval(through local path) of words and app render.
    + routes.jsx: May come into play for multiplayer capability(react-router).
    + images: photos for game progress.
    + styles.css: general style for app.
    + favicon.ico
- styles
    + main.scss: attempted using sass for styling but was unable to configure in a timely manner (last minute decision)
- test
    + app.spec.js: attempted testing of components using enzyme
- .babelrc: babel presets for es6 and react
- .gitignore: files not needed in github repository
- app.js: express set up and external API retrieval
- eslintrc.js: to test for clean linting
- LICENSE: MIT
- package.json: project setup, scripts & modules
- README.md: You're reading this, which is awesome and much appreciated.

**Branches**:
***difficulty-levels***

I do want to devlop this further, which should not take me too much longer, since the API is made up of words that increase the difficulty exponentially, and it would be good to have difficulty selection to make the game playable for all levels.
