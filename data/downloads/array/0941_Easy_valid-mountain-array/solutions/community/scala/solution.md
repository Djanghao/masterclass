# 4 lines scala imperative

**Author:** jkalmeij
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/1718835/](https://leetcode.com/problems/valid-mountain-array/solutions/1718835/)

---

Not very functional. But I think it is simple.

```scala
object Solution {
    def validMountainArray(arr: Array[Int]): Boolean = {
        // 0 < i < arr.length - 1
        // s.t.
        // arr[0] < arr[1] < .. < arr[i - 1] < arr[i]
        // arr[i] > arr[i + 1] > .. > arry[arr.length - 1]

        // Look for the first peak.
        val peakIndex = Range(0, arr.size - 1).indexWhere(i => !(arr(i) < arr(i + 1)))
        if (!(0 < peakIndex && peakIndex < (arr.size - 1))) return false

        // Look for a following valley
        val valleyIndex = Range(peakIndex, arr.size - 1).indexWhere(i => !(arr(i) > arr(i + 1)))
        return valleyIndex == -1
    }
}
```