# Priority queue solution

**Author:** tesudesu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4197297/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4197297/)

---

Might be overly complicated...

But the idea is to find the max left and right profits for each index j.

To find max left, iterate the array from beginning (index 1) to end. Dequeue all ineligible values (greater or equal to current value), and store them in a temp array. If the queue is still non-empty, the profit at the front of the queue is the max left for this j. Add all dequeued elements in the temp array back to the queue. Add the current [profits[i], prices[i]] pair to the queue too.

Same procedure for finding max right except you're iterating from the end (second last index), and the ineligible values are those less than or equal to the current value.

# Code
```
/**
 * @param {number[]} prices
 * @param {number[]} profits
 * @return {number}
 */
var maxProfit = function(prices, profits) {
    let bestLeft = Array(prices.length).fill(-Infinity);
    let bestRight = Array(prices.length).fill(-Infinity);

    let maxQueue = new MaxPriorityQueue({ priority: a => a[0] });
    maxQueue.enqueue([profits[0], prices[0]]);

    for (let i = 1; i < prices.length - 1; i++) {
        let temp = [];
        while (maxQueue.size() > 0 && maxQueue.front().element[1] >= prices[i]) {
            const elem = maxQueue.dequeue().element;
            temp.push(elem);
        }
        if (maxQueue.size() > 0) {
            bestLeft[i] = maxQueue.front().element[0];
        }
        for (let j = 0; j < temp.length; j++) {
            maxQueue.enqueue(temp[j]);
        }
        maxQueue.enqueue([profits[i], prices[i]]);
    }

    maxQueue = new MaxPriorityQueue({ priority: a => a[0] });
    maxQueue.enqueue([profits[profits.length - 1], prices[prices.length - 1]]);

    for (let i = prices.length - 2; i >= 0; i--) {
        let temp = [];
        while (maxQueue.size() > 0 && maxQueue.front().element[1] <= prices[i]) {
            const elem = maxQueue.dequeue().element;
            temp.push(elem);
        }
        if (maxQueue.size() > 0) {
            bestRight[i] = maxQueue.front().element[0];
        }
        for (let j = 0; j < temp.length; j++) {
            maxQueue.enqueue(temp[j]);
        }
        maxQueue.enqueue([profits[i], prices[i]]);
    }

    let maxProfit = -1;

    for (let i = 1; i < profits.length - 1; i++) {
        maxProfit = Math.max(maxProfit, profits[i] + bestLeft[i] + bestRight[i]);
    }

    return maxProfit;
};
```