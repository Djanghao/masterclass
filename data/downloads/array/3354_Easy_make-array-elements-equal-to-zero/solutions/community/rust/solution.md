# Rust/Py linear solution with explanation.

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053300/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053300/)

---

# Intuition

What does it mean to do those operations? If you are at position 
`x`, sum of all values before it should be roughly equal to all values after x. If values are equal you can go in every direction. If difference is one or minus one you can go only in one direction.


You can do this efficiently by precalculating prefix sum in both directions and then check numbers from those arrays.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn count_valid_selections(nums: Vec<i32>) -> i32 {
    if nums.iter().sum::<i32>() == 0 {
      return (nums.len() * 2) as i32;
    }

    let n = nums.len();
    let mut cum_sum_l = vec![0; n + 1];
    let mut cum_sum_r = vec![0; n + 1];

    for i in 0..n {
      cum_sum_l[i + 1] = cum_sum_l[i] + nums[i];
    }

    for i in (0..n).rev() {
      cum_sum_r[i] = cum_sum_r[i + 1] + nums[i];
    }

    let mut res = 0;
    for i in 0..n {
      if nums[i] == 0 {
        if cum_sum_l[i] == cum_sum_r[i] {
          res += 2;
        } else if cum_sum_l[i] - cum_sum_r[i] == 1 {
          res += 1;
        } else if cum_sum_l[i] - cum_sum_r[i] == -1 {
          res += 1;
        }
      }
    }

    res
  }
}
```
```python []
class Solution:
  def countValidSelections(self, nums: List[int]) -> int:
    if sum(nums) == 0:
      return len(nums) * 2

    n = len(nums)
    cum_sum_l = [0] * (n + 1)
    for i in range(len(nums)):
      cum_sum_l[i + 1] = cum_sum_l[i] + nums[i]

    cum_sum_r = [0] * (n + 1)
    for i in range(len(nums) - 1, -1, -1):
      cum_sum_r[i] = cum_sum_r[i + 1] + nums[i]

    res = 0
    for i in range(len(nums)):
      if nums[i] == 0:
        if cum_sum_l[i] == cum_sum_r[i]:
          res += 2
        elif cum_sum_l[i] - cum_sum_r[i] == 1:
          res += 1
        elif cum_sum_l[i] - cum_sum_r[i] == -1:
          res += 1
    return res
```
