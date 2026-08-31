# Rust/Python just do what was told

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/transformed-array/solutions/6124567/](https://leetcode.com/problems/transformed-array/solutions/6124567/)

---

# Intuition
Just straighforwardly implement what was asked using modulo operator `(i + nums[i]) % n`. In rust it is more verbose with those type conversions.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```python []
class Solution:
  def constructTransformedArray(self, nums: List[int]) -> List[int]:
    n = len(nums)
    res = [0] * n
    for i in range(n):
      res[i] = nums[(i + nums[i]) % n]
    return res
```
```rust []
impl Solution {
  pub fn construct_transformed_array(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut res = vec![0; n];

    for i in 0 .. n {
      res[i] = nums[((i as i32 + nums[i]) % (n as i32) + (n as i32)) as usize % n];
    }
    return res;
  }
}
```
