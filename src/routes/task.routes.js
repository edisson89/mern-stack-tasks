const express = require('express');
const router = express.Router();

router.get('/api/tasks', (req,res)=>{
    res.json({
        status: 'api trabajando',
        
    });
})

module.exports = router;