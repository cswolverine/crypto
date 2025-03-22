# Crypto Trading Bot

# Overview

This is a crypto trading bot that fetches live price data and simulates trades using Simple Moving Averages (SMA). It connects to a public API, processes price updates, and logs buy/sell trades based on SMA signals.
Currently, the app is fetching prices for Bitcoin (BTC/USD)

1. Clone the Repository

   git clone https://github.com/cswolverine/crypto.git

   cd crypto

2. Install Dependencies

   npm install

3. Run the Bot

  node index.js

# Note:

  Wait at least 20 minutes after starting the bot to see real trade signals, as it requires enough data to calculate SMAs.

# How It Works

  It fetches real-time crypto prices from a public API.

  Calculates short-term (5 prices) and long-term (20 prices) SMAs.

  Buys when short SMA crosses above long SMA.

  Sells when short SMA crosses below long SMA.

Logs trades to logs/trades.log.

# Logs

View executed trades:

cat logs/trades.log
