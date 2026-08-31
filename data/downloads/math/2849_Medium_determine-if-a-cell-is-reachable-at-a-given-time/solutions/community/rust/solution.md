# Rust/Python O(1) with detailed explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4024850/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4024850/)

---

# Intuition
You can change coordinates by moving starting position to 0, 0, then our finish will be at `fx - sx`, `fy - sy`. We also see that signs does not make any difference so we can take abs. Let our finish be now `x, y`.


What is the minimum number of moves you need to use to reach some position? It is easy to see that using diagoal values you need `max(y, x)`. Notice that you can almost always waste time by just moving slightly inefficient: moving back and force will give you +2 time and moving in triangle (down -> right-up) gives you +1 time). So any time above that minimum is possible.

The only situation where it is not possible if when your start and end are the same and you need to reach it in 1 step.

This gives us solution

# Complexity
- Time complexity: $O(1)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
    x, y = abs(sx - fx), abs(sy - fy)
    if x == 0 and y == 0:
      return t != 1
    
    return max(y, x) <= t
```
```Rust []
impl Solution {
  pub fn is_reachable_at_time(sx: i32, sy: i32, fx: i32, fy: i32, t: i32) -> bool {
    let x = (sx - fx).abs();
    let y = (sy - fy).abs();
    if x == 0 && y == 0 {
      return t != 1;
    }

    return y.max(x) <= t;
  }
}
```
