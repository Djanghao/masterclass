# Scala solution, beats 100%

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/5588328/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/5588328/)

---

# Approach
* Turn the `allowedSwaps` data structure to something navigable, e.g. a Map where the keys are the starting positions and the values are a list of nodes with you can swap with.
* Calculate the hamming distance by interating through the source array, and:
    * If the given element is not in any swap group, then add 0 or 1 to the Hamming distance depending on the equality of the characters.
    * If it is in a swap group, then traverse the swap group and collect the characters and their counts to two different maps (from `source` and from `target`). Count the different characters and add them to the Hamming distance.
    * Maintain the list of indices that you visited to avoid double counting.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
import scala.annotation.tailrec
import scala.collection.mutable

object Solution {
  def minimumHammingDistance(source: Array[Int], target: Array[Int], allowedSwaps: Array[Array[Int]]): Int = {
    val swapMap = allowedSwaps.flatMap { swap => Seq((swap(0), swap(1)), (swap(1), swap(0))) }.groupMap(_._1)(_._2)
    var visited = mutable.Set[Int]()
    source.indices.map { i =>
      if (!swapMap.contains(i)) {
        if (source(i) == target(i)) 0 else 1
      } else if (visited.contains(i)) 0
      else {
        // Create a humming difference for the graph
        val srcMap = mutable.Map[Int, Int]()
        val trgMap = mutable.Map[Int, Int]()

        val toTraverse = mutable.ArrayDeque[Int]()
        toTraverse.append(i)

        while (toTraverse.nonEmpty) {
          val x = toTraverse.removeHead()
          if (!visited(x)) {
            srcMap(source(x)) = srcMap.getOrElse(source(x), 0) + 1
            trgMap(target(x)) = trgMap.getOrElse(target(x), 0) + 1
            visited.add(x)
            toTraverse.addAll(swapMap(x))
          }
        }

        val sum = srcMap.map { case (k, v) => v }.sum
        val common = srcMap.keySet.intersect(trgMap.keySet).toSeq.map { j => Math.min(srcMap(j), trgMap(j)) }.sum
        sum - common
      }
    }.sum
  }
}
```