# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/3554833/](https://leetcode.com/problems/dungeon-game/solutions/3554833/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(mn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def calculateMinimumHP(dungeon: Array[Array[Int]]): Int = {
      val m = dungeon.length
      val n = dungeon(0).length
      val dp = Array.ofDim[Int](m, n)
      dp(m-1)(n-1) = math.max(1, 1 - dungeon(m-1)(n-1))
      for (i <- m-2 to 0 by -1) dp(i)(n-1) = math.max(1, dp(i+1)(n-1) - dungeon(i)(n-1))
      for (j <- n-2 to 0 by -1) dp(m-1)(j) = math.max(1, dp(m-1)(j+1) - dungeon(m-1)(j))
      for (i <- m-2 to 0 by -1; j <- n-2 to 0 by -1) dp(i)(j) = math.min(math.max(1, dp(i+1)(j) - dungeon(i)(j)), math.max(1, dp(i)(j+1) - dungeon(i)(j)))
      dp(0)(0)
    }
}
```