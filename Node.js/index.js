const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        msg : 'Test Demo'
    });
});

module.exports = app.listen(5000,()=>{
    console.log('express server started');
});
