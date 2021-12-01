const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.x7zvf.mongodb.net/employeeDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');