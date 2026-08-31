# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4261548/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4261548/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def divideString(s: String, k: Int, fill: Char): Array[String] = {
        val groups = s.grouped(k).toArray
        groups.dropRight(1) :+ groups.lastOption.map(_.padTo(k, fill)).getOrElse("")
    }
}
```