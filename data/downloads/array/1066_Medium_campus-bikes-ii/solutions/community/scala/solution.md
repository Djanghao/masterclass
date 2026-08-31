# Scala top-down DP

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4491177/](https://leetcode.com/problems/campus-bikes-ii/solutions/4491177/)

---

# Note
It looks like the DP recursive function has two states `workerIdx` and `bikeMask`. However, one should realize that `workerIdx` equals to the size of `bikeMask`. Therefore, the cache only tracks the latter. 

# Time complexity
`O(M * 2^M)`
There will be `2^M` calls to the DP function. Each call has a for-loop of length `M` to go through all bikes. 

# Code
```
import scala.collection.mutable
import scala.collection.BitSet

object Solution {

    def manhattanDist(p1: Array[Int], p2: Array[Int]): Int = {
        math.abs(p1(0) - p2(0)) + math.abs(p1(1) - p2(1))
    }

    def assignBikes(workers: Array[Array[Int]], bikes: Array[Array[Int]]): Int = {
        val cache: mutable.Map[BitSet, Int] = mutable.Map.empty

        def dp(workerI: Int, bikeMask: BitSet): Int = {
            if (cache.contains(bikeMask)) {
                cache(bikeMask)
            } else {
                val res = if (workerI == workers.length) 0
                else {
                    var assignBike: Int = -1
                    var _minDist: Int = 1e9.toInt
                    for (bikeIdx <- 0 until bikes.size; if (! bikeMask(bikeIdx))) {
                        val dist = manhattanDist(workers(workerI), bikes(bikeIdx))
                        _minDist = math.min(_minDist, dist + dp(workerI + 1, bikeMask + bikeIdx))
                    }
                    _minDist
                }
                cache(bikeMask) = res
                res
            }
        }

        dp(0, BitSet.empty)
    }
}
```