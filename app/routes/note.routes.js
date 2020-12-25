module.exports = (app) => {
    const casos = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/covid', casos.create);

    // Retrieve all Notes
    app.get('/covid', casos.findAll);

    // Retrieve a single Note with noteId
    app.get('/covid/:noteId', casos.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', casos.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', casos.delete);
}