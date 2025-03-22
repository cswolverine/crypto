function calculateSMA(shortSMA, longSMA) {
    return {
      shortTerm: shortSMA.getAverage(),
      longTerm: longSMA.getAverage(),
    };
  }
  
  module.exports = calculateSMA;
  