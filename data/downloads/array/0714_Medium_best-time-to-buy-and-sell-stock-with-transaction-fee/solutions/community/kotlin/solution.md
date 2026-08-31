# 🚀️🔥️ Kotlin - explained from bruteforce to DP O(n) time O(1) space

**Author:** Klemo1997
**Votes:** 6
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3218938/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3218938/)

---

# Approach
1. State a brute force approach

Simplest way is to do this recursively: we've got 2 states we can be in: either we are holding a stock or we aren't. 

If we are holding a stock, we can either:
1. wait and do nothing
2. sell it

If we are not holding a stock, we can:
1. wait and do nothing
2. buy it

So we have 2 actions we can make at each iteration, which doubles it each time we increase index. This is $$O(2^n)$$:

```kotlin
class Solution {
    private val NON_HOLD = 0
    private val HOLD = 1

    fun maxProfit(prices: IntArray, fee: Int): Int {
        return dfs(prices, fee, 0, NON_HOLD)
    }

    private fun dfs(prices: IntArray, fee: Int, i: Int, status: Int): Int {
        if (i >= prices.size) return 0

        if (status == NON_HOLD) {
            return maxOf(
                dfs(prices, fee, i+1, HOLD) - prices[i] - fee,
                dfs(prices, fee, i+1, NON_HOLD)
            )
        }

        return maxOf(
            dfs(prices, fee, i+1, NON_HOLD) + prices[i],
            dfs(prices, fee, i+1, HOLD),
        )
    }
}
```
2. Identify repeating subproblems and memoize them

Now we have to think about our approach. If we try to compute i=0 for each state, it requires us to recompute 0 -> n-1, then 1 -> n-1, then 2 -> n-1 and so on. But what if we already computed 1 -> n-1 ? Then we can memoize it and return our optimal profit at index i and state s:

```kotlin
class Solution {
    private val NON_HOLD = 0
    private val HOLD = 1

    private lateinit var memo: Array<IntArray>

    fun maxProfit(prices: IntArray, fee: Int): Int {
        val n = prices.size
        memo = Array(n) { IntArray(2) {-1} }
        return dfs(prices, fee, 0, NON_HOLD)
    }

    private fun dfs(prices: IntArray, fee: Int, i: Int, status: Int): Int {
        if (i >= prices.size) return 0
        if (memo[i][status] != -1) return memo[i][status]

        memo[i][status] =
            if (status == NON_HOLD) maxOf(
                dfs(prices, fee, i+1, HOLD) - prices[i] - fee,
                dfs(prices, fee, i+1, NON_HOLD)
            )
            else maxOf(
                dfs(prices, fee, i+1, NON_HOLD) + prices[i],
                dfs(prices, fee, i+1, HOLD),
            )
        return memo[i][status]
    }
}
```
3. try if it cannot be refactored to iterative solution

If we'll think about this problem, then can do it from beginning to end (previously we did it top-down, so basically from the end). If we'll decide to go with the for loop, then the logic might be like this: 
1. current optimal hold would be the maximum of: previous optimal hold or previous optimal non-hold + buying current stock
2. current optimal non-hold would be maximum of: previous optimal non-hold or previous 

Then the answer lies in the last non hold, because finally, we can't be holding a stock.

```kotlin
class Solution {
    private val NON_HOLD = 0
    private val HOLD = 1

    private lateinit var memo: Array<IntArray>

    fun maxProfit(prices: IntArray, fee: Int): Int {
        val n = prices.size
        memo = Array(n) { IntArray(2) {-1} }
        memo[0][NON_HOLD] = 0
        memo[0][HOLD] = -prices[0]-fee

        for (i in 1 until n) {
            memo[i][HOLD] = maxOf(
                memo[i-1][HOLD], 
                memo[i-1][NON_HOLD] - prices[i] - fee)
            memo[i][NON_HOLD] = maxOf(
                memo[i-1][NON_HOLD], 
                memo[i-1][HOLD] + prices[i])
        }

        return memo[n-1][NON_HOLD]
    }
}
```
4. optimize even more
There is an obvious optimization we can make space-wise:

Notice the approach in previous implementation - each time we just have to remember previous state. Then we just need to know the previous state which we can store in a single variable. This makes the algo O(n) time and O(1) space which can't be optimized further.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun maxProfit(prices: IntArray, fee: Int): Int {
        val n = prices.size
        var nonHold = 0
        var hold = -prices[0]-fee

        for (i in 1 until n) {
            val tmpHold = hold
            hold = maxOf(hold, nonHold - prices[i] - fee)
            nonHold = maxOf(tmpHold + prices[i], nonHold)
        }

        return nonHold
    }
}
```