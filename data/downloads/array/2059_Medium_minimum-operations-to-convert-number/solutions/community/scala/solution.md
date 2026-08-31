# Scala BitSet

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1973376/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1973376/)

---

```
import scala.annotation.tailrec
import scala.collection.immutable.BitSet

object Solution {
  private val Range = 0 to 1000
  
  def minimumOperations(nums: Array[Int], start: Int, goal: Int): Int = {
    @tailrec
    def search(xs: Set[Int], visited: Set[Int], numOperations: Int): Int = {
      if (xs.isEmpty) -1
      else xs
        .iterator
        .flatMap(x => nums
          .iterator
          .flatMap(num => Iterator(x + num, x - num, x ^ num).filter(!xs.contains(_)).filter(!visited.contains(_))))
        .partition(Range.contains) match {
          case (inRange, _) if Range.contains(goal) => 
            val newXs = inRange.toSet
            if (newXs.contains(goal)) numOperations + 1 else search(newXs, visited | xs, numOperations + 1)

          case (_, notInRange) if notInRange.contains(goal) => numOperations + 1

          case (inRange, _) => search(inRange.toSet, visited | xs, numOperations + 1)
        }
      }
    
    if (start == goal) 0 else search(BitSet(start).filter(Range.contains), BitSet.empty, 0)
  }
}
```