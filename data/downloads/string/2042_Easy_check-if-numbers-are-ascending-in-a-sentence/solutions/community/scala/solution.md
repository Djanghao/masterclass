# Scala simple Solution

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5808902/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5808902/)

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
    def areNumbersAscending(s: String): Boolean = {
    val numbers = List("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    s.split(" ").filter(str => numbers.contains(str.head.toString)).map(_.toInt).sliding(2, 1).forall(arr => arr(0) < arr(1))
  }
}
```