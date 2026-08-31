# ✅ 92.86% DP Optimized

**Author:** vanAmsen
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4171396/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4171396/)

---

# Intuition
Initially, when we read the problem, it appears to be a classical dynamic programming problem involving movements on a grid or array. At each step, we have three choices: to move left, to move right, or to stay in place. However, the problem comes with constraints: 
1. We can't move outside the array.
2. We need to return to the starting point after all the steps.

This means the further we move away from the starting point, the more steps it'll take to return, limiting how far we can actually go.

# Approach
We create a dynamic programming table where each entry `dp[i][j]` represents the number of ways to be at index `j` after `i` steps. To compute this value, we consider three possible previous states: 
1. Being at index `j` after `i-1` steps.
2. Being at index `j-1` (to the left) after `i-1` steps.
3. Being at index `j+1` (to the right) after `i-1` steps.

Given this, the recurrence relation is:
```
dp[i][j] = dp[i-1][j] + dp[i-1][j-1] + dp[i-1][j+1]
```
However, we also ensure we don't go out of bounds of the array or move too far away from the starting point that we can't return in the remaining steps.

To further optimize the space, we realize that to compute the values for step `i`, we only need values from step `i-1`. Hence, instead of storing values for all steps, we can just store values for two steps: the current step and the previous step. This allows us to swap the arrays for each step, saving memory.

# Complexity
- Time complexity: The time complexity remains `O(steps * arrLen)`. This is because for each step, we iterate through the possible positions in the array.
  
- Space complexity: The space complexity is reduced to `O(arrLen)` from the initial `O(steps * arrLen)` after the optimization. We only maintain two arrays of size `arrLen` instead of a 2D array of size `steps x arrLen`.

