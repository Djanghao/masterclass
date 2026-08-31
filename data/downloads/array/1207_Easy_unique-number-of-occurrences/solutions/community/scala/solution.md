# scala solution

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/4582041/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/4582041/)

---

```
object Solution {
  def uniqueOccurrences(arr: Array[Int]): Boolean = {
    lazy val occ = (arr.toSeq.groupMapReduce(identity)(_ => 1)(_ + _)).values
    occ.toSet.size == occ.size
  }
}
```