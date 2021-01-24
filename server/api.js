const express = require('express');
// Invoke the .Router() method to create an instance of an Express router
const apiRouter = express.Router();

// Import 'minions.js' to be used for requests with '/minions' path segments
const minionsRouter = require('./minions')

// Import 'ideas.js' to be used for requests with '/ideas' path segments
const ideasRouter = require('./ideas')

// Import 'meetings.js' to be used for requests with '/meetings' path segments
const meetingsRouter = require('./meetings');

// Mount the minionsRouter to handle all requests starting with '/minions'
apiRouter.use('/minions', minionsRouter);

// Mount the ideasRouter to handle all requests starting with '/ideas'
apiRouter.use('/ideas', ideasRouter);

// Mount the meetingsRouter to handle all requests starting with '/meetings'
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
