# 🔥Brute Force to Efficient Method🤩 | Java | C++ | Python | JavaScript | C# | PHP

**Author:** Akhilesh21
**Votes:** 23
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4169470/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4169470/)

---

# 1st Method :- Brute force

Here's a step-by-step breakdown of how the code works:

1. Define a modulus value (`mod`) to handle the modulo operation to avoid integer overflow. It's set to 1000000007, which is commonly used in competitive programming.

2. Calculate `maxPosition`, which represents the maximum position the pointer can reach. This value is the minimum of half the number of steps (`steps / 2`) and `arrLen - 1`.

3. Create a 2D array `dp` to store the number of ways to reach each position at each step. It has dimensions `[steps + 1][maxPosition + 1]`.

4. Initialize `dp[0][0]` to 1, as there is one way to stay at position 0 after 0 steps.

5. Loop through each step `i` from 1 to `steps`.

6. For each step `i`, loop through each possible position `j` from 0 to `maxPosition`.

7. For each position, initialize `dp[i][j]` with the number of ways to stay at the same position as the previous step, which is `dp[i - 1][j]`.

8. If the current position `j` is greater than 0, add the number of ways to reach it by moving left (subtracting 1 from `j`).

9. If the current position `j` is less than the maximum position, add the number of ways to reach it by moving right (adding 1 to `j`).

10. Take the modulo `mod` for each update to prevent integer overflow.

