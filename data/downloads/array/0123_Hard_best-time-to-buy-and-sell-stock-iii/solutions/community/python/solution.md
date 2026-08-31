# Python DP solution, 120ms

**Author:** clue
**Votes:** 146
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/39743/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/39743/)

---

Two passes through the list, O(n) time, O(n) space:

     
    def maxProfit(self, prices):
        if not prices:
            return 0
        
        # forward traversal, profits record the max profit 
        # by the ith day, this is the first transaction
        profits = []
        max_profit = 0
        current_min = prices[0]
        for price in prices:
            current_min = min(current_min, price)
            max_profit = max(max_profit, price - current_min)
            profits.append(max_profit)
        
        # backward traversal, max_profit records the max profit
        # after the ith day, this is the second transaction 
        total_max = 0    
        max_profit = 0
        current_max = prices[-1]
        for i in range(len(prices) - 1, -1, -1):
            current_max = max(current_max, prices[i])
            max_profit = max(max_profit, current_max - prices[i])
            total_max = max(total_max, max_profit + profits[i])
            
        return total_max