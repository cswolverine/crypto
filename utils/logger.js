const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../logs/trades.log");

function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logPath, logEntry);
}

module.exports = logMessage;
