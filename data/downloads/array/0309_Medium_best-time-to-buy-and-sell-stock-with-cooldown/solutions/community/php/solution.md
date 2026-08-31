# DP solution

**Author:** dmitrik
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/4451982/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/4451982/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
# Python
# Top-down solution
```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        @lru_cache(None)
        def maxProf(idx, state):
            if idx >= n:
                return 0
            if state == 0:
                return max(maxProf(idx + 1, state), maxProf(idx + 1, 1) - prices[idx])
            return max(maxProf(idx + 1, state), maxProf(idx + 2, 0) + prices[idx])
        return maxProf(0, 0)
```

# Bottom-up solution
```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        dp = [[0] * 2 for _ in range(n + 2)]
        for i in range(n - 1, -1, -1):
            for st in range(2):
                doNothing = dp[i + 1][st]
                if st == 0:
                    doSomething = dp[i + 1][st + 1] - prices[i]
                else:
                    doSomething = dp[i + 2][st - 1] + prices[i]
                dp[i][st] = max(doNothing, doSomething)
        return dp[0][0]
```

# PHP bottom-up solution
```
class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        $n = count($prices);
        $dp = [];
        for ($i = 0; $i < $n + 2; ++$i) {
            $dp[] = [];
            for ($j = 0; $j < 2; ++$j) {
                $dp[$i][] = 0;
            }
        }
        for ($i = $n - 1; $i >= 0; --$i) {
            for ($j = 0; $j < 2; ++$j) {
                $doNothing = $dp[$i + 1][$j];
                if ($j == 0) {
                    $doSomething = $dp[$i + 1][$j + 1] - $prices[$i];
                } else {
                    $doSomething = $dp[$i + 2][$j - 1] + $prices[$i];
                }
                $dp[$i][$j] = max($doNothing, $doSomething);
            }
        }
        return $dp[0][0];
    }
}
```

# JavaScript bottom-up solution
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length,
        dp = [];
    for (let i = 0; i < n + 2; ++i) {
        dp.push([]);
        for (let j = 0; j < 2; ++j) {
            dp[i].push(0);
        }
    }
    let doNothing = 0,
        doSomething = 0;
    for (let i = n - 1; i >= 0; --i) {
        for (let j = 0; j < 2; ++j) {
            doNothing = dp[i + 1][j];
            if (j == 0) {
                doSomething = dp[i + 1][j + 1] - prices[i];
            } else {
                doSomething = dp[i + 2][j - 1] + prices[i];
            }
            dp[i][j] = Math.max(doNothing, doSomething);
        }
    }
    return dp[0][0];
};
```

# TypeScript bottom-up solution
```
function maxProfit(prices: number[]): number {
    let n:number = prices.length,
        dp: Array<Array<number>> = [];
    for (let i:number = 0; i < n + 2; ++i) {
        dp.push([]);
        for (let j:number = 0; j < 2; ++j) {
            dp[i].push(0);
        }
    }
    let doNothing:number = 0,
        doSomething:number = 0;
    for (let i:number = n - 1; i >= 0; --i) {
        for (let j:number = 0; j < 2; ++j) {
            doNothing = dp[i + 1][j];
            if (j == 0) {
                doSomething = dp[i + 1][j + 1] - prices[i];
            } else {
                doSomething = dp[i + 2][j - 1] + prices[i];
            }
            dp[i][j] = Math.max(doNothing, doSomething);
        }
    }
    return dp[0][0];
};
```
