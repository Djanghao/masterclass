# 🔥 BEATS 100% | ✅ [ C++ / Java / Py / C / C# / JS / GO / Rust ]

**Author:** Neoni_77
**Votes:** 18
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/4709115/](https://leetcode.com/problems/cherry-pickup-ii/solutions/4709115/)

---


```C++ []
class Solution {
public:
  int cherryPickup(vector<vector<int>>& grid) {
    int n = grid.size();
    int m = grid[0].size();

    // Create 3D DP table with initial values of 0
    int dp[n][m][m];
    memset(dp, 0, sizeof(dp));

    // Set the starting point value (top-left and top-right corner)
    int cherries = 0;
    dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1]; // Add cherries from both robots
    // Iterate through each row from second onwards
    for (int i = 1; i < n; ++i) {
      // Iterate through each column for robot 1
      for (int j = 0; j < m; ++j) {
        // Iterate through each column for robot 2
        for (int k = 0; k < m; ++k) {
          // Skip invalid states:
          // - Both robots in the same row (j > i)
          // - Robot 2 left of robot 1 (k < m - i - 1)
          // - Robot 1 further right than robot 2 (j > k)
          if (j > i || k < m - i - 1 || j > k) continue;
          // Base case: no moves possible, use previous state
          dp[i][j][k] = dp[i - 1][j][k];
          // Explore moves for robot 1:
          // - Up-diagonal with robot 2 at same position
          if (j - 1 >= 0) {
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j - 1][k]);
          }
          // - Up-diagonal with robot 2 one step left/right
          if (j - 1 >= 0 && k - 1 >= 0)
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
          if (j - 1 >= 0 && k + 1 < m)
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j - 1][k + 1]);
          // Explore moves for robot 2:
          // - Up-diagonal with robot 1 at same position
          if (j + 1 < m) {
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j + 1][k]);
          }
          // - Up-diagonal with robot 1 one step left/right
          if (j + 1 < m && k - 1 >= 0)
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
          if (j + 1 < m && k + 1 < m)
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j + 1][k + 1]);
          // Explore horizontal moves for both robots:
          // - Both robots move left
          if (k - 1 >= 0)
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j][k - 1]);
          // - Both robots move right
          if (k + 1 < m)
            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j][k + 1]);
          // Add cherries only if robots are in different positions
          if (j != k) {
            dp[i][j][k] += grid[i][j] + grid[i][k];
          } else {
            dp[i][j][k] += grid[i][j]; // Only one robot picks if they land in the same cell
          }
          // Update maximum cherries collected so far
          cherries = max(cherries, dp[i][j][k]);
        }
      }
    }

    return cherries;
  }
};

```
```Java []
class Solution {
    public int cherryPickup(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;

        // Create 3D DP table with initial values of 0
        int[][][] dp = new int[n][m][m];

        // Set the starting point value (top-left and top-right corner)
        int cherries = 0;
        dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1]; // Add cherries from both robots

        // Iterate through each row from second onwards
        for (int i = 1; i < n; ++i) {
            // Iterate through each column for robot 1
            for (int j = 0; j < m; ++j) {
                // Iterate through each column for robot 2
                for (int k = 0; k < m; ++k) {
                    // Skip invalid states:
                    // - Both robots in the same row (j > i)
                    // - Robot 2 left of robot 1 (k < m - i - 1)
                    // - Robot 1 further right than robot 2 (j > k)
                    if (j > i || k < m - i - 1 || j > k) continue;
                    // Base case: no moves possible, use previous state
                    dp[i][j][k] = dp[i - 1][j][k];
                    // Explore moves for robot 1:
                    // - Up-diagonal with robot 2 at same position
                    if (j - 1 >= 0) {
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k]);
                    }
                    // - Up-diagonal with robot 2 one step left/right
                    if (j - 1 >= 0 && k - 1 >= 0)
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
                    if (j - 1 >= 0 && k + 1 < m)
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k + 1]);
                    // Explore moves for robot 2:
                    // - Up-diagonal with robot 1 at same position
                    if (j + 1 < m) {
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k]);
                    }
                    // - Up-diagonal with robot 1 one step left/right
                    if (j + 1 < m && k - 1 >= 0)
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
                    if (j + 1 < m && k + 1 < m)
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k + 1]);
                    // Explore horizontal moves for both robots:
                    // - Both robots move left
                    if (k - 1 >= 0)
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k - 1]);
                    // - Both robots move right
                    if (k + 1 < m)
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k + 1]);
                    // Add cherries only if robots are in different positions
                    if (j != k) {
                        dp[i][j][k] += grid[i][j] + grid[i][k];
                    } else {
                        dp[i][j][k] += grid[i][j]; // Only one robot picks if they land in the same cell
                    }
                    // Update maximum cherries collected so far
                    cherries = Math.max(cherries, dp[i][j][k]);
                }
            }
        }

        return cherries;
    }
}

```
```Python []
class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])

        # Create 3D DP table with initial values of 0
        dp = [[[0] * m for _ in range(m)] for _ in range(n)]

        # Set the starting point value (top-left and top-right corner)
        cherries = 0
        dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1]

        # Iterate through each row from second onwards
        for i in range(1, n):
            # Iterate through each column for robot 1
            for j in range(m):
                # Iterate through each column for robot 2
                for k in range(m):
                    # Skip invalid states:
                    # - Both robots in the same row (j > i)
                    # - Robot 2 left of robot 1 (k < m - i - 1)
                    # - Robot 1 further right than robot 2 (j > k)
                    if j > i or k < m - i - 1 or j > k:
                        continue
                    # Base case: no moves possible, use previous state
                    dp[i][j][k] = dp[i - 1][j][k]
                    # Explore moves for robot 1:
                    # - Up-diagonal with robot 2 at same position
                    if j - 1 >= 0:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j - 1][k])
                    # - Up-diagonal with robot 2 one step left/right
                    if j - 1 >= 0 and k - 1 >= 0:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j - 1][k - 1])
                    if j - 1 >= 0 and k + 1 < m:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j - 1][k + 1])
                    # Explore moves for robot 2:
                    # - Up-diagonal with robot 1 at same position
                    if j + 1 < m:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j + 1][k])
                    # - Up-diagonal with robot 1 one step left/right
                    if j + 1 < m and k - 1 >= 0:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j + 1][k - 1])
                    if j + 1 < m and k + 1 < m:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j + 1][k + 1])
                    # Explore horizontal moves for both robots:
                    # - Both robots move left
                    if k - 1 >= 0:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j][k - 1])
                    # - Both robots move right
                    if k + 1 < m:
                        dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j][k + 1])
                    # Add cherries only if robots are in different positions
                    if j != k:
                        dp[i][j][k] += grid[i][j] + grid[i][k]
                    else:
                        dp[i][j][k] += grid[i][j]  # Only one robot picks if they land in the same cell
                    # Update maximum cherries collected so far
                    cherries = max(cherries, dp[i][j][k])

        return cherries

```
```C []
int cherryPickup(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int m = *gridColSize;

    // Create 3D DP table with initial values of 0
    int dp[n][m][m];
    memset(dp, 0, sizeof(dp));

    // Set the starting point value (top-left and top-right corner)
    int cherries = 0;
    dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1]; // Add cherries from both robots
    // Iterate through each row from second onwards
    for (int i = 1; i < n; ++i) {
        // Iterate through each column for robot 1
        for (int j = 0; j < m; ++j) {
            // Iterate through each column for robot 2
            for (int k = 0; k < m; ++k) {
                // Skip invalid states:
                // - Both robots in the same row (j > i)
                // - Robot 2 left of robot 1 (k < m - i - 1)
                // - Robot 1 further right than robot 2 (j > k)
                if (j > i || k < m - i - 1 || j > k) continue;
                // Base case: no moves possible, use previous state
                dp[i][j][k] = dp[i - 1][j][k];
                // Explore moves for robot 1:
                // - Up-diagonal with robot 2 at same position
                if (j - 1 >= 0) {
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j - 1][k]);
                }
                // - Up-diagonal with robot 2 one step left/right
                if (j - 1 >= 0 && k - 1 >= 0)
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
                if (j - 1 >= 0 && k + 1 < m)
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j - 1][k + 1]);
                // Explore moves for robot 2:
                // - Up-diagonal with robot 1 at same position
                if (j + 1 < m) {
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j + 1][k]);
                }
                // - Up-diagonal with robot 1 one step left/right
                if (j + 1 < m && k - 1 >= 0)
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
                if (j + 1 < m && k + 1 < m)
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j + 1][k + 1]);
                // Explore horizontal moves for both robots:
                // - Both robots move left
                if (k - 1 >= 0)
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j][k - 1]);
                // - Both robots move right
                if (k + 1 < m)
                    dp[i][j][k] = fmax(dp[i][j][k], dp[i - 1][j][k + 1]);
                // Add cherries only if robots are in different positions
                if (j != k) {
                    dp[i][j][k] += grid[i][j] + grid[i][k];
                } else {
                    dp[i][j][k] += grid[i][j]; // Only one robot picks if they land in the same cell
                }
                // Update maximum cherries collected so far
                cherries = fmax(cherries, dp[i][j][k]);
            }
        }
    }

    return cherries;
}

```
```C# []
public class Solution {
    public int CherryPickup(int[][] grid) {
        int n = grid.Length;
        int m = grid[0].Length;

        // Create 3D DP table with initial values of 0
        int[][][] dp = new int[n][][];
        for (int i = 0; i < n; i++) {
            dp[i] = new int[m][];
            for (int j = 0; j < m; j++) {
                dp[i][j] = new int[m];
            }
        }

        // Set the starting point value (top-left and top-right corner)
        int cherries = 0;
        dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1]; // Add cherries from both robots
        // Iterate through each row from second onwards
        for (int i = 1; i < n; ++i) {
            // Iterate through each column for robot 1
            for (int j = 0; j < m; ++j) {
                // Iterate through each column for robot 2
                for (int k = 0; k < m; ++k) {
                    // Skip invalid states:
                    // - Both robots in the same row (j > i)
                    // - Robot 2 left of robot 1 (k < m - i - 1)
                    // - Robot 1 further right than robot 2 (j > k)
                    if (j > i || k < m - i - 1 || j > k) continue;
                    // Base case: no moves possible, use previous state
                    dp[i][j][k] = dp[i - 1][j][k];
                    // Explore moves for robot 1:
                    // - Up-diagonal with robot 2 at same position
                    if (j - 1 >= 0) {
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j - 1][k]);
                    }
                    // - Up-diagonal with robot 2 one step left/right
                    if (j - 1 >= 0 && k - 1 >= 0)
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
                    if (j - 1 >= 0 && k + 1 < m)
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j - 1][k + 1]);
                    // Explore moves for robot 2:
                    // - Up-diagonal with robot 1 at same position
                    if (j + 1 < m) {
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j + 1][k]);
                    }
                    // - Up-diagonal with robot 1 one step left/right
                    if (j + 1 < m && k - 1 >= 0)
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
                    if (j + 1 < m && k + 1 < m)
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j + 1][k + 1]);
                    // Explore horizontal moves for both robots:
                    // - Both robots move left
                    if (k - 1 >= 0)
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j][k - 1]);
                    // - Both robots move right
                    if (k + 1 < m)
                        dp[i][j][k] = Math.Max(dp[i][j][k], dp[i - 1][j][k + 1]);
                    // Add cherries only if robots are in different positions
                    if (j != k) {
                        dp[i][j][k] += grid[i][j] + grid[i][k];
                    } else {
                        dp[i][j][k] += grid[i][j]; // Only one robot picks if they land in the same cell
                    }
                    // Update maximum cherries collected so far
                    cherries = Math.Max(cherries, dp[i][j][k]);
                }
            }
        }

        return cherries;
    }
}

```
```Javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // Create 3D DP table with initial values of 0
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(null).map(() => new Array(m).fill(0)));

    // Set the starting point value (top-left and top-right corner)
    let cherries = 0;
    dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1]; // Add cherries from both robots
    // Iterate through each row from second onwards
    for (let i = 1; i < n; ++i) {
        // Iterate through each column for robot 1
        for (let j = 0; j < m; ++j) {
            // Iterate through each column for robot 2
            for (let k = 0; k < m; ++k) {
                // Skip invalid states:
                // - Both robots in the same row (j > i)
                // - Robot 2 left of robot 1 (k < m - i - 1)
                // - Robot 1 further right than robot 2 (j > k)
                if (j > i || k < m - i - 1 || j > k) continue;
                // Base case: no moves possible, use previous state
                dp[i][j][k] = dp[i - 1][j][k];
                // Explore moves for robot 1:
                // - Up-diagonal with robot 2 at same position
                if (j - 1 >= 0) {
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k]);
                }
                // - Up-diagonal with robot 2 one step left/right
                if (j - 1 >= 0 && k - 1 >= 0)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
                if (j - 1 >= 0 && k + 1 < m)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k + 1]);
                // Explore moves for robot 2:
                // - Up-diagonal with robot 1 at same position
                if (j + 1 < m) {
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k]);
                }
                // - Up-diagonal with robot 1 one step left/right
                if (j + 1 < m && k - 1 >= 0)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
                if (j + 1 < m && k + 1 < m)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k + 1]);
                // Explore horizontal moves for both robots:
                // - Both robots move left
                if (k - 1 >= 0)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k - 1]);
                // - Both robots move right
                if (k + 1 < m)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k + 1]);
                // Add cherries only if robots are in different positions
                if (j != k) {
                    dp[i][j][k] += grid[i][j] + grid[i][k];
                } else {
                    dp[i][j][k] += grid[i][j]; // Only one robot picks if they land in the same cell
                }
                // Update maximum cherries collected so far
                cherries = Math.max(cherries, dp[i][j][k]);
            }
        }
    }

    return cherries;
};

```
```Rust []
impl Solution {
    pub fn cherry_pickup(grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let m = grid[0].len();
        
        // Create 3D DP table to memoize subproblem solutions
        let mut dp = vec![vec![vec![-1; m]; m]; n];
        
        // Define the helper function to perform dynamic programming
        fn dfs(i: usize, r1: usize, r2: usize, grid: &Vec<Vec<i32>>, dp: &mut Vec<Vec<Vec<i32>>>) -> i32 {
            let n = grid.len();
            let m = grid[0].len();
            
            // If already computed, return the result from the memoization table
            if dp[i][r1][r2] != -1 {
                return dp[i][r1][r2];
            }
            
            // If it's the bottom row, return the cherry count at this cell
            if i == n - 1 {
                return if r1 == r2 { grid[i][r1] } else { grid[i][r1] + grid[i][r2] };
            }
            
            // Initialize the cherry count at this cell
            let mut cherries = 0;
            
            // Update the cherry count based on the current cell and the next row's possibilities
            for dr1 in -1..=1 {
                for dr2 in -1..=1 {
                    let new_r1 = r1 as i32 + dr1;
                    let new_r2 = r2 as i32 + dr2;
                    
                    // Check if the next positions are valid
                    if new_r1 >= 0 && new_r1 < m as i32 && new_r2 >= 0 && new_r2 < m as i32 {
                        // Calculate the cherry count for the next row
                        let next_cherries = dfs(i + 1, new_r1 as usize, new_r2 as usize, grid, dp);
                        
                        // Update the current cherry count if it's larger
                        if r1 == r2 {
                            cherries = cherries.max(grid[i][r1] + next_cherries);
                        } else {
                            cherries = cherries.max(grid[i][r1] + grid[i][r2] + next_cherries);
                        }
                    }
                }
            }
            
            // Memoize the result
            dp[i][r1][r2] = cherries;
            cherries
        }
        
        // Perform dynamic programming starting from the top row
        dfs(0, 0, m - 1, &grid, &mut dp)
    }
}

```
```Go []
func cherryPickup(grid [][]int) int {
    n := len(grid)
    m := len(grid[0])

    // Create 3D DP table with initial values of 0
    dp := make([][][]int, n)
    for i := range dp {
        dp[i] = make([][]int, m)
        for j := range dp[i] {
            dp[i][j] = make([]int, m)
        }
    }

    // Set the starting point value (top-left and top-right corner)
    cherries := 0
    dp[0][0][m-1] = grid[0][0] + grid[0][m-1] // Add cherries from both robots
    // Iterate through each row from second onwards
    for i := 1; i < n; i++ {
        // Iterate through each column for robot 1
        for j := 0; j < m; j++ {
            // Iterate through each column for robot 2
            for k := 0; k < m; k++ {
                // Skip invalid states:
                // - Both robots in the same row (j > i)
                // - Robot 2 left of robot 1 (k < m - i - 1)
                // - Robot 1 further right than robot 2 (j > k)
                if j > i || k < m-i-1 || j > k {
                    continue
                }
                // Base case: no moves possible, use previous state
                dp[i][j][k] = dp[i-1][j][k]
                // Explore moves for robot 1:
                // - Up-diagonal with robot 2 at same position
                if j > 0 {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j-1][k])
                }
                // - Up-diagonal with robot 2 one step left/right
                if j > 0 && k > 0 {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j-1][k-1])
                }
                if j > 0 && k+1 < m {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j-1][k+1])
                }
                // Explore moves for robot 2:
                // - Up-diagonal with robot 1 at same position
                if j+1 < m {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j+1][k])
                }
                // - Up-diagonal with robot 1 one step left/right
                if j+1 < m && k > 0 {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j+1][k-1])
                }
                if j+1 < m && k+1 < m {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j+1][k+1])
                }
                // Explore horizontal moves for both robots:
                // - Both robots move left
                if k > 0 {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j][k-1])
                }
                // - Both robots move right
                if k+1 < m {
                    dp[i][j][k] = max(dp[i][j][k], dp[i-1][j][k+1])
                }
                // Add cherries only if robots are in different positions
                if j != k {
                    dp[i][j][k] += grid[i][j] + grid[i][k]
                } else {
                    dp[i][j][k] += grid[i][j] // Only one robot picks if they land in the same cell
                }
                // Update maximum cherries collected so far
                cherries = max(cherries, dp[i][j][k])
            }
        }
    }

    return cherries
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```

**Note : According to the solution in C++ it reaches 100%, don't know for other codes..
please upvote\u2B06\uFE0F!!\uD83D\uDE0A**

