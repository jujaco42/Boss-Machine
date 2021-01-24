
const express = require('express');
const meetingsRouter = express.Router();

module.exports = meetingsRouter;

const {
    getAllFromDatabase,
    createMeeting,
    addToDatabase,
    deleteAllFromDatabase

} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    // let deleted = deleteAllFromDatabase('meetings');
    // if (deleted) {
    //     res.status(204);
    // } else {
    //     res.status(500);
    // }
    // res.send();
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});


