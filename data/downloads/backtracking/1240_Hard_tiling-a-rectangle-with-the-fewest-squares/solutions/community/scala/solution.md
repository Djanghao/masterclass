# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/3856630/](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/3856630/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^4)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def tilingRectangle(n: Int, m: Int): Int = {
        val left = math.max(n, m)
        val right = math.min(n, m)
        val memo = Array.ofDim[Int](right + 1, left + 1)
        calcHelper(right, left, memo)
      }

      def calcHelper(right: Int, left: Int, memo: Array[Array[Int]]): Int = {
        if (right > left) calcHelper(left, right, memo)
        else if (right == 0) 0
        else if (right == 1) left
        else if (right == left) 1
        else if (memo(right)(left) > 0) memo(right)(left)
        else {
          var res = Int.MaxValue
          val maxSize = math.min(right, left)
          for (w <- 1 to maxSize; i <- 0 to left - w; j <- 0 to right - w) 
            res = math.min(res, 1 + calcHelper(i + w, right - j - w, memo) + calcHelper(i, j + w, memo) + calcHelper(right - j, left - i - w, memo) + calcHelper(left - i, j, memo))
          memo(right)(left) = res
          res
        }
      }
}
```