# DP (or you can just return True)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game/solutions/5330718/](https://leetcode.com/problems/stone-game/solutions/5330718/)

---

# Approach
**1)** The approach used in this solution is dynamic programming.

The dp array is a 2D array that stores the maximum number of stones that can be obtained by the player who is currently playing, given the current state of the game.

The dp[i][j] represents the maximum number of stones that can be obtained by the player who is currently playing, starting from the ith pile and ending at the jth pile.

The base case is when i equals j, in which case dp[i][j] is equal to the number of stones in the ith pile.

The recursive case is when i is not equal to j, in which case dp[i][j] is the maximum of the difference between the number of stones in the ith pile and the maximum number of stones that can be obtained by the opponent, starting from the i+1th pile and ending at the jth pile, and the difference between the number of stones in the jth pile and the maximum number of stones that can be obtained by the opponent, starting from the ith pile and ending at the j-1th pile.

**2)** If Alice plays first and always plays optimally, then she will always win the game. She can always choose a move that forces Bob to respond with a smaller number of stones.
So, the answer always be True.

# Complexity
- Time complexity:
$$O(n^2)$$, where n is the number of piles in the input list.

- Space complexity:
$$O(n^2)$$ because we are using a 2D array dp of size n x n to store the maximum number of stones that can be obtained by each player for all possible subproblems.

# Code
``` python3 []
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        # Initialize dynamic programming table
        dp = [[0] * len(piles) for _ in range(len(piles))]
        
        # Base case: Initially, each pile has its own value
        for i in range(len(piles)):
            dp[i][i] = piles[i]
        
        # Fill the table
        for p in range(1, len(piles)):
            for i in range(len(piles) - p):
                # Calculate the maximum score for each pair of piles
                dp[i][i + p] = max(piles[i] - dp[i + 1][i + p], piles[i + p] - dp[i][i + p - 1])
        
        # Return the result
        return dp[0][-1] > 0
        
```
``` javascript []
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    // Initialize dynamic programming table
    const dp = Array.from({ length: piles.length }, () => Array(piles.length).fill(0));
    
    // Base case: Initially, each pile has its own value
    for (let i = 0; i < piles.length; i++) {
        dp[i][i] = piles[i];
    }
    
    // Fill the table
    for (let p = 1; p < piles.length; p++) {
        for (let i = 0; i < piles.length - p; i++) {
            // Calculate the maximum score for each pair of piles
            dp[i][i + p] = Math.max(piles[i] - dp[i + 1][i + p], piles[i + p] - dp[i][i + p - 1]);
        }
    }
    
    // Return the result
    return dp[0][piles.length - 1] > 0;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $piles
     * @return Boolean
     */
    function stoneGame($piles) {
        // Initialize dynamic programming table
        $dp = array_fill(0, count($piles), array_fill(0, count($piles), 0));
        
        // Base case: Initially, each pile has its own value
        for ($i = 0; $i < count($piles); $i++) {
            $dp[$i][$i] = $piles[$i];
        }
        
        // Fill the table
        for ($p = 1; $p < count($piles); $p++) {
            for ($i = 0; $i < count($piles) - $p; $i++) {
                // Calculate the maximum score for each pair of piles
                $dp[$i][$i + $p] = max($piles[$i] - $dp[$i + 1][$i + $p], $piles[$i + $p] - $dp[$i][$i + $p - 1]);
            }
        }
        
        // Return the result
        return $dp[0][count($piles) - 1] > 0;
    }
}
```