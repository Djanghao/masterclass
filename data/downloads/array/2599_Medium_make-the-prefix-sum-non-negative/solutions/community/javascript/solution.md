# [Javascript] Min Heap || O(n log(n)) Time and O(n) Space

**Author:** umopepisdn
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3330166/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3330166/)

---

To simulate Min Heap in Javascript, use the `MinPriorityQueue` class from the `datastructures-js/priority-queue` library that is available in the LeetCode runtime: https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
```
var makePrefSumNonNegative = function(nums) {
    let count = 0, prefixSum = 0;
    let pq = new MinPriorityQueue();
    for (let x of nums) {
        prefixSum += x;
        if (x < 0) {
            pq.enqueue(x, x);
            if (prefixSum < 0) {
                prefixSum -= pq.dequeue().element;
                count++;
            }
        }
    }
    return count;
};
```