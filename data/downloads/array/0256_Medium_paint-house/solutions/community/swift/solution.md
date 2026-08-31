# [Swift] Top-Down & Bottom-Up DP

**Author:** kricheso
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house/solutions/1359279/](https://leetcode.com/problems/paint-house/solutions/1359279/)

---

**Solution 1: Top-down DP**
```
class Solution {
    
    func minCost(_ costs: [[Int]]) -> Int {
        var dp: [String: Int] = [:]
        return helper(costs, 0, "", &dp)
    }
    
    func helper(_ costs: [[Int]], _ ptr: Int, _ prevColor: String, _ dp: inout [String: Int]) -> Int {
        let dpHash = "\\(ptr),\\(prevColor)"
        if let result = dp[dpHash] { return result }
        if ptr >= costs.count { return 0 }
        let cost = costs[ptr]
        let paintRed = prevColor != "red" ? cost[0] + helper(costs, ptr + 1, "red", &dp) : Int.max
        let paintGreen = prevColor != "green" ? cost[1] + helper(costs, ptr + 1, "green", &dp) : Int.max
        let paintBlue = prevColor != "blue" ? cost[2] + helper(costs, ptr + 1, "blue", &dp) : Int.max
        let result = min(paintRed, paintGreen, paintBlue)
        dp[dpHash] = result
        return result
    }
    
}
```

Time Complexity: O(N)
Space Complexity: O(N)

**Solution 2: Bottom-up DP**
```
class Solution {
    
    func minCost(_ costs: [[Int]]) -> Int {
        var redCost = costs[0][0]
        var greenCost = costs[0][1]
        var blueCost = costs[0][2]
        for cost in costs.dropFirst() {
            let paintRed = cost[0] + min(greenCost, blueCost)
            let paintGreen = cost[1] + min(redCost, blueCost)
            let paintBlue = cost[2] + min(redCost, greenCost)
            redCost = paintRed
            greenCost = paintGreen
            blueCost = paintBlue
        }
        return min(redCost, greenCost, blueCost)
    }
    
}
```

Time Complexity: O(N)
Space Complexity: O(1)