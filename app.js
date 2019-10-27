const express = require('express');
const logger = require('./middleware/logger');
const securityHandler = require('./middleware/security');
const router = require('./middleware/router');
const notFound = require('./actions/notFound');
const app = express();

app.use(securityHandler)
app.use(logger);
app.use(router);

app.use('/api', router)
app.use(notFound);
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
