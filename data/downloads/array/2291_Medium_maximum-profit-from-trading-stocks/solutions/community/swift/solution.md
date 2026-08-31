# Swift DP 1D array | optimization - count only positive profits

**Author:** tolsty
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3295153/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3295153/)

---

# Intuition
It's a usual 0/1 knapsack problem which has a good explanation here - https://leetcode.com/discuss/study-guide/1152328/01-Knapsack-Problem-and-Dynamic-Programming

Maximize your profit having restricted budget.

# Approach
Bottom up/Tabulation approach. 
Optimization #1 - 1d array instead of 2d matrix.
Unnecessary optimization #2 - count profit for all stocks and consider only the stocks with profit > 0. It will take additional space, but can make out DP table smaller and thus reduce time complexity.

# Complexity
- Time complexity:
O(n + p * b), where n - number of stock, b - budget, p - number of stocks with positive profit

- Space complexity:
O(p + b)

# Code
```
class Solution {
    struct StockProfit {
        let price: Int
        let profit: Int
    }
    func maximumProfit(_ present: [Int], _ future: [Int], _ budget: Int) -> Int {
        var stocks = [StockProfit]()
        for i in 0..<present.count {
            let profit = future[i] - present[i]
            if profit > 0 {
                let stockProfit = StockProfit(price: present[i], profit: profit)
                stocks.append(stockProfit)
            }
        }
        guard !stocks.isEmpty else {
            return 0
        }
        // Solve DP problem
        var dp = [Int](repeating: 0, count: budget + 1)
        for r in 1...stocks.count {
            var c = budget
            while c >= 0 {
                if c >= stocks[r - 1].price {
                    dp[c] = max(dp[c], stocks[r - 1].profit + dp[c - stocks[r - 1].price])
                }
                c -= 1
            }
        }

        return dp.last!
    }
}
```