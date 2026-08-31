# ✅ Scala: easy O(n) solution (beats 100%/100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/3460818/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/3460818/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {

  def minOperations(boxes: String): Array[Int] = {
    var lBoxes = 0
    var rBoxes = boxes.count(_ == '1')

    var lMoves = 0
    var rMoves = boxes.indices.foldLeft(0) {
      case (acc, i) if boxes(i) == '1' => acc + i + 1
      case (acc, _)                    => acc
    }

    val result = Array.fill(boxes.length)(0)

    for (i <- boxes.indices) {
      lMoves += lBoxes
      rMoves -= rBoxes
      boxes(i) match {
        case '1' =>
          rBoxes -= 1
          lBoxes += 1
        case _   =>
      }
      result(i) = lMoves + rMoves
    }

    result
  }

}
```