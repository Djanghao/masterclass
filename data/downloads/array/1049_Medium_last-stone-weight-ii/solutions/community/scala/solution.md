# using knapsack

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/5824293/](https://leetcode.com/problems/last-stone-weight-ii/solutions/5824293/)

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
```scala []
object Solution {
  def lastStoneWeightII(stones: Array[Int]): Int = {
    lastStoneWeightIIDP(stones, Array.fill(stones.length, stones.sum + 1)(-1), 0, 0, 0)
  }

  private def lastStoneWeightIIDP(stones: Array[Int], dp: Array[Array[Int]],
                                  left: Int, right: Int, idx: Int): Int = {
    if (idx == stones.length) Math.abs(left - right)
    else if (dp(idx)(left) != -1) dp(idx)(left)
    else {
      val resul = Math.min(lastStoneWeightIIDP(stones, dp, left + stones(idx), right, idx + 1),
        lastStoneWeightIIDP(stones, dp, left, right + stones(idx), idx + 1))
      dp(idx)(left) = resul
      resul
    }
  }
}
```