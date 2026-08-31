# Scala solution with binary search collection.Searching.search

**Author:** tumakha
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/680217/](https://leetcode.com/problems/search-insert-position/solutions/680217/)

---

```scala
object Solution {

  import scala.collection.Searching._

  def searchInsert(nums: Array[Int], target: Int): Int =
    nums.search(target).insertionPoint

}
```