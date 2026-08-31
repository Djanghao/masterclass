# Scala DP Top-Down short solution

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3966388/](https://leetcode.com/problems/frog-jump/solutions/3966388/)

---

```
object Solution {
  def canCross(stones: Array[Int]): Boolean = {
    
    val mem = collection.mutable.Map[(Int, Int, Int), Boolean]()
    def dp(i: Int, k: Int, p: Int): Boolean = mem.getOrElseUpdate((i, k, p), {
      if (p == stones.last) true                                // reached end
      else if (stones.length <= i || p < stones(i)) false       // no stone at pos p
      else if (stones(i) < p) dp(i + 1, k, p)                   // continue looking for stone
      else (k - 1 to k + 1) exists { l => dp(i + 1, l, p + l) } // found stone, try jumps
    })

    dp(1, 1, 1)
  }
}

```