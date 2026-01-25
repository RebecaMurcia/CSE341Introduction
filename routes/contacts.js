const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
//GET requests
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

//POST request
router.post('/', contactsController.createContact);

//PUT request
router.put('/:id', contactsController.updateContact);

//DELETE route
router.delete('/:id', contactsController.deleteContact);

module.exports = router;