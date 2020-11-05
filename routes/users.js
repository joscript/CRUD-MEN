const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('OKINAYO');
});

router.get('/:id', (req, res, next) => {
    res.send(`OKINAM ${req.params.id}`);
});

module.exports = router;