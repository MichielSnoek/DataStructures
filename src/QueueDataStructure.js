class QueueDataStructure {
  constructor(capacity) {
    this.lastPosition = 0;
    this.list = [];
    this.capacity = capacity;
  }
  display() {
    return this.list;
  }
  enqueue(item) {
    if (this.isFull() === true) {
      return -1;
    } else {
      this.lastPosition += 1;
      this.list.push(item);
      return this.list;
    }
  }
  dequeue() {
    if (this.isEmpty() === true) {
      return -1;
    } else {
      this.lastPosition -= 1;
      this.list.shift();
      return this.list;
    }
  }
  isFull() {
    return this.lastPosition === this.capacity;
  }
  isEmpty() {
    return this.lastPosition === 0;
  }
}
