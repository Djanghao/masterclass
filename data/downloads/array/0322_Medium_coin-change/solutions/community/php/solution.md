# Simple DP (short solution with explanation)

**Author:** Angielf
**Votes:** 3
**Link:** [https://leetcode.com/problems/coin-change/solutions/5494293/](https://leetcode.com/problems/coin-change/solutions/5494293/)

---

# Approach
This solution uses dynamic programming.

1. Initialize a dynamic programming (DP) array dp with size amount + 1. 
- Each element in dp represents the minimum number of coins required to make up the corresponding amount.
- Set the base case: dp[0] is set to 0, as we don't need any coins to make up an amount of 0.
2. Iterate over each amount from 1 to amount. For each amount i, iterate over each coin in the coins list.
- If we can use the current coin to make up the amount i, update the dp value for that amount. The updated value is the minimum of the current dp[i] and dp[i - coin] + 1, where dp[i - coin] represents the minimum number of coins required to make up the amount i - coin using all the coins except the current coin.
3. After the outer loop, check if the final value in the dp array is not equal to infinity. If it's not, return the final value. Otherwise, return -1, indicating that it's not possible to make up the amount using the given coins.


# Complexity
- Time complexity:
$$O(n * amount)$$, where n is the length of the coins list. This is because of nested loops.

- Space complexity:
$$O(amount)$$, as we only need to store the dp array.

# Code
``` python3 []
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float("inf")] * (amount + 1)
    
        # Base case: if we have 0 amount, we don't need any coins
        dp[0] = 0
        
        for i in range(1, amount + 1):
            for coin in coins:
                # If we can use this coin to make up the amount, update dp value
                if i - coin >= 0:
                    dp[i] = min(dp[i], dp[i - coin] + 1)
        
        # Return the final value in dp array or -1 if it's not possible
        return dp[amount] if dp[amount] != float("inf") else -1
        
```
``` javascript []
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    
    // Base case: if we have 0 amount, we don't need any coins
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            // If we can use this coin to make up the amount, update dp value
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // Return the final value in dp array or -1 if it's not possible
    return dp[amount] !== Infinity ? dp[amount] : -1;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $coins
     * @param Integer $amount
     * @return Integer
     */
    function coinChange($coins, $amount) {
        $dp = array_fill(0, $amount + 1, PHP_INT_MAX);
    
        // Base case: if we have 0 amount, we don't need any coins
        $dp[0] = 0;
        
        for ($i = 1; $i <= $amount; $i++) {
            foreach ($coins as $coin) {
                // If we can use this coin to make up the amount, update dp value
                if ($i - $coin >= 0) {
                    $dp[$i] = min($dp[$i], $dp[$i - $coin] + 1);
                }
            }
        }
        
        // Return the final value in dp array or -1 if it's not possible
        return $dp[$amount] !== PHP_INT_MAX ? $dp[$amount] : -1;
    }
}
```