const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/',  (req, res) => {
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES($1,$2,$3,$4);`;
    pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments ])
    .then((result)=>{
        console.log("POST respoanse", result.rows)
    }).catch((err) =>{
        console.log("error in POST route", err)
    })

})

module.exports = router;