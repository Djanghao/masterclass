# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/3646477/](https://leetcode.com/problems/equal-rational-numbers/solutions/3646477/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def isRationalEqual(s: String, t: String): Boolean = 
        getNumber(s) == getNumber(t)

      def getNumber(str: String): Double = {
        val i = str.indexOf('(')
        if (i > 0) {
          val rep = str.substring(i + 1, str.length() - 1)
          (str.substring(0, i) + (rep * (20 / rep.length)) + rep.substring(0, 20 % rep.length)).toDouble
        } else str.toDouble
      }
}
```