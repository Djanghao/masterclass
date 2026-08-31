# DP (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/5325844/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/5325844/)

---

# Approach
DP

For each egg and floor combination, the minimum number of moves required is calculated by adding the minimum number of moves required to determine the value of f for the current egg and floor combination minus 1, with the previous egg and floor combination, and adding 1. This is done for both eggs.

If the minimum number of moves exceeds n, the current floor is returned.

If the minimum number of moves is less than or equal to n, -1 is returned.

# Complexity
- Time complexity:
$$O(n^2)$$, where n is the number of floors. This is because the outer loop iterates over each floor from 1 to n, and the inner loop iterates over each egg from 1 to 2.

- Space complexity:
$$O(n)$$, where n is the number of floors. This is because the 2D array dp has a size of n+1 by 3, which requires O(n) space.

# Code
``` python3 []
class Solution:
    def twoEggDrop(self, n: int) -> int:
        # Initialize a 2D array dp to store the minimum number of moves required 
        # to determine the value of f for each egg and floor combination.
        dp = [[0]*(n+1) for _ in range(3)]
        
        # Iterate over each floor from 1 to n.
        for i in range(1, n+1):
            # Iterate over each egg from 1 to 2.
            for j in range(1, 3):
                # Calculate the minimum number of moves required to determine the 
                # value of f for the current egg and floor combination.
                dp[j][i] = dp[j][i-1] + dp[j-1][i-1] + 1
                
                # If the minimum number of moves exceeds n, return the current floor.
                if dp[j][i] >= n:
                    return i
        
        # If the minimum number of moves is less than or equal to n, return -1.
        return -1
        
```
``` javascript []
/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    // Initialize a 2D array dp to store the minimum number of moves required 
    // to determine the value of f for each egg and floor combination.
    let dp = Array.from({length: 3}, () => Array(n+1).fill(0));
    
    // Iterate over each floor from 1 to n.
    for (let i = 1; i <= n; i++) {
        // Iterate over each egg from 1 to 2.
        for (let j = 1; j <= 2; j++) {
            // Calculate the minimum number of moves required to determine the 
            // value of f for the current egg and floor combination.
            dp[j][i] = dp[j][i-1] + dp[j-1][i-1] + 1;
            
            // If the minimum number of moves exceeds n, return the current floor.
            if (dp[j][i] >= n) {
                return i;
            }
        }
    }
    
    // If the minimum number of moves is less than or equal to n, return -1.
    return -1;
};
```
``` php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function twoEggDrop($n) {
        // Initialize a 2D array dp to store the minimum number of moves required 
        // to determine the value of f for each egg and floor combination.
        $dp = array_fill(0, 3, array_fill(0, $n+1, 0));
        
        // Iterate over each floor from 1 to n.
        for ($i = 1; $i <= $n; $i++) {
            // Iterate over each egg from 1 to 2.
            for ($j = 1; $j <= 2; $j++) {
                // Calculate the minimum number of moves required to determine the 
                // value of f for the current egg and floor combination.
                $dp[$j][$i] = $dp[$j][$i-1] + $dp[$j-1][$i-1] + 1;
                
                // If the minimum number of moves exceeds n, return the current floor.
                if ($dp[$j][$i] >= $n) {
                    return $i;
                }
            }
        }
        
        // If the minimum number of moves is less than or equal to n, return -1.
        return -1;
    }
}
```