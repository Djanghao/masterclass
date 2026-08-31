# Java | Kotlin | 0ms | from recursion with memo to iterative O(n) time and O(1) memory

**Author:** SamoylenkoDmitry
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/1522780/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/1522780/)

---

# Telegram
https://t.me/leetcode_daily_unstoppable/61
# Intuition
Progress from dfs solution to memo. DFS solution - just choose what to do in this step, go next, then compare results and peek max.
# Code
First, lets try to search all possible variants to buy and sell. It can be done in O(3^N):

```
class Solution {
    int[] prices;
    int len;

    public int maxProfit(int[] prices) {
        this.prices = prices;
        this.len = prices.length;

        return maxProfit2(0, true, false);
    }

    int maxProfit(int day, boolean canBuy, boolean canSell) {
        if (day == len)
            return 0;

        int profitSell = canSell ? prices[day] + maxProfit(day + 1, false, false) : 0;
        int profitHold = maxProfit(day + 1, true, canSell);
        int profitBuy = canBuy ? maxProfit(day + 1, false, true) - prices[day] : 0;

        int result = Math.max(profitSell, Math.max(profitHold, profitBuy));

        return result;
    }
}
```

Now add memo, O(N):
Kotlin: - this solutions is good enough for the interview IMHO.
```
    data class K(val a:Int, val b: Boolean, val c:Boolean)
    fun maxProfit(prices: IntArray): Int {
        val cache = mutableMapOf<K, Int>()
        fun dfs(pos: Int, canSell: Boolean, canBuy: Boolean): Int {
            return if (pos == prices.size) 0
                else cache.getOrPut(K(pos, canSell, canBuy), {
                    val profitSkip = dfs(pos+1, canSell, !canSell)
                    val profitSell = if (canSell) {prices[pos] + dfs(pos+1, false, false)} else 0
                    val profitBuy = if (canBuy) {-prices[pos] + dfs(pos+1, true, false)} else 0
                    maxOf(profitSkip, profitBuy, profitSell)
                })
        }
        return dfs(0, false, true)
    }
```
Java: 
```
class Solution {
    int[] prices;
    int len;
    int[][][] memo;

    public int maxProfit(int[] prices) {
        this.prices = prices;
        this.len = prices.length;
         memo = new int[len+1][2][2];
        return maxProfit2(0, true, false);
    }

    int maxProfit(int day, boolean canBuy, boolean canSell) {
        if (day == len)
            return 0;
        int cache = memo[day][canBuy ? 1 : 0][canSell ? 1 : 0];
        if (cache != 0)
            return cache == -1 ? 0 : cache;
        int profitSell = canSell ? prices[day] + maxProfit(day + 1, false, false) : 0;
        int profitHold = maxProfit(day + 1, true, canSell);
        int profitBuy = canBuy ? maxProfit(day + 1, false, true) - prices[day] : 0;

        int result = Math.max(profitSell, Math.max(profitHold, profitBuy));
        memo[day][canBuy ? 1 : 0][canSell ? 1 : 0] = result == 0 ? -1 : result;
        return result;
    }
}
```

now rewrite this same code to iterative:

```
class Solution {
    int[] prices;
    int len;
    int[][][] memo;

    public int maxProfit(int[] prices) {
        this.prices = prices;
        this.len = prices.length;
         memo = new int[len+1][2][2];

        return maxProfit();
    }

    int maxProfit() {
        for (int day = len - 1; day >= 0; day--) {
            for (int canBuy = 1; canBuy >= 0; canBuy--) {
                for (int canSell = 1; canSell >= 0; canSell--) {
                    int profitSell = canSell == 1 ? prices[day] + memo[day + 1][0][0] : 0;
                    int profitHold = memo[day + 1][1][canSell];
                    int profitBuy = canBuy == 1 ? memo[day + 1][0][1] - prices[day] : 0;

                    memo[day][canBuy][canSell] = Math.max(profitSell, Math.max(profitHold, profitBuy));
                }
            }
        }
        return memo[0][1][0];
    }

}
```

and it can be optimized to this solution to use O(1) memory:

```
class Solution {
    int[] prices;
    int len;

    public int maxProfit(int[] prices) {
        this.prices = prices;
        this.len = prices.length;

        return maxProfit();
    }

    int maxProfit() {
        int b0s1prev = 0;
        int b0s0 = 0;
        int b0s1 = 0;
        int b1s0 = 0;
        int b1s1 = 0;
        for (int day = len - 1; day >= 0; day--) {
            b0s1 = Math.max(prices[day] + b0s0, b1s1);
            b0s0 = b1s0;
            int b0s1prevmp = b0s1prev - prices[day];
            b1s0 = Math.max(b1s0, b0s1prevmp);
            b1s1 = Math.max(b0s1, b0s1prevmp);
            b0s1prev = b0s1;
        }
        return b1s0;
    }

}
```