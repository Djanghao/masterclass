# Range + filter + max

**Author:** cuciorvacrafter
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/5180321/](https://leetcode.com/problems/h-index-ii/solutions/5180321/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def hIndex(citations: Array[Int]) = {
    val x = citations.max
    (0 to x)
      .filter(el => el == math.min(citations.count(_ >= el), el))
      .max
  }
}
```