# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/3763177/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/3763177/)

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
/**
 * The rand7() API is already defined in the parent class SolBase.
 * def rand7(): Int = {}
 * @return a random integer in the range 1 to 7
 */
object Solution extends SolBase {
      def rand10(): Int = {
        var row, col, idx = 0
        do {
          row = rand7()
          col = rand7()
          idx = col + (row - 1) * 7
        } while (idx > 40)
        1 + (idx - 1) % 10
      }
}
```