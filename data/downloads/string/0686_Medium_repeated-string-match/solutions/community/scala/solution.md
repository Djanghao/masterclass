# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/3688041/](https://leetcode.com/problems/repeated-string-match/solutions/3688041/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def repeatedStringMatch(a: String, b: String): Int = {
      val tmp = math.ceil(b.length.toDouble / a.length.toDouble).toInt
      if ((a * tmp).contains(b)) tmp
      else if ((a * (tmp + 1)).contains(b)) tmp + 1
      else -1
    }
}
```