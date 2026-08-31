# scala functional solution

**Author:** gyarish
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/424538/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/424538/)

---

```
object Solution {
    def maxIncreaseKeepingSkyline(grid: Array[Array[Int]]): Int = {
        
        val skyLineTop = grid.map(row => row.max)
        val skyLineLeft = grid.transpose.map(row => row.max)
        
        val seq = for {
            i <- grid.indices
            j <- grid(i).indices
        } yield {
            Math.min(skyLineTop(i), skyLineLeft(j)) - grid(i)(j)
        }
        
        seq.sum
    }
}
```