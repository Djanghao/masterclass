# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/5217801/](https://leetcode.com/problems/optimal-partition-of-string/solutions/5217801/)

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
object Solution {
  def partitionString(s: String): Int = s.foldLeft((Set[Char](), 0)) {
    case ((seen, count), c) if seen.contains(c) => (Set(c), count + 1)
    case ((seen, count), c) => (seen + c, count)
  }._2 + 1
}

```