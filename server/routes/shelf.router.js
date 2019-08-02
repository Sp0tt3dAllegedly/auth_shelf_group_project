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

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/delete:id', (req, res) => {
     console.log('/info DELETE route');
    console.log(req.body);
    console.log('user', req.user);
    let value = [req.user.user_id]
    const sqlText = 'DELETE FROM item WHERE id=$1 and user_id=$2;';
    pool.query(sqlText, [req.params.id], value)
    .then(() => { res.sendStatus(200); })
    .catch((err)=> {
        console.log('---ERROR ERROR CAN NOT COMPLETE DELETE ERROR ERROR---', err);
        res.sendStatus(500);
    });
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