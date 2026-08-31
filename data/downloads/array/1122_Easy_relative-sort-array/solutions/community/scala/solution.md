# Scala: one line O(n*log(n))

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5293710/](https://leetcode.com/problems/relative-sort-array/solutions/5293710/)

---

# Code
```
object Solution {
  def relativeSortArray(arr1: Array[Int], arr2: Array[Int]): Array[Int] =
    arr1.sortBy(arr2.zipWithIndex.toMap.withDefault(_ + 1001))
}
```