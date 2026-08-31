# Simple Solution | HashSet & Bruteforce

**Author:** ilyastuit
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5025364/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5025364/)

---

# Complexity
- Time complexity: $$O(n ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution:
  def sumCounts(self, nums: List[int]) -> int:
    sum_ = 0
    n = len(nums)
    set_ = set()
    for i in range(n):
      for j in range(i, n):
        set_.add(nums[j])
        sum_ += len(set_) ** 2
      set_.clear()
    return sum_
```
```rust []
use std::collections::HashSet;

impl Solution {
  pub fn sum_counts(nums: Vec<i32>) -> i32 {
    let mut count = HashSet::new();
    let mut sum : i32 = 0;
    for i in 0..nums.len() {
      for j in i..nums.len() {
        count.insert(nums[j]);
        sum += count.len().pow(2) as i32;
      }
      count.clear();
    }
    sum
  }
}
```

