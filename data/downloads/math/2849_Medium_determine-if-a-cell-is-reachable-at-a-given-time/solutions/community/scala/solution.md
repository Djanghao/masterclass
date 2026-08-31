# [scala] fp + math

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4264185/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4264185/)

---

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {
  def isReachableAtTime(sx: Int, sy: Int, fx: Int, fy: Int, t: Int): Boolean =
    !(sx == fx && sy == fy && t == 1) && 
      math.max(math.abs(fx - sx), math.abs(fy - sy)) <= t
}
```