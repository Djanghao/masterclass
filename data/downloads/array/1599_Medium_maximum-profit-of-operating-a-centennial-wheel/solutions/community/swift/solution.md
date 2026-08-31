# Swift solution (simulation)

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/1217698/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/1217698/)

---

Swift solution (simulation)
```
class Solution {
    func minOperationsMaxProfit(_ customers: [Int], _ boardingCost: Int, _ runningCost: Int) -> Int {
        var waiting = 0, profit = 0, maxProfit = 0, turn = 0, result = -1
        func run() {
            let ongoing = min(waiting, 4)
            waiting -= ongoing
            profit += ongoing * boardingCost - runningCost
            turn += 1
            if profit > maxProfit {
                maxProfit = profit
                result = turn
            }
        }
        for customer in customers {
            waiting += customer
            run()
        }
        while waiting > 0 {
            run()
        }
        return result
    }
}
```