# Code
``` Python []
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        mod = 10**9 + 7
        maxColumn = min(arrLen, steps // 2 + 1)  # Boundary to ensure we can come back
        
        curr = [0] * (maxColumn + 1)
        prev = [0] * (maxColumn + 1)
        prev[0] = 1
        
        for i in range(1, steps + 1):
            for j in range(maxColumn + 1):
                curr[j] = prev[j]
                if j - 1 >= 0:
                    curr[j] = (curr[j] + prev[j-1]) % mod
                if j + 1 < maxColumn:
                    curr[j] = (curr[j] + prev[j+1]) % mod
            curr, prev = prev, curr  # Swap arrays for the next iteration
        
        return prev[0]
```
``` Rust []
impl Solution {
    pub fn num_ways(steps: i32, arr_len: i32) -> i32 {
        const MOD: i32 = 1_000_000_007;
        let max_column = std::cmp::min(arr_len, steps / 2 + 1);
        let mut curr = vec![0; (max_column + 1) as usize];
        let mut prev = vec![0; (max_column + 1) as usize];
        prev[0] = 1;
        
        for _ in 1..=steps {
            for j in 0..=max_column as usize {
                curr[j] = prev[j];
                if j >= 1 {
                    curr[j] = (curr[j] + prev[j-1]) % MOD;
                }
                if j + 1 < max_column as usize {
                    curr[j] = (curr[j] + prev[j+1]) % MOD;
                }
            }
            std::mem::swap(&mut curr, &mut prev);
        }
        prev[0]
    }
}
```
``` Go []
func numWays(steps int, arrLen int) int {
    mod := 1000000007
    maxColumn := min(arrLen, steps/2 + 1)
    curr := make([]int, maxColumn + 1)
    prev := make([]int, maxColumn + 1)
    prev[0] = 1
    
    for i := 1; i <= steps; i++ {
        for j := 0; j <= maxColumn; j++ {
            curr[j] = prev[j]
            if j - 1 >= 0 {
                curr[j] = (curr[j] + prev[j-1]) % mod
            }
            if j + 1 < maxColumn {
                curr[j] = (curr[j] + prev[j+1]) % mod
            }
        }
        curr, prev = prev, curr
    }
    return prev[0]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
``` C++ []
class Solution {
public:
    int numWays(int steps, int arrLen) {
        const int mod = 1e9 + 7;
        int maxColumn = std::min(arrLen, steps / 2 + 1);
        
        std::vector<int> curr(maxColumn + 1, 0);
        std::vector<int> prev(maxColumn + 1, 0);
        prev[0] = 1;
        
        for(int i = 1; i <= steps; ++i) {
            for(int j = 0; j <= maxColumn; ++j) {
                curr[j] = prev[j];
                if(j - 1 >= 0) {
                    curr[j] = (curr[j] + prev[j-1]) % mod;
                }
                if(j + 1 < maxColumn) {
                    curr[j] = (curr[j] + prev[j+1]) % mod;
                }
            }
            std::swap(curr, prev);
        }
        return prev[0];
    }
};
```
``` Java []
public class Solution {
    public int numWays(int steps, int arrLen) {
        int mod = 1_000_000_007;
        int maxColumn = Math.min(arrLen, steps / 2 + 1);
        int[] curr = new int[maxColumn + 1];
        int[] prev = new int[maxColumn + 1];
        prev[0] = 1;

        for (int i = 1; i <= steps; i++) {
            for (int j = 0; j <= maxColumn; j++) {
                curr[j] = prev[j];
                if (j - 1 >= 0) {
                    curr[j] = (curr[j] + prev[j - 1]) % mod;
                }
                if (j + 1 < maxColumn) {
                    curr[j] = (curr[j] + prev[j + 1]) % mod;
                }
            }
            System.arraycopy(curr, 0, prev, 0, maxColumn + 1);
        }
        return prev[0];
    }
}
```
``` JavaScript []
var numWays = function(steps, arrLen) {
    const mod = 1e9 + 7;
    let maxColumn = Math.min(arrLen, Math.floor(steps / 2) + 1);
    let curr = new Array(maxColumn + 1).fill(0);
    let prev = new Array(maxColumn + 1).fill(0);
    prev[0] = 1;

    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j <= maxColumn; j++) {
            curr[j] = prev[j];
            if (j - 1 >= 0) {
                curr[j] = (curr[j] + prev[j - 1]) % mod;
            }
            if (j + 1 < maxColumn) {
                curr[j] = (curr[j] + prev[j + 1]) % mod;
            }
        }
        [curr, prev] = [prev, curr];
    }
    return prev[0];
};
```
``` PHP []
class Solution {
    function numWays($steps, $arrLen) {
        $mod = 1000000007;
        $maxColumn = min($arrLen, intval($steps / 2) + 1);
        $curr = array_fill(0, $maxColumn + 1, 0);
        $prev = array_fill(0, $maxColumn + 1, 0);
        $prev[0] = 1;

        for ($i = 1; $i <= $steps; $i++) {
            for ($j = 0; $j <= $maxColumn; $j++) {
                $curr[$j] = $prev[$j];
                if ($j - 1 >= 0) {
                    $curr[$j] = ($curr[$j] + $prev[$j - 1]) % $mod;
                }
                if ($j + 1 < $maxColumn) {
                    $curr[$j] = ($curr[$j] + $prev[$j + 1]) % $mod;
                }
            }
            list($curr, $prev) = array($prev, $curr);
        }
        return $prev[0];
    }
}
```
``` C# []
public class Solution {
    public int NumWays(int steps, int arrLen) {
        int mod = 1_000_000_007;
        int maxColumn = Math.Min(arrLen, steps / 2 + 1);
        int[] curr = new int[maxColumn + 1];
        int[] prev = new int[maxColumn + 1];
        prev[0] = 1;

        for (int i = 1; i <= steps; i++) {
            for (int j = 0; j <= maxColumn; j++) {
                curr[j] = prev[j];
                if (j - 1 >= 0) {
                    curr[j] = (curr[j] + prev[j - 1]) % mod;
                }
                if (j + 1 < maxColumn) {
                    curr[j] = (curr[j] + prev[j + 1]) % mod;
                }
            }
            var temp = curr;
            curr = prev;
            prev = temp;
        }
        return prev[0];
    }
}
```

## Performance

| Language   | Time (ms) | Memory   |
|------------|----------|----------|
| Go         | 3 ms     | 2 MB     |
| Rust       | 3 ms     | 2.2 MB   |
| Java       | 6 ms     | 39.1 MB  |
| C++        | 16 ms    | 6.5 MB   |
| C#         | 30 ms    | 26.6 MB  |
| PHP        | 40 ms    | 19 MB    |
| JavaScript | 72 ms    | 42 MB    |
| Python3    | 174 ms   | 16.3 MB  |

# What we learned
- Dynamic programming can be used to solve problems involving choices at each step.
- Space optimization is crucial in problems with large input sizes. By observing patterns and dependencies in our DP table, we can often reduce the amount of memory used.
- Recurrence relations define the relationship between the current state and previous states in dynamic programming. They are essential in understanding and deriving the logic behind the solution.