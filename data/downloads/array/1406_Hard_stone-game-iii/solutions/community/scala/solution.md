# using memoisation dp, 100 % runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/6112118/](https://leetcode.com/problems/stone-game-iii/solutions/6112118/)

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
  def stoneGameIII(stoneValue: Array[Int]): String = {
    val result = getScore(0, stoneValue, Array.fill(stoneValue.length)(-1))
    result match {
      case 0 => "Tie"
      case v if v > 0 => "Alice"
      case _ => "Bob"
    }
  }

  private def getScore(idx: Int, stones: Array[Int], memo: Array[Int]): Int = {
    if (idx == stones.length) 0
    else if (memo(idx) != -1) memo(idx)
    else {
      memo(idx) = (idx until Math.min(idx + 3, stones.length)).map { i =>
        stones.slice(idx, i + 1).sum - getScore(i + 1, stones, memo)
      }.maxOption.getOrElse(0)
      memo(idx)
    }
  }
}
```