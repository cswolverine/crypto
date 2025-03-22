const fs = require("fs");
const path = require("path");
const { TRADE_QUANTITY } = require("../config/config");

const tradeLogPath = path.join(__dirname, "../logs/trades.log");

function logTrade(type, price) {
  const timestamp = new Date().toISOString();
  const trade = `Timestamp: ${timestamp}, Type: ${type}, Price: ${price}, Quantity: ${TRADE_QUANTITY}\n`;

  fs.appendFileSync(tradeLogPath, trade);
  console.log("Trade executed:", trade);
}

function executeTrade(previousSMA, currentSMA, price) {
  if (previousSMA.shortTerm <= previousSMA.longTerm && currentSMA.shortTerm > currentSMA.longTerm) {
    logTrade("BUY", price);
  } else if (previousSMA.shortTerm >= previousSMA.longTerm && currentSMA.shortTerm < currentSMA.longTerm) {
    logTrade("SELL", price);
  }
}

module.exports = executeTrade;
