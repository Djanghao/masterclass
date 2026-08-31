# [Javascript] Sorting, Binary Search & Prefix Sum

**Author:** anna-hcj
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3341882/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3341882/)

---

**Solution: Sorting, Binary Search & Prefix Sum**

1. Sort nums in asc order.
2. Get the prefix sum from the left and right of nums.
3. For each query, binary search for the split point - the first element where `nums[i] >= query`
  From there, we can calculate the absolute difference of the two segments of nums.
  Segment one: `query * i - leftSum[i - 1]`
  Segment two: `rightSum[i] - query * (n - i)`

`n = length of nums`, `m = number of queries`
Time Complexity: `O(n log(n) + m log(n))`
Space Complexity: `O(n + m)`
```
var minOperations = function(nums, queries) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let left = [...nums], right = [...nums];
  for (let i = 1; i < n; i++) left[i] += left[i - 1];
  for (let i = n - 2; i >= 0; i--) right[i] += right[i + 1];
  let ans = [];
  for (let query of queries) {
    let splitIndex = getSplitIndex(query);
    let leftDiff = splitIndex > 0 ? query * splitIndex - left[splitIndex - 1] : 0;
    let rightDiff = splitIndex < n ? right[splitIndex] - query * (n - splitIndex) : 0;
    ans.push(leftDiff + rightDiff);
  }
  return ans;
  
  function getSplitIndex(query) {
    let low = 0, high = n - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] >= query) high = mid;
      else low = mid + 1;
    }
    return nums[low] >= query ? low : n;
  }
};
```