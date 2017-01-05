# express-filters-builtin-directives

This is the source code to my demo presentation about Expressions, Filters, and Built-In directives. It contains a very simple component. It is served out of a tiny Express application custom built for the demo. Angular 1.6.0 is loded from the CDN.

Client side source is located in `client/`. Server-side source is located in `server/.

## Setup

+ `npm install -g nodemon` (Only if you do not have nodemon installed already)

+ `npm install -g gulp` (Only if you do not have Gulp installed already)

+ `npm install`

## Running

To run the demo, you have a couple options:

+ `npm start`: This will start the express server. Then you can go to [http://localhost:3000](http://localhost:3000) to see the app.

+ `npm run dev`: Same as the option above, except it runs `server/server.js` using `nodemon` so it will continuously reload that files as it sees changes.

## Linting

This project uses ESLint [http://eslint.org/](http://eslint.org/) for linting the javascript. The setup for eslint is in `.eslintrc`. `.babelrc` is also used since eslint uses Babel to lint the code. NOTE: Babel is *not* used to transpile, so the code you write is directly executed Node and the client browser. To run the linter, type

`gulp`

This will run the lint tasks once, across all JS source files in `server/` and `client/`. If you want Gulp to continuously monitor the sources, uncomment the last line of its config file `gulpfile.js`.

Have fun!

