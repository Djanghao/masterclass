# Rust/Python sort and take one from each side

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355892/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355892/)

---

# Intuition

To find minimum maximum fast, sort the values and take from each side.

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def minimumAverage(self, nums: List[int]) -> float:
    nums.sort()
    res = float('inf')
    for i in range(len(nums) // 2):
      tmp = (nums[i] + nums[len(nums) - i - 1]) / 2.
      res = min(res, tmp)
    return res
        
```
```Rust []
impl Solution {
  pub fn minimum_average(mut nums: Vec<i32>) -> f64 {
    nums.sort_unstable();
    let mut res = i32::MAX;
    for i in 0 .. nums.len() / 2 {
      res = res.min(nums[i] + nums[nums.len() - 1 - i]);
    }
    return (res as f64) / 2.;
  }
}
```