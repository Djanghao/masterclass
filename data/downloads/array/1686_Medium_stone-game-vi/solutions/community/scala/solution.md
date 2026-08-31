# Scala solution O(n log n)

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/2190710/](https://leetcode.com/problems/stone-game-vi/solutions/2190710/)

---

The most valuable stone to take is the one that maximise each player's personal value *and* the opponent's missed value. That is a sum.
Given that, the algorithm consists in generating the sums of alice and bob values, sort them in decreasing order and playing the game: at each move, if it is even, Alice will pick the next best choice, otherwise Bob will. The score will be kept as a difference of Alice and Bob scores: the difference sign is the required solution.

```
object Solution {
  def stoneGameVI(aliceValues: Array[Int], bobValues: Array[Int]): Int = {
    val sumToIndex = aliceValues
      .zipWithIndex
      .zip(bobValues)
      .map {
        case ((aliceValue, index), bobValue) =>
          (aliceValue + bobValue) -> index
      }
      .sortBy(-_._1)
    val result: Int = sumToIndex
      .zipWithIndex
      .foldLeft(0) {
        case (acc, ((_, valueIndex), moveIndex)) if moveIndex % 2 == 0 =>
          acc + aliceValues(valueIndex)
        case (acc, ((_, index), _))=>
          acc - bobValues(index)
      }
    Math.signum(result).toInt
  }
}
```