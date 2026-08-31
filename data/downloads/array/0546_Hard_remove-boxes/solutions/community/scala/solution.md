# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/3630415/](https://leetcode.com/problems/remove-boxes/solutions/3630415/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^4)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^3)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def removeBoxes(boxes: Array[Int]): Int = {
      val n = boxes.length
      val memo = Array.ofDim[Int](n, n, n)
      def dp(l: Int, r: Int, k: Int): Int = 
        if (l > r) 0
        else if (memo(l)(r)(k) > 0) memo(l)(r)(k)
        else {
          var res = (k + 1) * (k + 1) + dp(l + 1, r, 0)
          for (i <- l + 1 to r) if (boxes(i) == boxes(l)) res = res.max(dp(l + 1, i - 1, 0) + dp(i, r, k + 1))
          memo(l)(r)(k) = res
          res
        }
      dp(0, n - 1, 0)
    }
}
```