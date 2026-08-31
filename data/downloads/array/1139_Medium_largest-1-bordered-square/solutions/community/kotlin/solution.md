# Kotlin prefix sum

**Author:** c4tdog
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/3061290/](https://leetcode.com/problems/largest-1-bordered-square/solutions/3061290/)

---

# Code
```
class Solution {
    fun largest1BorderedSquare(g: Array<IntArray>): Int {
        var a = Array<Array<IntArray>>(g.size, { Array(g[0].size, { IntArray(4, { 0 }) }) })

        for (r in 0..g.size - 1) {
            var t = a[r]

            var z = 0
            for (c in 0..g[0].size - 1) {
                if (g[r][c] == 1) {
                    z++
                    t[c][0] = z
                } else z = 0
            }
            z = 0
            for (c in g[0].size - 1 downTo 0) {
                if (g[r][c] == 1) {
                    z++
                    t[c][1] = z
                } else z = 0
            }
        }

        for (c in 0..g[0].size - 1) {
            var z = 0
            for (r in 0..g.size - 1) {
                if (g[r][c] == 1) {
                    z++
                    a[r][c][2] = z
                } else z = 0
            }

            z = 0
            for (r in g.size - 1 downTo 0) {
                if (g[r][c] == 1) {
                    z++
                    a[r][c][3] = z
                } else z = 0
            }
        }

        var res = 0

        for (r in 0..g.size - 1) {
            for (c in 0..g[0].size - 1) {
                if (g[r][c] == 1) {
                    var m = Math.min(a[r][c][1], a[r][c][3])
                    if (m <= res) continue
                    
                    var diff = m - (res + 1)

                    // check all from m downTo current res + 1
                    for (k in 0..diff) {
                        var row = r + (m - 1 - k)
                        var col = c + (m - 1 - k)
                        if (a[row][col][0] >= m - k && a[row][col][2] >= m - k) {
                            res = m - k
                            break
                        }
                    }
                }
            }
        }

        return res * res
    }
}
```