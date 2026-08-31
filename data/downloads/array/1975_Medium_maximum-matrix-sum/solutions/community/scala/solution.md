# Scala solution with nested foldLeft

**Author:** maciejwadowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6079343/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6079343/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ 
# Code
```scala []
object Solution {
    def negCount(e: Int, count: Int): Int = if (e < 0) count + 1 else count

    def maxMatrixSum(matrix: Array[Array[Int]]): Long = {
        val result = matrix.foldLeft((0L, 0, Int.MaxValue)) { case ((acc, neg, smallest), arr) =>
            val row = arr.foldLeft((0L, 0, Int.MaxValue)) { case ((arrAcc, negCnt, currentSmallest), e) =>
                (arrAcc + e.abs, negCount(e, negCnt), if (currentSmallest > e.abs) e.abs else currentSmallest)
            }
            (row._1 + acc, row._2 + neg, if (row._3 < smallest) row._3 else smallest)
        }
        if (result._2 % 2 == 0) result._1
        else result._1 - 2*(result._3)
    }
}
```