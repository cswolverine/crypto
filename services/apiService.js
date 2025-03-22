const axios = require("axios");
const { API_URL } = require("../config/config");

async function fetchCryptoPrice() {
  try {
    const response = await axios.get(API_URL);
    return response.data.bitcoin.usd; // Adjust for other currencies
  } catch (error) {
    console.error("Error fetching price:", error.message);
    return null;
  }
}

module.exports = fetchCryptoPrice;
