# [Javascript] Clean JS Solution with Priority Queues + Map

**Author:** js11
**Votes:** 8
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/1880978/](https://leetcode.com/problems/stock-price-fluctuation/solutions/1880978/)

---

```
const StockPrice = function () {
	this.minHeap = new MinPriorityQueue({
		compare: (a, b) => a.price > b.price,
	});
	this.maxHeap = new MaxPriorityQueue({
		compare: (a, b) => a.price < b.price,
	});
	this.prices = new Map();
	this.currentPrice = {};
};

StockPrice.prototype.update = function (timestamp, price) {
	this.prices.set(timestamp, price);
	this.minHeap.enqueue({ timestamp, price });
	this.maxHeap.enqueue({ timestamp, price });
	if (
		!this.currentPrice.timestamp ||
		this.currentPrice.timestamp <= timestamp
	) {
		this.currentPrice = { timestamp, price };
	}
};

StockPrice.prototype.current = function () {
	return this.currentPrice.price;
};

StockPrice.prototype.maximum = function () {
	let front = this.maxHeap.front();

	while (this.prices.get(front.timestamp) != front.price) {
		this.maxHeap.dequeue();
		front = this.maxHeap.front();
	}

	return front.price;
};

StockPrice.prototype.minimum = function () {
	let front = this.minHeap.front();

	while (this.prices.get(front.timestamp) != front.price) {
		this.minHeap.dequeue();
		front = this.minHeap.front();
	}

	return front.price;
};
```
Note that MinPriorityQueue is already included in Leetcode's js environment:
https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-