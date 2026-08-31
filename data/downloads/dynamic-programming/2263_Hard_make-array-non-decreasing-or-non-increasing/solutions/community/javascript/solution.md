# Simple MaxHeap | TC: O(NlogN)

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/solutions/5993361/](https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/solutions/5993361/)

---

```javascript []
const convertArray = (nums) => {
  const cost = (arr) => {
    let ans = 0;
    const maxHeap = new MaxPriorityQueue(); // Using LeetCode's built-in MaxPriorityQueue

    for (const num of arr) {
      if (maxHeap.size() > 0 && maxHeap.front().element > num) {
        ans += maxHeap.dequeue().element - num; // Get the maximum element
        maxHeap.enqueue(num); // Add the current number
      }
      maxHeap.enqueue(num); // Add the current number
    }

    return ans;
  };

  return Math.min(cost(nums), cost(nums.map(num => -num)));
};
```