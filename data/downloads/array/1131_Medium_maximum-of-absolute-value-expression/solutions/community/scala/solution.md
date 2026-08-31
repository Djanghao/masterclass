# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3380814/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3380814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxAbsValExpr(arr1: Array[Int], arr2: Array[Int]): Int = {
      val len = arr1.length
      var res = 0
      for (i <- 0 until len; j <- 0 until len) res = res.max((arr1(i) - arr1(j)).abs + (arr2(i) - arr2(j)).abs + (i - j).abs)
      res
    }
}
```