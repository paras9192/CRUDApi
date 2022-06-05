const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(function() { console.log('connected'); })
    .catch(function(err) { console.log('connect error....') });

