# 100% runtime for scala

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/5249323/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/5249323/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is asking only if its possible to divide ot not
# Approach
<!-- Describe your approach to solving the problem. -->
to divide equally, character frequency should be divisible by length of words array
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(nl) where n is array length and l is each word length
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n) for maintaing map
# Code
```
object Solution {
  def makeEqual(words: Array[String]): Boolean = {
    val n = words.length
    val map = words.flatMap(_.toCharArray).groupMapReduce(k => k)(_ => 1)((sum, count) => sum + count)
    map.values.forall(_ % n == 0)
  }
}
```