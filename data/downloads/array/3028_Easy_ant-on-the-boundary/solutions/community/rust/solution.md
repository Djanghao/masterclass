# Rust/Python linear solution with explanation.

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4674097/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4674097/)

---

# Intuition
At each step calculate position where the ant is located and if position is 0, increase the result counter.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def returnToBoundaryCount(self, nums: List[int]) -> int:
    res, cnt = 0, 0
    for v in nums:
      res += v
      if res == 0:
        cnt += 1
    
    return cnt
```
```Rust []
impl Solution {
  pub fn return_to_boundary_count(nums: Vec<i32>) -> i32 {
    let (mut res, mut cnt) = (0, 0);
    for v in nums {
      res += v;
      if res == 0 {
        cnt += 1;
      }
    }
    return cnt;
  }
}
```

