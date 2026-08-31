# Functional 100%/100%

**Author:** xrtm000
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4966929/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4966929/)

---

```
object Solution {
    def findThePrefixCommonArray(a: Array[Int], b: Array[Int]): Array[Int] = {
        (a zip b).foldLeft((Set[Int](), scala.collection.immutable.Queue[Int]())) {
            case ((set, r), (x, y)) =>
                val newSet = set + x + y
                val diff = 2 - (newSet.size - set.size)
                val nextR = r.lastOption.getOrElse(0) + diff
                (newSet, r :+ nextR)
        }._2.toArray    
    }
}
```