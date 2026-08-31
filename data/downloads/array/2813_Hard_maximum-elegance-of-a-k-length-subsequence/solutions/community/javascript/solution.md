# JS solution

**Author:** aastha_b
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/5174114/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/5174114/)

---

![image.png](./images/0.png)

# Code
```
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
    items.sort((a, b) => b[0] - a[0]);
    let minHeap = new MinPriorityQueue();
    let catSet = new Set();
    let maxElegance = 0;
    let totalProfit = 0;

    for (let i = 0; i < items.length; i++) {
        if (i >= k) {
            if (catSet.has(items[i][1])) continue;
            if (minHeap.isEmpty()) break;
            totalProfit -= minHeap.dequeue().element;
        }

        if (catSet.has(items[i][1])) {
            minHeap.enqueue(items[i][0]);
        }
        catSet.add(items[i][1]);
        totalProfit += items[i][0];

        if (i >= k - 1) {
            maxElegance = Math.max(maxElegance, totalProfit + Math.pow(catSet.size, 2));
        }
    }

    return maxElegance;
};
```