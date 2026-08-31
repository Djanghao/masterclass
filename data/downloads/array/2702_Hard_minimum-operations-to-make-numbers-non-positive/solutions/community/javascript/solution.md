# JavaScript Binary Search

**Author:** ektegjetost
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3560311/](https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3560311/)

---

Notes:
- every element will get reduced by at least ```y``` each round
- some elements will get reduced by an additional ```x - y```. Ideally that's the largest elements, but it's not super simple to determine how many times for each of them. A heap comes to mind, but the numbers are very large and you don't want to simulate this.


Binary search for the minimum number of operations.
- we'll call ```n``` the number of operations
- all elements will be reduced by at least ```y * n```
- you also have ```n``` of ```x - y``` operations which can be additionally spent on any elements that require more than ```y * n``` to reduce to 0.

```javascript
var minOperations = function(nums, x, y) {
  let left = 1;
  let right = Math.ceil(Math.max(...nums) / y);
  let mid = right;
  
  const diff = x - y;
  
  while (left < right) {
    mid = left + right >> 1;
    
    let remain = mid;
    
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] > mid * y) remain -= Math.ceil((nums[i] - mid * y) / diff);
      if (remain < 0) break;
    }
    
    if (remain < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return right;
};
```