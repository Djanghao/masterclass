# Scala solution with tail recursion, treeset and sliding window

**Author:** fernandomora
**Votes:** 1
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/2124453/](https://leetcode.com/problems/contains-duplicate-iii/solutions/2124453/)

---

```scala
import scala.annotation.tailrec
import scala.collection.immutable.TreeSet

object Solution {
    def containsNearbyAlmostDuplicate(nums: Array[Int], k: Int, t: Int): Boolean = {
        
        @tailrec
        def loop(i: Int, acc: TreeSet[Long]): Boolean = {
            lazy val numsI = nums(i).toLong
            lazy val almostDuplicates = acc.range(numsI - t, numsI + t + 1)
            lazy val newSet = 
                if (i < k) acc + numsI
                else       acc + numsI - nums(i - k)
            
            nums.length > i && (almostDuplicates.nonEmpty || loop(i + 1, newSet))
        }
        
        loop(0, TreeSet.empty)
    }
}
```