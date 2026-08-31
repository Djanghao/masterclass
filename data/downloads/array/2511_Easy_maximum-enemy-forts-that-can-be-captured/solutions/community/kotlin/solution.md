# Simple Kotlin solution

**Author:** armat
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3800799/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3800799/)

---

# Code
```
class Solution {
    fun captureForts(forts: IntArray): Int {
        var departureFort = 0
        var currentCapturedForts = 0
        var maxCapturedForts = 0

        for (fort in forts) {
            if (fort == 1 || fort == -1) {
                // Check if departureFort is different from the current fort (1 + (-1) = 0)
                if (departureFort + fort == 0)
                    maxCapturedForts = Math.max(maxCapturedForts, currentCapturedForts)

                departureFort = fort
                currentCapturedForts = 0
            } else currentCapturedForts++
        }

        return maxCapturedForts
    }
}
```