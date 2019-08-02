const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */

router.get('/info', rejectUnauthenticated, (req, res) => {
    console.log('/info GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user); 

    let queryText = `SELECT * FROM "item" WHERE "user_id" = 1;`;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }) 
     
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});



/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const newList = req.body;
    const queryText = `INSERT INTO shelf("description", "image_url")
    VALUES ($1, $2);`;
    const queryValues = []
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing POST shelf query', err);
      res.sendStatus(500);
    });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;