# Python/Rust 5 lines with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3821300/](https://leetcode.com/problems/relocate-marbles/solutions/3821300/)

---

# Intuition
We only need the positions of the marbles and do not care how many of them will it be at each position. So we can convert everything into a set.

Then at each step we remove the value from a set based on `move_from[i]` and add the value corresponding to `move_to[i]`.

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(n)$

# Code

```Rust []
use std::collections::HashSet;

impl Solution {
  pub fn relocate_marbles(nums: Vec<i32>, move_from: Vec<i32>, move_to: Vec<i32>) -> Vec<i32> {
    let mut data: HashSet<i32> = nums.into_iter().collect();
    for i in 0 .. move_from.len() {
      data.remove(&move_from[i]);
      data.insert(move_to[i]);
    }

    let mut data: Vec<_> = data.into_iter().collect();
    data.sort_unstable();
    return data;
  }
}
```
```python []
class Solution:
  def relocateMarbles(self, nums: List[int], move_from: List[int], move_to: List[int]) -> List[int]:
    data = set(nums)
    for v1, v2 in zip(move_from, move_to):
      data.remove(v1)
      data.add(v2)
    
    return list(sorted(data))
```