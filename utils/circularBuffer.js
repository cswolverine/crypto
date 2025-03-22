class CircularBuffer {
    constructor(size) {
      this.size = size;
      this.buffer = [];
    }
  
    add(value) {
      if (this.buffer.length >= this.size) {
        this.buffer.shift(); // Remove oldest element
      }
      this.buffer.push(value);
    }
  
    getAverage() {
      if (this.buffer.length === 0) return 0;
      const sum = this.buffer.reduce((acc, val) => acc + val, 0);
      return sum / this.buffer.length;
    }
  
    getSize() {
      return this.buffer.length;
    }
  }
  
  module.exports = CircularBuffer;
  