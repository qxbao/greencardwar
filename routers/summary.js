const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('summary')
})

module.exports = router;