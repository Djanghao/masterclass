# ✅Beats 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 298
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3667440/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3667440/)

---

**Explore Related Problems to Enhance Conceptual Understanding**
1. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
2. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
3. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/)
4. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/)
5. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/)

# Intuition
The intuition behind the solution is to keep track of the minimum cost to buy a stock at each day and the maximum profit that can be achieved by selling the stock at each day.

# Approach:
1. Initialize two variables: `buy` and `sell`. Set `buy` to negative infinity and `sell` to zero. These variables will keep track of the maximum profit at each day.
2. Iterate through the prices of the stocks starting from the first day.
3. Update the `buy` variable by taking the maximum of its current value and the previous `sell` value minus the stock price. This represents the maximum profit after buying the stock.
   `buy = max(buy, sell - price)`

4. Update the `sell` variable by taking the maximum of its current value and the previous `buy` value plus the stock price minus the transaction fee. This represents the maximum profit after selling the stock.
   `sell = max(sell, buy + price - fee)`

5. After iterating through all the prices, the maximum profit will be stored in the `sell` variable.
6. Return the value of `sell` as the maximum profit.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code

```C++ []
class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int buy = INT_MIN;
        int sell = 0;

        for (int price : prices) {
            buy = max(buy, sell - price);
            sell = max(sell, buy + price - fee);
        }

        return sell;
    }
};
```
```Java []
class Solution {
    public int maxProfit(int[] prices, int fee) {
        int buy = Integer.MIN_VALUE;
        int sell = 0;

        for (int price : prices) {
            buy = Math.max(buy, sell - price);
            sell = Math.max(sell, buy + price - fee);
        }

        return sell;
    }
}
```
```Python3 []
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        buy = float('-inf')
        sell = 0

        for price in prices:
            buy = max(buy, sell - price)
            sell = max(sell, buy + price - fee)

        return sell
```

Related problems

![CUTE_CAT.png](./images/0.png)

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**


