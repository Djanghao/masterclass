# scala solution 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/champagne-tower/solutions/5406892/](https://leetcode.com/problems/champagne-tower/solutions/5406892/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(R2) where R is max 100
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(R2) where R is max 100
# Code
```
object Solution {
  def champagneTower(poured: Int, query_row: Int, query_glass: Int): Double = {

    val resultArray = Array.ofDim[Double](102, 102)
    resultArray(0)(0) = poured
    for (r <- 0 to query_row; c <- 0 to r) {
      val q = (resultArray(r)(c) - 1.0) / 2.0
      if (q > 0) {
        resultArray(r + 1)(c) += q
        resultArray(r + 1)(c + 1) += q
      }
    }

    Math.min(1, resultArray(query_row)(query_glass))
  }
}    
```