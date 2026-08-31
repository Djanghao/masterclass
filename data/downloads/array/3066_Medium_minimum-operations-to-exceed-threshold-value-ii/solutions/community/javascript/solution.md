# MinPriorityQueue

**Author:** eforce
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4812192/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4812192/)

---


Where you can find it: https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages

# Complexity
- Time complexity:
$$O(n log n)$$

- Space complexity:
$$O(n)$$

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let result = 0;
    const numbersQueue = new MinPriorityQueue();

    for (let i = 0; i < nums.length; ++i) {
        numbersQueue.enqueue(nums[i]);
    }

    let x, y;
    while (numbersQueue.size() > 1) {
        x = numbersQueue.dequeue().element;
        if (x >= k) break;
        y = numbersQueue.dequeue().element;
        ++result;
        numbersQueue.enqueue(Math.min(x, y) * 2 + Math.max(x, y));
    }

    return result;
};
```