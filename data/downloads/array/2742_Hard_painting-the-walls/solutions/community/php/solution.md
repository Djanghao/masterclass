# 🔥2 DP Bottom Up Approach🤩 | Java | C++ | Python | JavaScript | C# | PHP

**Author:** Akhilesh21
**Votes:** 34
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4166155/](https://leetcode.com/problems/painting-the-walls/solutions/4166155/)

---

# 1st Method :-  Bottom up
### 92.16% Beat

The code uses dynamic programming to calculate the minimum cost efficiently. It iterates through the walls and builds the `dp` array, where `dp[j]` represents the minimum cost to paint 'j' walls. The inner loop considers the possibility of including the current wall 'i' or excluding it to find the minimum cost. The final result is stored in `dp[n]`, which represents the minimum cost to paint all 'n' walls while adhering to the time constraints.
## Code

``` Java []
class Solution {
    public int paintWalls(int[] cost, int[] time) {
        int n = cost.length; // Get the number of walls
        int dp[] = new int[n + 1]; // Create a dynamic programming array to store the minimum cost
        Arrays.fill(dp, (int) 1e9); // Initialize the array with a very large value (effectively infinity)
        dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for (int i = 0; i < n; ++i) {
            // Loop through the dynamic programming array in reverse order
            for (int j = n; j > 0; --j) {
                // Calculate the minimum cost to paint 'j' walls using the current wall 'i'
                // The minimum cost at 'j' is the minimum of:
                //   - The cost of painting the current wall 'i' + the cost of painting the previous walls (dp[j - time[i] - 1])
                //   - The cost of painting the previous walls without using the current wall 'i' (dp[j])
                dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
    }
}

```
``` C++ []
#include <vector>
#include <algorithm>

class Solution {
public:
    int paintWalls(std::vector<int>& cost, std::vector<int>& time) {
        int n = cost.size(); // Get the number of walls
        std::vector<int> dp(n + 1, 1e9); // Create a dynamic programming array to store the minimum cost
        dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for (int i = 0; i < n; ++i) {
            // Loop through the dynamic programming array in reverse order
            for (int j = n; j > 0; --j) {
                // Calculate the minimum cost to paint 'j' walls using the current wall 'i'
                // The minimum cost at 'j' is the minimum of:
                //   - The cost of painting the current wall 'i' + the cost of painting the previous walls (dp[j - time[i] - 1])
                //   - The cost of painting the previous walls without using the current wall 'i' (dp[j])
                dp[j] = std::min(dp[j], dp[std::max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
    }
};
```
``` Python []
def paint_walls(cost, time):
    n = len(cost)  # Get the number of walls
    dp = [float('inf')] * (n + 1)  # Create a dynamic programming array to store the minimum cost
    dp[0] = 0  # The minimum cost to paint 0 walls is 0 (base case)

    # Loop through each wall
    for i in range(n):
        # Loop through the dynamic programming array in reverse order
        for j in range(n, 0, -1):
            # Calculate the minimum cost to paint 'j' walls using the current wall 'i'
            # The minimum cost at 'j' is the minimum of:
            #   - The cost of painting the current wall 'i' + the cost of painting the previous walls (dp[j - time[i] - 1])
            #   - The cost of painting the previous walls without using the current wall 'i' (dp[j])
            dp[j] = min(dp[j], dp[max(j - time[i] - 1, 0)] + cost[i])

    return dp[n]  # The minimum cost to paint all 'n' walls is stored in dp[n]

```
``` JavasScript []
var paintWalls = function(cost, time) {
    const n = cost.length; // Get the number of walls
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER); // Create a dynamic programming array to store the minimum cost
    dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

    // Loop through each wall
    for (let i = 0; i < n; ++i) {
        // Loop through the dynamic programming array in reverse order
        for (let j = n; j > 0; --j) {
            // Calculate the minimum cost to paint 'j' walls using the current wall 'i'
            // The minimum cost at 'j' is the minimum of:
            //   - The cost of painting the current wall 'i' + the cost of painting the previous walls (dp[j - time[i] - 1])
            //   - The cost of painting the previous walls without using the current wall 'i' (dp[j])
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
        }
    }
    return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
}

```
``` Php []
class Solution {
    public function paintWalls($cost, $time) {
        $n = count($cost); // Get the number of walls
        $dp = array_fill(0, $n + 1, PHP_INT_MAX); // Initialize the array with a very large value (effectively infinity)
        $dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for ($i = 0; $i < $n; ++$i) {
            // Loop through the dynamic programming array in reverse order
            for ($j = $n; $j > 0; --$j) {
                // Calculate the minimum cost to paint 'j' walls using the current wall 'i'
                // The minimum cost at 'j' is the minimum of:
                //   - The cost of painting the current wall 'i' + the cost of painting the previous walls ($dp[$j - $time[$i] - 1])
                //   - The cost of painting the previous walls without using the current wall 'i' ($dp[$j])
                $dp[$j] = min($dp[$j], $dp[max($j - $time[$i] - 1, 0)] + $cost[$i]);
            }
        }
        return $dp[$n]; // The minimum cost to paint all 'n' walls is stored in $dp[$n]
    }
}
```


# Complexity
#### Time complexity: O(n^2)
The time complexity of this code is primarily determined by the two nested loops in the `paintWalls` function:

1. The outer loop iterates over each wall, so it runs for 'n' iterations, where 'n' is the number of walls.
2. The inner loop iterates in reverse order, running for at most 'n' iterations.

So, the overall time complexity of the code is O(n^2), where 'n' is the number of walls. This is because for each wall, we iterate over the dynamic programming array in reverse order.

#### Space complexity: O(n)
The space complexity of the code is determined by the space used to store the dynamic programming array (`dp`). The size of the `dp` array is `n + 1`, where 'n' is the number of walls. Additionally, the `cost` and `time` arrays are used, but their space complexity is typically considered constant since they are provided as input and don't grow with the size of the problem.

So, the space complexity is O(n) because the dominant factor is the dynamic programming array `dp`, which is proportional to the number of walls.


![vote.jpg](./images/0.jpeg)


# 2nd Method :- Bottom Up
### 98.53 % Beats

- This code follows a similar dynamic programming approach to the previous example, where it calculates the minimum cost efficiently. 
- The difference here is that it uses a constant `kMax` to represent a large value for initialization, and it uses slightly different variable names. 
- The inner loop iterates over the `walls` variable to consider the possibility of including the current wall 'i' or excluding it, while adhering to the time constraints. 
- The final result is stored in `dp[n],` which represents the minimum cost to paint all 'n' walls.
## Code

``` Java []
class Solution {
    public int paintWalls(int[] cost, int[] time) {
        final int kMax = 500_000_000; // A constant representing a very large value (effectively infinity)
        final int n = cost.length; // Get the number of walls
        // dp[i] := min cost to paint i walls by painters so far
        int[] dp = new int[n + 1]; // Create a dynamic programming array to store the minimum cost
        Arrays.fill(dp, kMax); // Initialize the array with the large constant
        dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for (int i = 0; i < n; ++i) {
            // Loop through the dynamic programming array in reverse order
            for (int walls = n; walls > 0; --walls) {
                // Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
                // The minimum cost at 'walls' is the minimum of:
                // - The cost of painting the current wall 'i' + the cost of painting the
                // previous walls within the time constraint (dp[walls - time[i] - 1])
                // - The cost of painting the previous walls without using the current wall 'i'
                // (dp[walls])
                dp[walls] = Math.min(dp[walls], dp[Math.max(walls - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
    }
}

```

``` C++ []
#include <vector>
#include <algorithm>
#include <limits>

class Solution {
public:
    int paintWalls(std::vector<int>& cost, std::vector<int>& time) {
        const int kMax = 500'000'000; // A constant representing a very large value (effectively infinity)
        int n = cost.size(); // Get the number of walls
        // dp[i] := min cost to paint i walls by painters so far
        std::vector<int> dp(n + 1, kMax); // Create a dynamic programming array to store the minimum cost
        dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for (int i = 0; i < n; ++i) {
            // Loop through the dynamic programming array in reverse order
            for (int walls = n; walls > 0; --walls) {
                // Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
                // The minimum cost at 'walls' is the minimum of:
                // - The cost of painting the current wall 'i' + the cost of painting the
                // previous walls within the time constraint (dp[walls - time[i] - 1])
                // - The cost of painting the previous walls without using the current wall 'i'
                // (dp[walls])
                dp[walls] = std::min(dp[walls], dp[std::max(walls - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
    }
};

```
``` Python []
class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        k_max = 500000000  # A constant representing a very large value (effectively infinity)
        n = len(cost)  # Get the number of walls
        dp = [k_max] * (n + 1)  # Create a dynamic programming array to store the minimum cost
        dp[0] = 0  # The minimum cost to paint 0 walls is 0 (base case)

        # Loop through each wall
        for i in range(n):
            # Loop through the dynamic programming array in reverse order
            for walls in range(n, 0, -1):
                # Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
                # The minimum cost at 'walls' is the minimum of:
                #   - The cost of painting the current wall 'i' + the cost of painting the
                #     previous walls within the time constraint (dp[walls - time[i] - 1])
                #   - The cost of painting the previous walls without using the current wall 'i'
                #     (dp[walls])
                dp[walls] = min(dp[walls], dp[max(walls - time[i] - 1, 0)] + cost[i])

        return dp[n]  # The minimum cost to paint all 'n' walls is stored in dp[n]

```
``` JavaScript []
var paintWalls = function(cost, time) {
    const kMax = 500000000; // A constant representing a very large value (effectively infinity)
    const n = cost.length; // Get the number of walls
    // dp[i] := min cost to paint i walls by painters so far
    const dp = new Array(n + 1).fill(kMax); // Create a dynamic programming array to store the minimum cost
    dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

    // Loop through each wall
    for (let i = 0; i < n; ++i) {
        // Loop through the dynamic programming array in reverse order
        for (let walls = n; walls > 0; --walls) {
            // Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
            // The minimum cost at 'walls' is the minimum of:
            // - The cost of painting the current wall 'i' + the cost of painting the
            // previous walls within the time constraint (dp[walls - time[i] - 1])
            // - The cost of painting the previous walls without using the current wall 'i'
            // (dp[walls])
            dp[walls] = Math.min(dp[walls], dp[Math.max(walls - time[i] - 1, 0)] + cost[i]);
        }
    }
    return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
}

```
``` C# []
public class Solution{
    public int PaintWalls(int[] cost, int[] time)
    {
        const int kMax = 500_000_000; // A constant representing a very large value (effectively infinity)
        int n = cost.Length; // Get the number of walls
        // dp[i] := min cost to paint i walls by painters so far
        int[] dp = new int[n + 1]; // Create a dynamic programming array to store the minimum cost
        for (int i = 0; i < dp.Length; i++)
        {
            dp[i] = kMax;
        }
        dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for (int i = 0; i < n; ++i)
        {
            // Loop through the dynamic programming array in reverse order
            for (int walls = n; walls > 0; --walls)
            {
                // Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
                // The minimum cost at 'walls' is the minimum of:
                // - The cost of painting the current wall 'i' + the cost of painting the
                // previous walls within the time constraint (dp[walls - time[i] - 1])
                // - The cost of painting the previous walls without using the current wall 'i'
                // (dp[walls])
                dp[walls] = Math.Min(dp[walls], dp[Math.Max(walls - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
    }
}
```
``` PHP []
class Solution {
    public function paintWalls($cost, $time) {
        $kMax = 500000000; // A constant representing a very large value (effectively infinity)
        $n = count($cost); // Get the number of walls
        $dp = array_fill(0, $n + 1, $kMax); // Create a dynamic programming array to store the minimum cost
        $dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

        // Loop through each wall
        for ($i = 0; $i < $n; ++$i) {
            // Loop through the dynamic programming array in reverse order
            for ($walls = $n; $walls > 0; --$walls) {
                // Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
                // The minimum cost at 'walls' is the minimum of:
                //   - The cost of painting the current wall 'i' + the cost of painting the previous walls within the time constraint ($dp[$walls - $time[$i] - 1])
                //   - The cost of painting the previous walls without using the current wall 'i' ($dp[$walls])
                $dp[$walls] = min($dp[$walls], $dp[max($walls - $time[$i] - 1, 0)] + $cost[$i]);
            }
        }
        return $dp[$n]; // The minimum cost to paint all 'n' walls is stored in $dp[$n]
    }
}
```

## Complexity
#### Time complexity: O(n^2)
The time complexity of this code is O(n^2), where 'n' is the number of walls. This complexity arises from the nested loops.

1. The outer loop iterates over 'n' walls, so it's O(n).
2. The inner loop iterates over 'walls' from 'n' down to 1, so in the worst case, it's also O(n).

#### Space complexity: O(n)
The space complexity of this code is O(n), where 'n' is the number of walls.

1. The dynamic programming array `dp` has a size of 'n + 1', so it's O(n) in terms of space.

In addition to the dynamic programming array, there are a few constant space variables, but their impact on the overall space complexity is negligible.

So, the dominant factor in the space complexity is the 'dp' array, making the space complexity O(n).

![upvote.png](./images/1.png)
# Plz UpVote if you like
