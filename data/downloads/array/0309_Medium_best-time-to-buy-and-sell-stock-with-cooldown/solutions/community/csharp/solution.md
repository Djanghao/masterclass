# C# Solution using dynamic programming

**Author:** akbarbuneri
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2943300/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2943300/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This solution uses dynamic programming to solve the problem. The idea is to keep track of the maximum profit we can achieve at each day by either selling or buying the stock
# Approach
<!-- Describe your approach to solving the problem. -->
We create two arrays, sell and buy, to store the maximum profit we can achieve at each day by selling or buying the stock. sell[i] represents the maximum profit we can achieve on the ith day by selling the stock and buy[i] represents the maximum profit we can achieve on the ith day by buying the stock.

We initialize sell[0] and buy[0] as follows:
```
sell[0] = 0
buy[0] = -prices[0]
```
For each day i, we calculate sell[i] and buy[i] as follows:
```
sell[i] = max(sell[i-1], buy[i-1] + prices[i])
buy[i] = max(buy[i-1], sell[i-2] - prices[i])
```
The first equation represents the maximum profit we can achieve on the ith day by either selling the stock that we bought on the previous day or selling the stock that we bought before the previous day and taking the cooldown into account.

The second equation represents the maximum profit we can achieve on the ith day by either buying the stock or not doing anything.

Finally, the maximum profit we can achieve is the value in sell[n-1], where n is the number of days.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The complexity of this solution is O(n), where n is the number of days. We only need to traverse the prices array once to calculate the maximum profit, so the time complexity is linear. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also O(n), as we use two arrays of size n to store the maximum profit at each day.
# Code
```
public class Solution {
       public  int MaxProfit(int[] prices)
        {
            int n = prices.Length;
            if (n == 0 || n == 1)
            {
                return 0;
            }

            int[] sell = new int[n];
            int[] buy = new int[n];

            buy[0] = -prices[0];
            sell[0] = 0;

            for (int i = 1; i < n; i++)
            {
                sell[i] = Math.Max(sell[i - 1], buy[i - 1] + prices[i]);
                if (i == 1)
                {
                    buy[i] = Math.Max(buy[i - 1], -prices[i]);
                }
                else
                {
                    buy[i] = Math.Max(buy[i - 1], sell[i - 2] - prices[i]);
                }
            }

            return sell[n - 1];
        }
    }

```