# Simple solution via squares

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-divisors/solutions/3244927/](https://leetcode.com/problems/three-divisors/solutions/3244927/)

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
    def isThree(n: Int): Boolean = {
        val squares = List(4, 9, 25, 49, 121, 169, 289, 361, 529, 841, 961, 1369, 1681, 1849, 2209, 2809, 3481, 3721, 4489, 5041, 5329, 6241, 6889, 7921, 9409)
        squares.contains(n)
    }
}
```