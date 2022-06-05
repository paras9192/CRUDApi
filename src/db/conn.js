const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/"+ process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(function() { console.log('connected'); })
    .catch(function(err) { console.log('connect error....') });

