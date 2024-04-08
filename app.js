const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const employeeRoutes = require('./routes/employee');
const supervisorRoutes = require('./routes/supervisor');

app.use('/admin',adminRoutes);
app.use('/employee',employeeRoutes);
app.use('/supervisor',supervisorRoutes);

app.listen(3000,()=>{
    console.log('Server is running at port 3000');
})