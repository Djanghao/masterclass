# [JavaScript] Easy to understand - binary search

**Author:** poppinlp
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/447988/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/447988/)

---

To find the smallest divisor, we could traversal from 1 to `max` to find the answer. But it will cost `n` times to search. Here we use binary search to make it `log(n)` times search.
The `max` could be `10e6` according to the range in the description or the max value in `nums`. Here's the codes bellow.

```js
const smallestDivisor = (nums, threshold) => {
  // Use max value in nums array as the max
  const max = Reflect.apply(Math.max, null, nums);
  if (nums.length === threshold) return max;
  let left = 1, right = max;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
      sum += Math.ceil(nums[i] / mid);
    }
    sum > threshold ? (left = mid + 1) : (right = mid);
  }
  return left;
};

const smallestDivisor = (nums, threshold) => {
  // Use 10e6 as the max
  let left = 1, right = 10e6;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
      sum += Math.ceil(nums[i] / mid);
    }
    sum > threshold ? (left = mid + 1) : (right = mid);
  }
  return left;
};
```

Time complexity: O(nlog(max))
Space complexity: O(1)