# Rust/Python just check prev height

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6084646/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6084646/)

---

# Intuition
Just iterate over all indices and check the previous height.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```rust []
impl Solution {
  pub fn stable_mountains(height: Vec<i32>, threshold: i32) -> Vec<i32> {
    let mut res = Vec::new();
    for i in 1 .. height.len() {
      if height[i - 1] > threshold {
        res.push(i as i32);
      }
    }
    return res;
  }
}
```
```python []
class Solution:
  def stableMountains(self, height: List[int], threshold: int) -> List[int]:
    return [i for i in range(1, len(height)) if height[i - 1] > threshold]
```