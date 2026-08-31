# [scala] - zipWithIndex, recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5297810/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5297810/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```scala
  def findWinningPlayer(skills: Array[Int], k: Int): Int =
    go(k, won = 0, (skills.head, 0), skills.zipWithIndex.toList.tail)

  def go(k: Int, won: Int, s0: (Int, Int), skills: List[(Int, Int)]): Int =
    if (won >= k) s0._2
    else skills match {
      case Nil => s0._2
      case h :: tail => if (s0._1 > h._1) go(k, won + 1, s0, tail) else go(k, 1, h, tail)
    }
```