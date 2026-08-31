# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/4260120/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/4260120/)

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
    def checkValid(matrix: Array[Array[Int]]): Boolean = {
      val len = matrix.length
      val nums = (1 to len).toSet
      matrix.forall(f=> f.toSet == nums) && (0 until len).forall(f=> (0 until len).map(matrix(_)(f)).toSet == nums)
    }
}
```