11. Finally, the result is stored in `dp[steps][0]`, which represents the number of ways to reach the initial position (position 0) after taking the specified number of steps.
## Code
``` Java []
class Solution {
    public int numWays(int steps, int arrLen) {
        // Define a modulus value for taking the modulo operation to avoid overflow.
        int mod = 1000000007;
        
        // Calculate the maximum position the pointer can reach, which is the minimum of steps/2 and arrLen - 1.
        int maxPosition = Math.min(steps / 2, arrLen - 1);
        
        // Create a 2D array dp to store the number of ways to reach a specific position at each step.
        int[][] dp = new int[steps + 1][maxPosition + 1];
        
        // Initialize the number of ways to stay at position 0 after 0 steps to 1.
        dp[0][0] = 1;
        
        // Loop through the number of steps.
        for (int i = 1; i <= steps; i++) {
            for (int j = 0; j <= maxPosition; j++) {
                // Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
                dp[i][j] = dp[i - 1][j];
                
                // If the current position is greater than 0, add the number of ways to reach it by moving left.
                if (j > 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
                }
                
                // If the current position is less than the maximum position, add the number of ways to reach it by moving right.
                if (j < maxPosition) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
                }
            }
        }
        
        // The final result is stored in dp[steps][0], representing the number of ways to reach the initial position after taking 'steps' steps.
        return dp[steps][0];
    }
}
```
``` C++ []
class Solution {
public:
    int numWays(int steps, int arrLen) {
        const int mod = 1000000007;
        
        int maxPosition = std::min(steps / 2, arrLen - 1);
        
        // Create a 2D vector dp to store the number of ways to reach a specific position at each step.
        vector<vector<int>> dp(steps + 1, vector<int>(maxPosition + 1, 0));
        
        // Initialize the number of ways to stay at position 0 after 0 steps to 1.
        dp[0][0] = 1;
        
        // Loop through the number of steps.
        for (int i = 1; i <= steps; i++) {
            for (int j = 0; j <= maxPosition; j++) {
                // Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
                dp[i][j] = dp[i - 1][j];
                
                // If the current position is greater than 0, add the number of ways to reach it by moving left.
                if (j > 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
                }
                
                // If the current position is less than the maximum position, add the number of ways to reach it by moving right.
                if (j < maxPosition) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
                }
            }
        }
        
        // The final result is stored in dp[steps][0], representing the number of ways to reach the initial position after taking 'steps' steps.
        return dp[steps][0];
    }
};
```
``` Python []
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        # Define a modulus value for taking the modulo operation to avoid overflow.
        mod = 1000000007
        
        # Calculate the maximum position the pointer can reach, which is the minimum of steps/2 and arrLen - 1.
        maxPosition = min(steps // 2, arrLen - 1)
        
        # Create a 2D array dp to store the number of ways to reach a specific position at each step.
        dp = [[0] * (maxPosition + 1) for _ in range(steps + 1)]
        
        # Initialize the number of ways to stay at position 0 after 0 steps to 1.
        dp[0][0] = 1
        
        # Loop through the number of steps.
        for i in range(1, steps + 1):
            for j in range(maxPosition + 1):
                # Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
                dp[i][j] = dp[i - 1][j]
                
                # If the current position is greater than 0, add the number of ways to reach it by moving left.
                if j > 0:
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod
                
                # If the current position is less than the maximum position, add the number of ways to reach it by moving right.
                if j < maxPosition:
                    dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod
        
        # The final result is stored in dp[steps][0], representing the number of ways to reach the initial position after taking 'steps' steps.
        return dp[steps][0]

```
``` JavaScript []
var numWays = function(steps, arrLen) {
    // Define a modulus value for taking the modulo operation to avoid overflow.
    const mod = 1000000007;

    // Calculate the maximum position the pointer can reach, which is the minimum of steps/2 and arrLen - 1.
    const maxPosition = Math.min(Math.floor(steps / 2), arrLen - 1);

    // Create a 2D array dp to store the number of ways to reach a specific position at each step.
    const dp = new Array(steps + 1).fill().map(() => new Array(maxPosition + 1).fill(0));

    // Initialize the number of ways to stay at position 0 after 0 steps to 1.
    dp[0][0] = 1;

    // Loop through the number of steps.
    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j <= maxPosition; j++) {
            // Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
            dp[i][j] = dp[i - 1][j];

            // If the current position is greater than 0, add the number of ways to reach it by moving left.
            if (j > 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
            }

            // If the current position is less than the maximum position, add the number of ways to reach it by moving right.
            if (j < maxPosition) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
            }
        }
    }

    // The final result is stored in dp[steps][0], representing the number of ways to reach the initial position after taking 'steps' steps.
    return dp[steps][0];
};

```
``` C# []
public class Solution {
    public int NumWays(int steps, int arrLen) {
        // Define a modulus value for taking the modulo operation to avoid overflow.
        int mod = 1000000007;
        
        // Calculate the maximum position the pointer can reach, which is the minimum of steps/2 and arrLen - 1.
        int maxPosition = Math.Min(steps / 2, arrLen - 1);
        
        // Create a 2D array dp to store the number of ways to reach a specific position at each step.
        int[][] dp = new int[steps + 1][];
        for (int i = 0; i <= steps; i++) {
            dp[i] = new int[maxPosition + 1];
        }
        
        // Initialize the number of ways to stay at position 0 after 0 steps to 1.
        dp[0][0] = 1;
        
        // Loop through the number of steps.
        for (int i = 1; i <= steps; i++) {
            for (int j = 0; j <= maxPosition; j++) {
                // Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
                dp[i][j] = dp[i - 1][j];
                
                // If the current position is greater than 0, add the number of ways to reach it by moving left.
                if (j > 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
                }
                
                // If the current position is less than the maximum position, add the number of ways to reach it by moving right.
                if (j < maxPosition) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
                }
            }
        }
        
        // The final result is stored in dp[steps][0], representing the number of ways to reach the initial position after taking 'steps' steps.
        return dp[steps][0];
    }
}
```
``` PHP []
class Solution {
    function numWays($steps, $arrLen) {
        // Define a modulus value for taking the modulo operation to avoid overflow.
        $mod = 1000000007;
        
        // Calculate the maximum position the pointer can reach, which is the minimum of steps/2 and arrLen - 1.
        $maxPosition = min($steps / 2, $arrLen - 1);
        
        // Create a 2D array dp to store the number of ways to reach a specific position at each step.
        $dp = array_fill(0, $steps + 1, array_fill(0, $maxPosition + 1, 0));
        
        // Initialize the number of ways to stay at position 0 after 0 steps to 1.
        $dp[0][0] = 1;
        
        // Loop through the number of steps.
        for ($i = 1; $i <= $steps; $i++) {
            for ($j = 0; $j <= $maxPosition; $j++) {
                // Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
                $dp[$i][$j] = $dp[$i - 1][$j];
                
                // If the current position is greater than 0, add the number of ways to reach it by moving left.
                if ($j > 0) {
                    $dp[$i][$j] = ($dp[$i][$j] + $dp[$i - 1][$j - 1]) % $mod;
                }
                
                // If the current position is less than the maximum position, add the number of ways to reach it by moving right.
                if ($j < $maxPosition) {
                    $dp[$i][$j] = ($dp[$i][$j] + $dp[$i - 1][$j + 1]) % $mod;
                }
            }
        }
        
        // The final result is stored in dp[steps][0], representing the number of ways to reach the initial position after taking 'steps' steps.
        return $dp[$steps][0];
    }
}

```

