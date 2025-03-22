# Crypto Trading Bot

# Overview

This is a crypto trading bot that fetches live price data and simulates trades using Simple Moving Averages (SMA). It connects to a public API, processes price updates, and logs buy/sell trades based on SMA signals.

1. Clone the Repository

git clone https://github.com/yourusername/crypto-trading-bot.git
cd crypto-trading-bot

2. Install Dependencies

npm install

3. Run the Bot

node index.js

# How It Works

It fetches real-time crypto prices from a public API.

Calculates short-term (5 prices) and long-term (20 prices) SMAs.

Buys when short SMA crosses above long SMA.

Sells when short SMA crosses below long SMA.

Logs trades to logs/trades.log.

# Logs

View executed trades:

cat logs/trades.log

# Author

Your Name
GitHub: yourusername