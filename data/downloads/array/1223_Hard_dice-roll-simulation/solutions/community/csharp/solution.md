# C# | Runtime beats 80.00%, Memory beats 66.67% [EXPLAINED]

**Author:** r9n
**Votes:** 4
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/5806174/](https://leetcode.com/problems/dice-roll-simulation/solutions/5806174/)

---

# Intuition
Imagine you're rolling a dice and you want to count all possible sequences of rolls. However, each face of the dice has a limit on how many times it can appear consecutively. For instance, if the limit is 2 for face 1, you can roll face 1 twice in a row but not three times. So, you need to count all valid sequences where no face appears more than its allowed consecutive times.

# Approach
Dynamic Programming Table: We use a table dp[i][j][k] where:

i is the number of rolls.
j is the dice face (from 1 to 6).
k is how many times face j appears consecutively.
Initialization: For one roll, each face can appear once, so we start with dp[1][j][1] = 1 for all faces.

Filling the Table:

For each roll count i, update the table based on previous roll counts:
If switching faces, add ways from the previous face counts.
If continuing the same face, just increase the consecutive count if it doesn\u2019t exceed the limit.
Result: After processing all rolls, sum up all valid sequences for exactly n rolls.

# Complexity
- Time complexity:
 O(n * 6 * 6 * maxRollMax) which simplifies to O(n) in practice, since maxRollMax (maximum consecutive roll limit) is a small constant (15).

- Space complexity:
 O(n * 6 * maxRollMax) which is manageable given the constraints.

# Code
```csharp []
public class Solution {
    private const int MOD = 1000000007;
    
    public int DieSimulator(int n, int[] rollMax) {
        // dp[i][j][k] => Number of ways to roll i times, ending with face j and k consecutive j's
        int[,,] dp = new int[n + 1, 6, 16]; // We use 16 to cover the max rollMax[i] (which is 15)
        
        // Base case: For one roll, there's one way to get each face with 1 occurrence
        for (int j = 0; j < 6; j++) {
            dp[1, j, 1] = 1;
        }
        
        // Iterate over the number of rolls
        for (int i = 2; i <= n; i++) {
            // Iterate over each possible dice face (j)
            for (int j = 0; j < 6; j++) {
                // Iterate over each previous dice face (prev)
                for (int prev = 0; prev < 6; prev++) {
                    if (prev != j) {
                        // Transition from any previous dice face to a new face j
                        for (int k = 1; k <= rollMax[prev]; k++) {
                            dp[i, j, 1] = (dp[i, j, 1] + dp[i - 1, prev, k]) % MOD;
                        }
                    }
                }
                // Continue the current face j (consecutive rolls)
                for (int k = 1; k < rollMax[j]; k++) {
                    dp[i, j, k + 1] = (dp[i, j, k + 1] + dp[i - 1, j, k]) % MOD;
                }
            }
        }
        
        // Sum all valid sequences of length n
        int result = 0;
        for (int j = 0; j < 6; j++) {
            for (int k = 1; k <= rollMax[j]; k++) {
                result = (result + dp[n, j, k]) % MOD;
            }
        }
        
        return result;
    }
}

```