# Complexity
#### Time complexity: O(steps^2)
The time complexity of the solution can be analyzed as follows:

1. The outer loop runs from 1 to `steps`, which means it iterates through each step, so it contributes O(steps) to the time complexity.

2. The inner loop runs from 0 to `maxPosition`, where `maxPosition` is the minimum of `steps/2` and `arrLen - 1`. In the worst case, this inner loop iterates `steps/2` times. So, the inner loop contributes O(steps) to the time complexity.

3. Inside the inner loop, there are constant time operations such as addition, subtraction, and modulo operations. These operations do not depend on the input size and can be considered O(1).

Combining all these factors, the overall time complexity of the solution is O(steps * maxPosition) in the worst case, where `maxPosition` is O(steps/2), so it simplifies to O(steps^2).

#### Space complexity: O(steps^2)
The space complexity is determined by the extra space used by the `dp` array.

1. The `dp` array is a 2D array with dimensions `[steps + 1][maxPosition + 1]`. So, it consumes space proportional to the product of `steps` and `maxPosition`.

2. `maxPosition` is defined as the minimum of `steps/2` and `arrLen - 1`, which ensures it is bounded and does not exceed `steps/2`. 

Combining these factors, the space complexity is O(steps * maxPosition), which simplifies to O(steps^2) in the worst case, as it depends on the number of steps.

This solution has a polynomial time and space complexity, which can handle reasonably large inputs, but may not be the most efficient for very large values of `steps`. Nevertheless, it provides an efficient way to solve the problem without running into time and space constraints for typical inputs.


![vote.jpg](./images/0.jpeg)

# 2nd Method :- Efficient Method

Here's a step-by-step breakdown of how the code works:

1. Define a modulus value (`kMod`) to handle the modulo operation and prevent integer overflow. It's set to 1,000,000,007, which is commonly used in competitive programming.

2. Calculate `n`, which represents the number of positions to consider. It is the minimum of `arrLen` and `steps/2 + 1`. This ensures that we only consider positions that are within a reasonable range.

3. Create an array `dp` to store the number of ways to stay at each position. It's initialized with all zeros, except `dp[0]`, which is set to 1 as there is one way to stay at position 0 after 0 steps.

4. Use a `while` loop to iterate through each step. The loop decrements the `steps` variable in each iteration.

5. In each step, create a new array `newDp` to store updated values for each position. This array will be used to compute the number of ways to stay at each position after the current step.

6. Use a `for` loop to iterate through each position `i` from 0 to `n`.

7. For each position, initialize `newDp[i]` with the value from the previous step, which represents the number of ways to stay at the same position.

8. Check if it's possible to move left (i - 1 >= 0), and if so, add the number of ways to reach the current position by moving left.

9. Check if it's possible to move right (i + 1 < n), and if so, add the number of ways to reach the current position by moving right.

10. Take the modulo operation with `kMod` for each `newDp[i]` to avoid integer overflow.

11. Update the `dp` array with the `newDp` array for the next step.

12. After completing all steps, the final result is stored in `dp[0]`, which represents the number of ways to reach the initial position (position 0) after taking the specified number of steps.

