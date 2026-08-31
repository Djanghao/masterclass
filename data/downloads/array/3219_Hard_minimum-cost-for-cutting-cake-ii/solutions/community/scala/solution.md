# Scala solution with one PriorityQueue

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473319/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473319/)

---

# Intuition
Greedy algorithm. You will have the minimum sum if you always cut the cut with the largest cost, because the largest cost will only count once and all others in the opposite direction will cost double.

# Approach
Build a priority queue of all the possible cuts (horizontal and vertical) and do the cuts in decreasing order of costs. Maintain the number of pieces horizontally and vertically, because once there is a cut in one direction, all the other direction cuts will count twice.

# Complexity
- Time complexity:
Building the PriorityQueue is the dominant here: $O((n+m) * log (n+m))$

- Space complexity:
$O(n+m)$ (the cost of the priority queue)

# Note

Don't forget that the `totalCost` is long. During the competition, I did. \uD83E\uDD37\u200D\u2642\uFE0F

# Code
```
import scala.collection.mutable

object Solution {
  sealed trait Cut { def cost: Int}
  case class HorizontalCut(cost: Int) extends Cut
  case class VerticalCut(cost: Int) extends Cut

  def minimumCost(m: Int, n: Int, horizontalCut: Array[Int], verticalCut: Array[Int]): Long = {
    val queue = mutable.PriorityQueue.from(
      horizontalCut.map(HorizontalCut.apply) ++ verticalCut.map(VerticalCut.apply)
    )(Ordering.by(_.cost))

    var hPieces = 1
    var vPieces = 1
    var totalCost: Long = 0

    while (queue.nonEmpty) {
      queue.dequeue() match {
        case HorizontalCut(cost) =>
          totalCost += cost * vPieces
          hPieces += 1
        case VerticalCut(cost) =>
          totalCost += cost * hPieces
          vPieces += 1
      }
    }
    totalCost
  }
}

```