# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisor-game/solutions/4361480/](https://leetcode.com/problems/divisor-game/solutions/4361480/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def divisorGame(n: Int): Boolean = {
      (2 to n).foldLeft(Array.fill[Boolean](n+1)(false)){(arr, i) =>
        (1 until i).foldLeft(arr){(innerArr, j) =>
          if (i % j == 0 && !innerArr(i-j)) innerArr.updated(i, true)
          else innerArr}}(n)
    }
}
```