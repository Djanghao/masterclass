# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/3657325/](https://leetcode.com/problems/couples-holding-hands/solutions/3657325/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minSwapsCouples(row: Array[Int]): Int = {
        val n = row.length
        val pos = Array.fill(n)(0)
        for (i <- row.indices) pos(row(i)) = i
        var ans = 0
        for (i <- 0 until n by 2) {
          val actualPair = row(i) + (if (row(i) % 2 == 0) 1 else -1)
          val curPair = row(i + 1)
          if (curPair != actualPair) {
            val j = pos(actualPair)
            swap(row, i + 1, j)
            swap(pos, curPair, actualPair)
            ans += 1
          }
        }
        ans
      }

      def swap(arr: Array[Int], i: Int, j: Int): Unit = {
        val temp = arr(i)
        arr(i) = arr(j)
        arr(j) = temp
      }
}
```