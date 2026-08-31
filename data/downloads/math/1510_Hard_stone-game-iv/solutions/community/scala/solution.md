# Scala DP

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/731169/](https://leetcode.com/problems/stone-game-iv/solutions/731169/)

---

```
object Solution {
  private val IsCurrentPlayerWinner: LazyList[Boolean] = {
    val positiveSquares = LazyList.from(1).map(x => x * x)

    def generate(n: Int, memoization: IndexedSeq[Boolean] = IndexedSeq()): LazyList[Boolean] = {
      val isCurrentPlayerWinner = positiveSquares.takeWhile(_ <= n).exists(i => !memoization(n - i))
      isCurrentPlayerWinner #:: generate(n + 1, memoization :+ isCurrentPlayerWinner)
    }

    generate(0)
  }

  def winnerSquareGame(n: Int): Boolean = IsCurrentPlayerWinner(n)
}
```