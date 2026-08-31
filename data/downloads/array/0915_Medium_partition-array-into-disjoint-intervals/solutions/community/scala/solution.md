# Scala | Functional | 620 ms | 59.1 MB

**Author:** LuigiAndMario
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1354745/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1354745/)

---

The most straightforward solution is to map every array element to the pair consisting of
1. the maximum value to its left (including itself), and
2. the minimum value to its right (including itself)

Then, all we need to do is getting the index of the first element where the maximum to its left is less than or equal to the maximum element to its right.

```
object Solution {
    def partitionDisjoint(nums: Array[Int]): Int = {
        nums.scanLeft(Int.MinValue)(_ max _)
            .zip(nums.scanRight(Int.MaxValue)(_ min _))
            .zipWithIndex
            .tail
            .filter(x => x._1._1 <= x._1._2)
            .head._2
    }
}
```

The runtime is O(5`n`) = O(`n`): `scanLeft`, `scanRight`, `zip`, `zipWithIndex`, and `filter` all take O(`n`) time.
This solution is most likely not optimal, as of now there is not enough scala submissions to get runtime & memory use charts.