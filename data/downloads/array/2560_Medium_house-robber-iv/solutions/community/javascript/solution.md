# [Javascript] Binary Search

**Author:** anna-hcj
**Votes:** 4
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3143652/](https://leetcode.com/problems/house-robber-iv/solutions/3143652/)

---

**Solution: Binary Search**

Binary search for minimum maximum `nums[i]`.
To check whether it is possible to take `k` non-adjacent houses with maximum score of `nums[i]`,
*   Greedily take `k` houses with `nums[i] <= max`.
*   When we find `nums[i] <= max`, take the house and skip to `nums[i + 2]` (It is optimal to take a house earlier than later).

`n = length of nums`, `m = max(nums[i])`
Time Complexity: `O(n log(m))`
Space Complexity: `O(1)`
```
var minCapability = function(nums, k) {
  let min = nums[0], max = nums[0];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  let low = min, high = max;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isEnough(mid)) high = mid;
    else low = mid + 1;
  }
  return low;
  
  function isEnough(max) { // greedily take k houses with nums[i] <= max
    let houses = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= max) {
        houses++;
        i++;
      }
      if (houses === k) return true;
    }
    return false;
  }
};
```