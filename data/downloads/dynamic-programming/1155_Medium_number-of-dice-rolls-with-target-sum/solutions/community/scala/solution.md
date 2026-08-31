# scala dfs with memo, 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/6115839/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/6115839/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(NKT)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(NT)
# Code
```scala []
object Solution {
  def numRollsToTarget(n: Int, k: Int, target: Int): Int = {
    val mod = Math.pow(10, 9) + 7

    def getCount(nIdx: Int, k: Int, target: Int, memo: Array[Array[Int]]): Int = {
      if (nIdx == n && target == 0) 1
      else if ((nIdx == n && target != 0)|| target<=0) 0
      else if (memo(nIdx)(target) != -1) memo(nIdx)(target)
      else {
        val result = ((1 to k).map { i =>
          getCount(nIdx + 1, k, target - i, memo) % mod
        }.sum % mod).toInt
        memo(nIdx)(target) = result
        result
      }
    }

    getCount(0, k, target, Array.fill(n, target + 1)(-1))
  }
}
```