## Code
``` Java []
class Solution {
  public int numWays(int steps, int arrLen) {
    final int kMod = 1_000_000_007; // Define a modulus value to avoid integer overflow.
    final int n = Math.min(arrLen, steps / 2 + 1); // Calculate the number of positions we need to consider.
    // dp[i] := # of ways to stay on index i
    long[] dp = new long[n]; // Create an array to store the number of ways to stay at each position.
    dp[0] = 1; // Initialize the number of ways to stay at position 0 after 0 steps to 1.

    while (steps-- > 0) { // Loop through each step.
      long[] newDp = new long[n]; // Create a new array to store updated values for each position.
      for (int i = 0; i < n; ++i) { // Iterate through each position.
        newDp[i] = dp[i]; // Initialize with the number of ways to stay at the same position in the previous step.
        if (i - 1 >= 0)
          newDp[i] += dp[i - 1]; // Add the number of ways to reach the current position by moving left.
        if (i + 1 < n)
          newDp[i] += dp[i + 1]; // Add the number of ways to reach the current position by moving right.
        newDp[i] %= kMod; // Take the modulo to avoid integer overflow.
      }
      dp = newDp; // Update dp with the newDp array for the next step.
    }

    return (int) dp[0]; // The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
  }
}
```
``` C++ []
class Solution {
public:
    int numWays(int steps, int arrLen) {
        const int kMod = 1'000'000'007; // Define a modulus value to avoid integer overflow.
        const int n = std::min(arrLen, steps / 2 + 1); // Calculate the number of positions we need to consider.
        // dp[i] := # of ways to stay on index i
        vector<long> dp(n); // Create an array to store the number of ways to stay at each position.
        dp[0] = 1; // Initialize the number of ways to stay at position 0 after 0 steps to 1.

        while (steps-- > 0) { // Loop through each step.
            vector<long> newDp(n); // Create a new array to store updated values for each position.
            for (int i = 0; i < n; ++i) { // Iterate through each position.
                newDp[i] = dp[i]; // Initialize with the number of ways to stay at the same position in the previous step.
                if (i - 1 >= 0)
                    newDp[i] += dp[i - 1]; // Add the number of ways to reach the current position by moving left.
                if (i + 1 < n)
                    newDp[i] += dp[i + 1]; // Add the number of ways to reach the current position by moving right.
                newDp[i] %= kMod; // Take the modulo to avoid integer overflow.
            }
            dp = newDp; // Update dp with the newDp array for the next step.
        }

        return static_cast<int>(dp[0]); // The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
    }
};
```
``` Python []
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        # Define a modulus value for taking the modulo operation to avoid integer overflow.
        kMod = 1000000007
        
        # Calculate the number of positions we need to consider, which is the minimum of arrLen and steps // 2 + 1.
        n = min(arrLen, steps // 2 + 1)
        
        # Create an array dp to store the number of ways to stay at each position.
        dp = [0] * n
        
        # Initialize the number of ways to stay at position 0 after 0 steps to 1.
        dp[0] = 1

        # Loop through each step.
        while steps > 0:
            # Create a new array newDp to store updated values for each position.
            newDp = [0] * n
            
            # Iterate through each position.
            for i in range(n):
                # Initialize with the number of ways to stay at the same position in the previous step.
                newDp[i] = dp[i]
                
                # Add the number of ways to reach the current position by moving left if it's a valid move.
                if i - 1 >= 0:
                    newDp[i] += dp[i - 1]
                
                # Add the number of ways to reach the current position by moving right if it's a valid move.
                if i + 1 < n:
                    newDp[i] += dp[i + 1]
                
                # Take the modulo to avoid integer overflow.
                newDp[i] %= kMod

            # Update dp with the newDp array for the next step.
            dp = newDp
            
            # Decrement the number of steps.
            steps -= 1

        # The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
        return dp[0]
```
``` JavaScript []
var numWays = function(steps, arrLen) {
    // Define a modulus value for taking the modulo operation to avoid overflow.
    const kMod = 1000000007;
    
    // Calculate the number of positions we need to consider, which is the minimum of arrLen and steps/2 + 1.
    const n = Math.min(arrLen, Math.floor(steps / 2) + 1);
    
    // Create an array dp to store the number of ways to stay at each position.
    const dp = new Array(n).fill(0);
    
    // Initialize the number of ways to stay at position 0 after 0 steps to 1.
    dp[0] = 1;

    // Loop through each step.
    while (steps > 0) {
        // Create a new array newDp to store updated values for each position.
        const newDp = new Array(n).fill(0);
        
        // Iterate through each position.
        for (let i = 0; i < n; i++) {
            // Initialize with the number of ways to stay at the same position in the previous step.
            newDp[i] = dp[i];
            
            // Add the number of ways to reach the current position by moving left if it's a valid move.
            if (i - 1 >= 0) {
                newDp[i] += dp[i - 1];
            }
            
            // Add the number of ways to reach the current position by moving right if it's a valid move.
            if (i + 1 < n) {
                newDp[i] += dp[i + 1];
            }
            
            // Take the modulo to avoid integer overflow.
            newDp[i] %= kMod;
        }

        // Update dp with the newDp array for the next step.
        dp.splice(0, n, ...newDp);

        // Decrement the number of steps.
        steps--;
    }

    // The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
    return dp[0];
};
```
``` C# []
public class Solution {
    public int NumWays(int steps, int arrLen) {
        // Define a modulus value for taking the modulo operation to avoid integer overflow.
        const int kMod = 1_000_000_007;

        // Calculate the number of positions we need to consider, which is the minimum of arrLen and steps / 2 + 1.
        int n = Math.Min(arrLen, steps / 2 + 1);

        // Create an array dp to store the number of ways to stay at each position.
        long[] dp = new long[n];

        // Initialize the number of ways to stay at position 0 after 0 steps to 1.
        dp[0] = 1;

        // Loop through each step.
        while (steps-- > 0) {
            // Create a new array newDp to store updated values for each position.
            long[] newDp = new long[n];

            // Iterate through each position.
            for (int i = 0; i < n; ++i) {
                // Initialize with the number of ways to stay at the same position in the previous step.
                newDp[i] = dp[i];

                // Add the number of ways to reach the current position by moving left if it's a valid move.
                if (i - 1 >= 0) {
                    newDp[i] += dp[i - 1];
                }

                // Add the number of ways to reach the current position by moving right if it's a valid move.
                if (i + 1 < n) {
                    newDp[i] += dp[i + 1];
                }

                // Take the modulo to avoid integer overflow.
                newDp[i] %= kMod;
            }

            // Update dp with the newDp array for the next step.
            dp = newDp;
        }

        // The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
        return (int)dp[0];
    }
}

```
``` PHP []
class Solution {
    function numWays($steps, $arrLen) {
        // Define a modulus value for taking the modulo operation to avoid integer overflow.
        $kMod = 1000000007;

        // Calculate the number of positions we need to consider, which is the minimum of arrLen and steps / 2 + 1.
        $n = min($arrLen, intval($steps / 2) + 1);

        // Create an array dp to store the number of ways to stay at each position.
        $dp = array_fill(0, $n, 0);

        // Initialize the number of ways to stay at position 0 after 0 steps to 1.
        $dp[0] = 1;

        // Loop through each step.
        while ($steps > 0) {
            // Create a new array newDp to store updated values for each position.
            $newDp = array_fill(0, $n, 0);

            // Iterate through each position.
            for ($i = 0; $i < $n; ++$i) {
                // Initialize with the number of ways to stay at the same position in the previous step.
                $newDp[$i] = $dp[$i];

                // Add the number of ways to reach the current position by moving left if it's a valid move.
                if ($i - 1 >= 0) {
                    $newDp[$i] += $dp[$i - 1];
                }

                // Add the number of ways to reach the current position by moving right if it's a valid move.
                if ($i + 1 < $n) {
                    $newDp[$i] += $dp[$i + 1];
                }

                // Take the modulo to avoid integer overflow.
                $newDp[$i] %= $kMod;
            }

            // Update dp with the newDp array for the next step.
            $dp = $newDp;

            // Decrement the number of steps.
            $steps--;
        }

        // The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
        return (int)$dp[0];
    }
}

```

## Complexity
#### Time complexity: O(steps^2)
The time complexity of the solution can be analyzed as follows:

1. The outer loop iterates while `steps` is greater than 0. Since we decrement `steps` by 1 in each iteration, the loop runs for `steps` iterations.

2. Within the outer loop, there is an inner loop that iterates from 0 to `n`, where `n` is the minimum of `arrLen` and `steps/2 + 1`. In the worst case, this inner loop runs `n` times.

3. Inside the inner loop, there are constant time operations such as addition, subtraction, and modulo operations. These operations do not depend on the input size and can be considered O(1).

Combining all these factors, the overall time complexity of the solution is O(steps * n) in the worst case, where `n` is O(steps/2). So, it simplifies to O(steps^2).

#### Space complexity: O(steps)
The space complexity is determined by the extra space used by the arrays.

1. The `dp` array has a size of `n`. In the worst case, `n` is O(steps/2), so the space complexity for `dp` is O(steps).

2. The `newDp` array also has a size of `n`, contributing O(steps) to space complexity.

3. There are other constant space variables such as `kMod`, `n`, and loop control variables, which can be considered O(1).

Combining these factors, the space complexity is O(steps) in the worst case, as it depends on the number of steps.

![upvote.png](./images/1.png)
# Up Vote Guys