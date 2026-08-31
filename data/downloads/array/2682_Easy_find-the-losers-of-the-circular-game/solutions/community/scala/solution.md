# [scala] - Set and recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3529741/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3529741/)

---


# Code
```
object Solution {
  def circularGameLosers(n: Int, k: Int): Array[Int] = {
    def go(seen: Set[Int], i: Int, step: Int): Array[Int] = 
      if (seen.contains(i)) (0 until n).filter(!seen.contains(_)).map(_ + 1).toArray
      else go(seen + i, (i + k * step) % n, step + 1)

    go(Set.empty, 0, 1)
  }
}
```