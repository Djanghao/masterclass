# Swift Solution

**Author:** thealeos
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3852186/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3852186/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    /// - Parameters:
    ///   - regular: `regular[i]` describes the cost it takes to go from stop `i - 1` to stop `i` using the regular route.
    ///   - express: `express[i]` describes the cost it takes to go from stop `i - 1` to stop `i` using the express route.
    ///   - expressCost: The cost to transfer from the regular route to the express route.
    /// - Returns: A 1-indexed array costs of length n, where costs[i] is the minimum cost to reach stop i from stop 0.
    func minimumCosts(_ regular: [Int], _ express: [Int], _ expressCost: Int) -> [Int] {
        var minCosts = [Int]()
        var lastRegularCost = 0
        var lastExpressCost = expressCost
        for i in 0..<regular.count {
            let regularCost = regular[i] + min(lastRegularCost, lastExpressCost)
            let expressCost = express[i] + min(expressCost + lastRegularCost, lastExpressCost)
            minCosts.append(min(regularCost, expressCost))
            lastRegularCost = regularCost
            lastExpressCost = expressCost
        }
        return minCosts
    }
}
```