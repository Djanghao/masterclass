# Rust/Python linear solution with cumulative min from left to right and right to left

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4194451/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4194451/)

---

# Intuition
Instead of looking at all tripplets you can precalculate the minimum values from left to right and from right to left (basically commulative min).

Now you iterate over all values from 1 to n - 1. And check what is the min to the left and to the right of it. Which gives us a simple linear solution.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn minimum_sum(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let mut min_l = vec![nums[0]; n];
    let mut min_r = vec![nums[n - 1]; n];

    for i in 1 .. n {
      min_l[i] = min_l[i - 1].min(nums[i]);
    }
    for i in (0 .. n - 1).rev() {
      min_r[i] = min_r[i + 1].min(nums[i]);
    }

    let mut res = i32::MAX;
    for i in 1 .. n - 1 {
      if nums[i] > min_l[i - 1] && nums[i] > min_r[i + 1] {
        res = res.min(nums[i] + min_l[i - 1] + min_r[i + 1]);
      }
    }

    if res == i32::MAX {
      return -1
    }
    return res;
  }
}
```
```python []
class Solution:
  def minimumSum(self, nums: List[int]) -> int:
    min_l = [nums[0]] * len(nums)
    min_r = [nums[-1]] * len(nums)

    for i in range(1, len(nums)):
      min_l[i] = min(min_l[i - 1], nums[i])
    for i in range(len(nums) - 2, -1, -1):
      min_r[i] = min(min_r[i + 1], nums[i])

    res = float('inf')
    for i in range(1, len(nums) - 1):
      if nums[i] > min_l[i - 1] and nums[i] > min_r[i + 1]:
        res = min(res, nums[i] + min_l[i - 1] + min_r[i + 1])
    return -1 if res == float('inf') else res
```