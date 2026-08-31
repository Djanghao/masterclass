# [Kotlin] Explained greedy O(nlogn)

**Author:** pierluigifimiano
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5492895/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5492895/)

---

We know we need to cut along all axes. If we cut along a vertical axis we add a cost equal to the row cost for each row:

Cost of cutting along a row = cost of cutting along the row * number of cuts made along the column

The same happens if we cut along the row for the column. 
This will help us think that a gready approach is best since every time we cut along one direction we increase the final cost by the sum of the rest of the cost in the other direction. 

The approach:

1. Sort both arrays
2. Repeat on them, select the maximum cost
3. Increase the number of cuts in the other direction
4. Add the cost multiplied by the number of cuts in the other direction to the final cost

```
class Solution {
    fun minimumCost(m: Int, n: Int, horizontalCut: IntArray, verticalCut: IntArray): Long {
        horizontalCut.sort()
        verticalCut.sort()
        
        var i = horizontalCut.size - 1
        var j = verticalCut.size - 1
        
        var c1 = 1L
        var c2 = 1L
        
        var cost = 0L
        
        while (i >= 0 && j >= 0) {
            if (horizontalCut[i] >= verticalCut[j]) {
                cost += horizontalCut[i] * c1
                c2++
                i--
            } else {
                cost += verticalCut[j] * c2
                c1++
                j--
            }
        }
        
        while (i >= 0) {
            cost += horizontalCut[i] * c1
            i--
        }
        
        while (j >= 0) {
            cost += verticalCut[j] * c2
            j--
        }
        
        return cost
    }
}
```