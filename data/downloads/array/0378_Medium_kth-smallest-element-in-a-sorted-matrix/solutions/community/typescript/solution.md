# MinHeap JS Solution

**Author:** vsezol
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/5972238/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/5972238/)

---

# Approach
MinHeap

# Complexity
- Time complexity: $$O(K*log(n))$$

- Space complexity: $$O(n)$$

# Code
```typescript []
function kthSmallest(matrix: number[][], k: number): number {
    const minHeap = new MinPriorityQueue({priority: ([x, y]) => matrix[y][x]});
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        minHeap.enqueue([0, i]);
    }

    let count = k;

    while (count > 0) {
        const [x, y] = minHeap.dequeue().element;
        count--;
        if (count === 0) {
            return matrix[y][x];
        }

        if (x + 1 < n) {
            minHeap.enqueue([x + 1, y]);
        }
    }

    return 0;
};
```