# C# Priority Queue-Based Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/5761265/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/5761265/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of processing orders and managing the backlog, we can use two priority queues (heaps) to efficiently match buy and sell orders:

Buy Orders: We need a max-heap to store the buy orders because we want to match the highest-priced buy order first.
Sell Orders: We need a min-heap to store the sell orders because we want to match the lowest-priced sell order first.
___

# Approach
<!-- Describe your approach to solving the problem. -->Priority Queues:

buyBacklog: A max-heap stores buy orders with the highest prices at the top.
sellBacklog: A min-heap stores sell orders with the lowest prices at the top.
Order Matching:

For buy orders, we check if they can be matched with the smallest sell order in the sellBacklog.
For sell orders, we check if they can be matched with the largest buy order in the buyBacklog.
Matching continues until either the current order is exhausted or no more valid matches exist.
Handling Remaining Orders:

If there are any unprocessed orders after matching, they are added to their respective backlogs (buy or sell).

Total Backlog Calculation:
After processing all orders, we sum the remaining orders in both backlogs and return the result modulo 10^9 + 7.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n log n), where 'n' is the number of orders.
____

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n), due to the space used by the priority queues for storing and buying sell orders.
___

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    private const int MOD = 1000000007;

    public int GetNumberOfBacklogOrders(int[][] orders) {
        // Max-heap for buy orders (store negative price to simulate max-heap using PriorityQueue)
        PriorityQueue<(int price, int amount), int> buyBacklog = new PriorityQueue<(int price, int amount), int>(Comparer<int>.Create((x, y) => y.CompareTo(x)));
        
        // Min-heap for sell orders
        PriorityQueue<(int price, int amount), int> sellBacklog = new PriorityQueue<(int price, int amount), int>();
        
        foreach (var order in orders) {
            int price = order[0];
            int amount = order[1];
            int orderType = order[2];
            
            if (orderType == 0) {
                // Buy order
                while (amount > 0 && sellBacklog.Count > 0 && sellBacklog.Peek().price <= price) {
                    var sellOrder = sellBacklog.Dequeue();
                    int sellAmount = Math.Min(amount, sellOrder.amount);
                    amount -= sellAmount;
                    sellOrder.amount -= sellAmount;
                    
                    if (sellOrder.amount > 0) {
                        sellBacklog.Enqueue(sellOrder, sellOrder.price);
                    }
                }
                if (amount > 0) {
                    buyBacklog.Enqueue((price, amount), price);
                }
            } else {
                // Sell order
                while (amount > 0 && buyBacklog.Count > 0 && buyBacklog.Peek().price >= price) {
                    var buyOrder = buyBacklog.Dequeue();
                    int buyAmount = Math.Min(amount, buyOrder.amount);
                    amount -= buyAmount;
                    buyOrder.amount -= buyAmount;
                    
                    if (buyOrder.amount > 0) {
                        buyBacklog.Enqueue(buyOrder, buyOrder.price);
                    }
                }
                if (amount > 0) {
                    sellBacklog.Enqueue((price, amount), price);
                }
            }
        }

        // Calculate total backlog orders
        long totalOrders = 0;
        while (buyBacklog.Count > 0) {
            totalOrders = (totalOrders + buyBacklog.Dequeue().amount) % MOD;
        }
        while (sellBacklog.Count > 0) {
            totalOrders = (totalOrders + sellBacklog.Dequeue().amount) % MOD;
        }

        return (int)totalOrders;
    }
}
```