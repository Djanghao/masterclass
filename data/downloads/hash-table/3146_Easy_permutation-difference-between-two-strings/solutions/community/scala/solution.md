# Simple functional o(n log n) solution

**Author:** plGvpkMJLJ
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5160897/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5160897/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution:
  def findPermutationDifference(s: String, t: String): Int =
    val tMap = t.view.zipWithIndex.toMap
    s.iterator.zipWithIndex.foldLeft(0) { (acc, v) =>
      val (c, ind) = v
      math.abs(tMap(c) - ind) + acc
    }
```