require("dotenv").config();

module.exports = {
  API_URL: process.env.API_URL,
  POLL_INTERVAL: parseInt(process.env.POLL_INTERVAL, 10) || 60000,
  TRADE_QUANTITY: parseFloat(process.env.TRADE_QUANTITY) || 0.1,
};
