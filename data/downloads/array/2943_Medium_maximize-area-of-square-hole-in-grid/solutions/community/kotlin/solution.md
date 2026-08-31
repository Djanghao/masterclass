# :: Kotlin :: Dirty Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4338683/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4338683/)

---

```
class Solution {
    fun maximizeSquareHoleArea(n: Int, m: Int, hBars: IntArray, vBars: IntArray): Int {
        var result = 1
        var hmax = 1
        var vmax = 1

        Arrays.sort(hBars)
        Arrays.sort(vBars)

        for ( i in hBars.indices) {
            var pre = i
            var post = i

            var temp = hBars[i]
            for (j in i - 1 downTo 0) {
                if (temp - hBars[j] != 1) break
                pre -= 1
                temp = hBars[j]
            }

            temp = hBars[i]
            for (j in i + 1 until hBars.size) {
                if (hBars[j] - temp != 1) break
                post += 1
                temp = hBars[j]
            }

            hmax = maxOf(hmax, post - pre + 2)
        }

        for ( i in vBars.indices) {
            var pre = i
            var post = i

            var temp = vBars[i]
            for (j in i - 1 downTo 0) {
                if (temp - vBars[j] != 1) break
                pre -= 1
                temp = vBars[j]
            }

            temp = vBars[i]
            for (j in i + 1 until vBars.size) {
                if (vBars[j] - temp != 1) break
                post += 1
                temp = vBars[j]
            }

            vmax = maxOf(vmax, post - pre + 2)
        }

        var min = minOf(hmax, vmax)
        result = maxOf(result, min*min)

        return result
    }
}
```