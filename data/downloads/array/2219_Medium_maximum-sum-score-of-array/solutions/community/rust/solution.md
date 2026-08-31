# Rust/Python linear time constant space

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/3576912/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/3576912/)

---

# Intuition
All we need is to have prefix sum and suffix sum.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn maximum_sum_score(nums: Vec<i32>) -> i64 {
    let (mut s1, mut s2, mut res) = (nums.iter().map(|&x| x as i64).sum(), 0, i64::MIN);
    for v in nums {
      s2 += v as i64;
      res = res.max(s2.max(s1));
      s1 -= v as i64;
    }
    return res;
  }
}
```
```python []
class Solution:
  def maximumSumScore(self, nums: List[int]) -> int:
    s1, s2, res = sum(nums), 0, -float('inf')
    for v in nums:
      s2 += v
      res = max(res, max(s1, s2))
      s1 -= v
    
    return res
```
