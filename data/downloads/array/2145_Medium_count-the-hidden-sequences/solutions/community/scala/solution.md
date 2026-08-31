# scala 2 lines solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/3359254/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/3359254/)

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
    def numberOfArrays(differences: Array[Int], lower: Int, upper: Int): Int = {
        val acc = differences.foldLeft(List(0L))((acc, cur) =>{(acc.head + cur) +: acc})
        Math.max(0, (upper - lower) - (acc.max - acc.min) + 1).toInt
    }
}
```