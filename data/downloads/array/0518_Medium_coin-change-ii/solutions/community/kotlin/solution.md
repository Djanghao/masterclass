# 🔥🔥🔥🔥🔥Beats 100% | js | ts | java | c | C++ | C# | python | python3 | php | kotlin | 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 2
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/3893079/](https://leetcode.com/problems/coin-change-ii/solutions/3893079/)

---


![download.jpg](./images/0.jpeg)

```Python3 []
from typing import List

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1
        
        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] += dp[i - coin]
        
        return dp[amount]
```
```python []
class Solution(object):
    def change(self, amount, coins):
        """
        :type amount: int
        :type coins: List[int]
        :rtype: int
        """
        # Initialize a DP array to store the number of combinations for each amount
        dp = [0] * (amount + 1)
        dp[0] = 1  # There is one way to make amount 0 (using no coins)
        
        # Iterate over the coins and update the DP array
        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] += dp[i - coin]
        
        return dp[amount]
```
```C++ []
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1; // There's one way to make amount 0, i.e., using no coins
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; ++i) {
                dp[i] += dp[i - coin];
            }
        }
        
        return dp[amount];
    }
};
```
```java []
class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1; // Base case: There's one way to make amount 0 (no coins).

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }

        return dp[amount];
    }
}
```
```C []
int change(int amount, int* coins, int coinsSize){
    int dp[amount + 1];
    memset(dp, 0, sizeof(dp));
    dp[0] = 1;  // There's one way to make up amount 0
    
    for (int i = 0; i < coinsSize; i++) {
        for (int j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    
    return dp[amount];
}
```
```C# []
public class Solution {
    public int Change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1; // There's one way to make up amount 0 (by not using any coins)

        foreach (int coin in coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }

        return dp[amount];
    }
}
```
```javascript []
var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // Base case: there's one way to make amount 0, which is using no coins
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};
```
```Typescript []
function change(amount: number, coins: number[]): number {
    const dp: number[][] = new Array(coins.length + 1).fill(0).map(() => new Array(amount + 1).fill(0));

    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1; // There's one way to make amount 0, using no coins
    }

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j] + (j >= coins[i - 1] ? dp[i][j - coins[i - 1]] : 0);
        }
    }

    return dp[coins.length][amount];
}
```
```PHP []
class Solution {
    function change($amount, $coins) {
        $dp = array_fill(0, count($coins) + 1, array_fill(0, $amount + 1, 0));
        
        // There's one way to make up amount 0 using 0 coins (no coins).
        for ($i = 0; $i <= count($coins); $i++) {
            $dp[$i][0] = 1;
        }
        
        for ($i = 1; $i <= count($coins); $i++) {
            for ($j = 1; $j <= $amount; $j++) {
                // If the current coin's value is greater than the current amount,
                // we can't use this coin to make up the amount. So, we use the value
                // from the previous row for the same amount.
                if ($coins[$i - 1] > $j) {
                    $dp[$i][$j] = $dp[$i - 1][$j];
                } else {
                    // We can either include the current coin or exclude it.
                    // The total combinations are the sum of these two possibilities.
                    $dp[$i][$j] = $dp[$i - 1][$j] + $dp[$i][$j - $coins[$i - 1]];
                }
            }
        }
        
        return $dp[count($coins)][$amount];
    }
}
```
```Kotlin []
class Solution {
    fun change(amount: Int, coins: IntArray): Int {
        val dp = IntArray(amount + 1)
        dp[0] = 1
        
        for (coin in coins) {
            for (i in coin..amount) {
                dp[i] += dp[i - coin]
            }
        }
        
        return dp[amount]
    }
}
```