# Go, greedy, 0ms, beats 100% time, 100% space

**Author:** beaum
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/829167/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/829167/)

---

Pair adjacent nodes greedily and modify array in-place.

```
import (
    "fmt"
)

func mctFromLeafValues(arr []int) int {
    totalCost := 0;
    for len(arr) > 1 {
        minInd := 1
        cost := arr[0] * arr[1]
        for i := 2; i < len(arr); i += 1 {
            val := arr[i - 1] * arr[i]
            if (val < cost) {
                minInd = i
                cost = val
            }
        }
        if (arr[minInd - 1] > arr[minInd]) {
            arr[minInd] = arr[minInd - 1]
        }
        copy(arr[minInd - 1:], arr[minInd:])
        arr = arr[:len(arr) - 1]
        totalCost += cost
    }
    return totalCost
}
```
