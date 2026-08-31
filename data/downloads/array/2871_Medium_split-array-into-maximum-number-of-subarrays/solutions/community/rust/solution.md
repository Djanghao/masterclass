# Rust/Python linear solution with detail explanation why zero

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4131396/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4131396/)

---

# Intuition

First lets answer a simpler qustion. What is the minimum number we can obtain? To answer it you need to understand what the `AND` operation does to a number: it can only decrease it. 

So the minimum number is `AND` of all the numbers. Now lets assume that this minimum is `v`. If the value is positive then the only possible way to achieve is to take the whole array.

If the value is zero, it might be possible to divide array into more parts and still get zero (as addition of multiple zeros is zero). So all we need is to greedily take elements until the current_and of them is zero. When you get zero you increase the result and start anew.

At the end you need to check if it is zero to potentially increment one more time

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn max_subarrays(nums: Vec<i32>) -> i32 {
    let (mut res, mut curr) = (0, nums[0]);
    for i in 1 .. nums.len() {
      if curr == 0 {
        res += 1;
        curr = nums[i];
      } else {
        curr &= nums[i];
      }
    }

    if curr == 0 {
      res += 1;
    }
    return 1.max(res);
  }
}
```
```python []
class Solution:
  def maxSubarrays(self, nums: List[int]) -> int:
    curr, res = nums[0], 0
    for v in nums[1:]:
      if curr == 0:
        res += 1
        curr = v
      else:
        curr &= v
  
    return max(1, res + (1 if curr == 0 else 0))
```
