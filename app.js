const express = require('express');
const logger = require('./middleware/logger');
const securityHandler = require('./middleware/security');
const responseHandler = require('./middleware/response-handler');
const notFound = require('./actions/notFound');
const app = express();

app.use(securityHandler)
app.use(logger);
app.use(responseHandler);
app.use(notFound);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
