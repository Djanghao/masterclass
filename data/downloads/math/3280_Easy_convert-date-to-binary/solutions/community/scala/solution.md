# Simple scala solution

**Author:** anjanchakraborty
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/6019340/](https://leetcode.com/problems/convert-date-to-binary/solutions/6019340/)

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
```scala []
object Solution {
    def convertDateToBinary(date: String): String = {
        date.split("-").map(_.toInt.toBinaryString).mkString("-")
    }
}
```