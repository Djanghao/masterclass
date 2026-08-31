# Python3 / Rust / Java/ JavaScript - Dynamic Programming

**Author:** artemstr31
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/4346996/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/4346996/)

---

# Intuition
The given code solves the problem of finding the maximum profit achievable by making at most $$k$$ transactions in a given $$prices$$ list.

# Approach
1. The code initializes a 2D list $$transactions$$, where each row represents a transaction, and the columns represent the minimum buying price and maximum profit for that transaction.
2. It iterates through the given prices and updates the transactions list for each transaction.
3. It uses a nested loop to iterate through each transaction, updating the minimum buying price and maximum profit based on the current stock price and the previous profit.
4. Finally, it returns the maximum profit from the last transaction.

# Complexity
- Time complexity: $$O(k\u22C5n)$$, where $$k$$ is the maximum number of transactions allowed, and $$n$$ is the length of the $$prices$$ list. The nested loop iterates over the transactions and prices.

- Space complexity: $$O(k)$$ for storing the $$transactions$$ list.

# Code
``` python []
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        transactions = [[1000, 0] for i in range(k)]

        for price in prices:
            prev_profit = 0
            for i in range(k):
                transactions[i][0] = min(transactions[i][0], price - prev_profit)
                transactions[i][1] = max(transactions[i][1], price - transactions[i][0])
                prev_profit = transactions[i][1]

        return transactions[k-1][1]
```
``` rust []
impl Solution {
    pub fn max_profit(k: i32, prices: Vec<i32>) -> i32 {
        let k: usize = k as usize;
        let mut transactions: Vec<[i32; 2]> = vec![[1000, 0]; k];
        let mut prev_profit: i32 = 0;

        for price in prices {
            prev_profit = 0;
            for i in 0..k {
              transactions[i][0] = transactions[i][0].min(price - prev_profit);
              transactions[i][1] = transactions[i][1].max(price - transactions[i][0]);
              prev_profit = transactions[i][1];
            }
        }

        transactions[k-1][1]
    }
}
```
``` java []
class Solution {
    public int maxProfit(int k, int[] prices) {
        int[][] transactions = new int[k][2];
        for (int i = 0; i < k; i++) {
            transactions[i][0] = 1000;
            transactions[i][1] = 0;
        }

        int prevProfit = 0;

        for (int i = 0; i < prices.length; i++) {
            prevProfit = 0;
            for (int j = 0; j < k; j++) {
                transactions[j][0] = Math.min(transactions[j][0], prices[i] - prevProfit);
                transactions[j][1] = Math.max(transactions[j][1], prices[i] - transactions[j][0]);
                prevProfit = transactions[j][1];
            }
        }

        return transactions[k-1][1];
    }
}

```
``` javascript []
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let transactions = Array.from({ length: k }, () => [1000, 0]);
    let prev_profit = 0;

    for (let i = 0; i < prices.length; i++) {
        prev_profit = 0;
        for (let j = 0; j < k; j++) {
            transactions[j][0] = Math.min(transactions[j][0], prices[i] - prev_profit);
            transactions[j][1] = Math.max(transactions[j][1], prices[i] - transactions[j][0]);
            prev_profit = transactions[j][1];
        }
    }

    return transactions[k-1][1];
};
```