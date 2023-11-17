// query-interface.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

let logs = [];

app.use(bodyParser.json());

// Query Interface
app.get('/search', (req, res) => {
  const { level, message, resourceId, timestamp, traceId, spanId, commit, parentResourceId } = req.query;

  let filteredLogs = logs;

  if (level) {
    filteredLogs = filteredLogs.filter(log => log.level === level);
  }

  if (message) {
    filteredLogs = filteredLogs.filter(log => log.message.includes(message));
  }

  // Add more filters...

  res.json(filteredLogs);
});

app.listen(PORT, () => {
  console.log(`Query Interface is running on port ${PORT}`);
});
