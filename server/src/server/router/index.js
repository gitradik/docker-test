import 'babel-polyfill';
import express from 'express';
const router = express.Router();

router.post('/test', (req, res) => {
    if (req.body) {
        res.send( req.body );
    } else {
        next({ path: "account_not_foud" });
    }
});

module.exports = router;