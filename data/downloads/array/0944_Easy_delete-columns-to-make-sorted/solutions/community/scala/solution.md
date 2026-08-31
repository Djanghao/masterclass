# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/3703054/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/3703054/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m * log(m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minDeletionSize(strs: Array[String]): Int = {
      (0 until strs.head.length).count{i =>
        val column = strs.map(_.charAt(i))
        !column.sorted.sameElements(column)
      }
    }
}
```