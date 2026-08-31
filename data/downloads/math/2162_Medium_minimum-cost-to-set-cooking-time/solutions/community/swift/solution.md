# Swift, Brute force

**Author:** ashinetyp
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/2985827/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/2985827/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minCostSetTime(_ startAt: Int, _ moveCost: Int, _ pushCost: Int, _ targetSeconds: Int) -> Int {
        var minCost = Int.max
        var maxMinute = targetSeconds/60
        for i in 0...maxMinute {
            var second = targetSeconds - i * 60
            if second > 99 || i > 99 {
                continue
            }
            let targetTime = String(i * 100 + second)
            let localCost = getProcessTime(Array(targetTime), startAt, moveCost, pushCost)
            minCost = min(minCost, localCost)
        }
        return minCost
    }

    func getProcessTime(_ targetInput: [Character], _ startAt: Int, _ moveCost: Int, _ pushCost: Int) -> Int {
        var cost = 0
        var current = startAt
        for input in targetInput {
            if let inputNum = Int(String(input)) {
                if inputNum == current {
                    cost += pushCost
                } else {
                    cost += (pushCost + moveCost)
                    current = inputNum
                }
            }
        }
        return cost
    }
}
```