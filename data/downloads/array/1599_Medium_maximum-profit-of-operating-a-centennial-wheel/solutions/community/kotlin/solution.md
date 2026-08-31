# kotlin faster 100% memory usage 100%

**Author:** sang-eun
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/1255006/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/1255006/)

---

```
class Solution {
    fun minOperationsMaxProfit(customers: IntArray, boardingCost: Int, runningCost: Int): Int {
        var ridingP = 0
        var waitingP = 0
        var res = 0
        var idx = 0
        var max = -987654321
        var ans = 0

        while (true) {
            if(waitingP <= 0 && idx >= customers.size) {
                break
            }

            if (idx < customers.size) {
                waitingP += customers[idx]
            }
            if (waitingP >= 4) {
                ridingP = 4
                waitingP -= 4
            } else {
                ridingP = waitingP
                waitingP = 0
            }

            res += ridingP * boardingCost - runningCost
            //println("$ridingP * $boardingCost - $runningCost = $res")

            if(max < res) {
                max = res
                ans = idx
            }
            idx++
        }

        if(max <= 0) {
            return -1
        }

        return ans + 1
    }
}
```