const fetchCryptoPrice = require("./services/apiService");
const calculateSMA = require("./services/smaService");
const executeTrade = require("./services/tradeService");
const CircularBuffer = require("./utils/circularBuffer");
const { POLL_INTERVAL } = require("./config/config");

const shortSMA = new CircularBuffer(5);
const longSMA = new CircularBuffer(20);
let previousSMA = { shortTerm: 0, longTerm: 0 };

async function runTradingBot() {
    const price = await fetchCryptoPrice();
    if (!price) return;
  
    shortSMA.add(price);
    longSMA.add(price);
  
    console.log(
      `Price: $${price}, Short SMA: ${shortSMA.getAverage()}, Long SMA: ${longSMA.getAverage()}, Short SMA Size: ${shortSMA.getSize()}, Long SMA Size: ${longSMA.getSize()}`
    );
  
    // Only calculate SMA & trade when buffers have enough values
    if (shortSMA.getSize() < 5 || longSMA.getSize() < 20) {
      console.log("Waiting for enough data to start trading...");
      return;
    }
  
    const currentSMA = calculateSMA(shortSMA, longSMA);
    executeTrade(previousSMA, currentSMA, price);
    previousSMA = currentSMA;
  }
  

// Start polling
setInterval(runTradingBot, POLL_INTERVAL);
console.log("Crypto Trading Bot Started...");
