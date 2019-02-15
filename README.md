# Country List

Test project for Photobooth Supply Co. by Keith Pickering

## About

This is a React app with a NodeJS Express backend, using React Router for separate pages. Countries are fetched from the REST Countries API. They can be clicked, which opens a second page that displays more detailed country info. Countries can also be searched and are sorted by the number of times they've been clicked in the current session.

This was my first real React app apart from CodePen tests, and my first time really getting into Node. It was a fun challenge, and I came out of it with more knowledge than I had before.

## Setup

You can run the project locally like so:

### Development mode

1. Run `npm install` from the root directory. Modules for both the Node environment and the React project will be installed.
2. Run `npm start` from the root directory to start the Node server.
3. Run `npm start` from the `country-list-client` directory to start the React dev server.
4. Navigate to <a href="http://localhost:3000/">http://localhost:3000</a> (it should launch automatically). The `country-list-client` directory will watch for changes.

**Note**: Both the Node server and the `create-react-app` server need to be running concurrently for the app to work properly in dev mode.

### Production mode

1. Run `npm install` from the root if you haven't already.
2. Set the Node server's `NODE-ENV` environment variable to `production`.
3. Run `npm run build` from the `country-list-client` directory to create a production build.
4. Run `npm start` from the root directory to start the Node server.
5. Navigate to <a href="http://localhost:5000/">http://localhost:5000</a> to view the final result.

## Improvements

There are a number of improvements that could be made with more time allotted:

* The app compiles App.scss into a general stylesheet used by both pages. I'd like to figure out the best practices for generating these styles on a per-component basis while still taking advantage of SASS (and my preferred CSS framework)
* The Loading indicator component uses styles that are included inline in `index.html`. This gives it quick access to the styles, but feels messy. This ties in with the previous point; I'd like to figure out a way to load CSS per-component.
* Some animations and/or transitions between states would make the experience more fluid. In particular, the country cards should ideally animate when they're filtered. There seem to be a variety of libraries that aim to solve this (<a href="https://github.com/joshwcomeau/react-flip-move">this one seems nice, if unmaintained</a>).
* There are a couple of places where I'm using a `setTimeout` to prevent a <abbr title="Flash of Unstyled Content">FOUC</abbr> immediately after the loading indicator disappears. This is messy because it's arbitrary. I want to figure out how to know for sure that all assets (CSS, images, etc) have been loaded before getting rid of the loader, instead of just waiting for the `fetch` to complete. I assume FOUCs don't occur, or are less likely to occur, when appropriate styles are loaded directly by components (I'm beginning to see the value of 'CSS in JS' after this project)
    - After doing a bit more research it seems the FOUC is a known and recent issue with the `create-react-app` library, and only exists in development builds. <a href="https://github.com/facebook/create-react-app/issues/6399">More info</a>
