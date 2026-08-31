# Kotlin | iterative | simulation |

**Author:** jeph300
**Votes:** 5
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/2485559/](https://leetcode.com/problems/spiral-matrix/solutions/2485559/)

---

```
class Solution {
    fun spiralOrder(matrix: Array<IntArray>): List<Int> {
        val list = mutableListOf<Int>()
        var t = 0
        var l = 0
        var b = matrix.size - 1
        var r = matrix[0].size - 1
        var dir = 0
        while (t <= b && l <= r) {
            if (dir == 0) {
                for (i in l until r + 1) {
                    list.add(matrix[l][i])
                }
                t++
            } else if (dir == 1) {
                for (i in t until b + 1) {
                    list.add(matrix[i][r])
                }
                r--
            } else if (dir == 2) {
                for (i in r downTo l) {
                    list.add(matrix[b][i])
                }
                b--
            } else if (dir == 3) {
                for (i in b downTo t) {
                    list.add(matrix[i][l])
                }
                l++
            }
            dir = (dir + 1) % 4
            
        }
        return list
    }
}
```