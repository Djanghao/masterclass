# ✅Only 10 Simple Lines 🔥🔥|| All Language Solution🙌

**Author:** dharmikgohil
**Votes:** 39
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/4770625/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/4770625/)

---

![image.png](./images/0.png)

# Intuition
#### The problem requires finding the cheapest price to reach a destination from a source with a limited number of stops. This problem can be efficiently solved using dynamic programming.

# Approach
1. Initialize an array `dp` of size `n` to store the minimum cost to reach each city.
2. Set the cost to reach the source city as 0 and all other cities' costs as `Integer.MAX_VALUE`.
3. Iterate through each possible number of stops from 0 to `k`:
   - Create a copy of the `dp` array for each iteration.
   - Update the minimum cost for each destination city based on the current flight.
4. Finally, return the minimum cost to reach the destination city (`dp[dst]`).

# Complexity
- Time complexity: $$O(k \\cdot |flights|)$$, where `|flights|` is the number of flights.
- Space complexity: $$O(n)$$, where `n` is the number of cities.

# Code

```Java []
import java.util.Arrays;

class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[src] = 0;

        for (int i = 0; i <= k; i++) {
            int[] temp = Arrays.copyOf(dp, n);
            for (int[] flight : flights) {
                if (dp[flight[0]] != Integer.MAX_VALUE) {
                    temp[flight[1]] = Math.min(temp[flight[1]], dp[flight[0]] + flight[2]);
                }
            }
            dp = temp;
        }
        
        return dp[dst] == Integer.MAX_VALUE ? -1 : dp[dst];
    }
}
```
```C++ []
#include <vector>
#include <algorithm>
#include <limits>

class Solution {
public:
    int findCheapestPrice(int n, std::vector<std::vector<int>>& flights, int src, int dst, int k) {
        std::vector<int> dp(n, std::numeric_limits<int>::max());
        dp[src] = 0;

        for (int i = 0; i <= k; i++) {
            std::vector<int> temp = dp;
            for (const auto& flight : flights) {
                if (dp[flight[0]] != std::numeric_limits<int>::max()) {
                    temp[flight[1]] = std::min(temp[flight[1]], dp[flight[0]] + flight[2]);
                }
            }
            dp = temp;
        }
        
        return dp[dst] == std::numeric_limits<int>::max() ? -1 : dp[dst];
    }
};
```
```Python []
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dp = [float('inf')] * n
        dp[src] = 0

        for _ in range(k + 1):
            temp = dp[:]
            for flight in flights:
                if dp[flight[0]] != float('inf'):
                    temp[flight[1]] = min(temp[flight[1]], dp[flight[0]] + flight[2])
            dp = temp
        
        return dp[dst] if dp[dst] != float('inf') else -1
```
```C []
#include <stdlib.h>
#include <limits.h>

int findCheapestPrice(int n, int** flights, int flightsSize, int* flightsColSize, int src, int dst, int k) {
    // Initialize an array to keep track of the minimum cost to reach each node
    int* dp = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        dp[i] = INT_MAX;
    }
    dp[src] = 0;

    // Iterate through the flights to update the costs accordingly
    for (int i = 0; i <= k; i++) {
        int* temp = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            temp[j] = dp[j];
        }
        for (int f = 0; f < flightsSize; f++) {
            int* flight = flights[f];
            if (dp[flight[0]] != INT_MAX) {
                temp[flight[1]] = temp[flight[1]] < dp[flight[0]] + flight[2] ? temp[flight[1]] : dp[flight[0]] + flight[2];
            }
        }
        free(dp);
        dp = temp;
    }
    
    int result = dp[dst] == INT_MAX ? -1 : dp[dst];

    // Free allocated memory
    free(dp);

    return result;
}
```
```C# []
public class Solution {
    public int FindCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] dp = new int[n];
        Array.Fill(dp, int.MaxValue);
        dp[src] = 0;

        for (int i = 0; i <= k; i++) {
            int[] temp = (int[])dp.Clone();
            foreach (int[] flight in flights) {
                if (dp[flight[0]] != int.MaxValue) {
                    temp[flight[1]] = Math.Min(temp[flight[1]], dp[flight[0]] + flight[2]);
                }
            }
            dp = temp;
        }
        
        return dp[dst] == int.MaxValue ? -1 : dp[dst];
    }
}
```
```Javascript []
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dp = new Array(n).fill(Number.MAX_VALUE);
    dp[src] = 0;

    for (let i = 0; i <= k; i++) {
        let temp = [...dp];
        for (let flight of flights) {
            if (dp[flight[0]] !== Number.MAX_VALUE) {
                temp[flight[1]] = Math.min(temp[flight[1]], dp[flight[0]] + flight[2]);
            }
        }
        dp = temp;
    }
    
    return dp[dst] === Number.MAX_VALUE ? -1 : dp[dst];
};
```
```PHP []
class Solution {
    /**
     * @param Integer $n
     * @param Integer[][] $flights
     * @param Integer $src
     * @param Integer $dst
     * @param Integer $k
     * @return Integer
     */
    function findCheapestPrice($n, $flights, $src, $dst, $k) {
        $dp = array_fill(0, $n, PHP_INT_MAX);
        $dp[$src] = 0;

        for ($i = 0; $i <= $k; $i++) {
            $temp = $dp;
            foreach ($flights as $flight) {
                if ($dp[$flight[0]] != PHP_INT_MAX) {
                    $temp[$flight[1]] = min($temp[$flight[1]], $dp[$flight[0]] + $flight[2]);
                }
            }
            $dp = $temp;
        }
        
        return $dp[$dst] == PHP_INT_MAX ? -1 : $dp[$dst];
    }
}
```
```Typescript []
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let dp: number[] = new Array(n).fill(Number.MAX_VALUE);
    dp[src] = 0;

    for (let i = 0; i <= k; i++) {
        let temp: number[] = [...dp];
        for (const flight of flights) {
            if (dp[flight[0]] !== Number.MAX_VALUE) {
                temp[flight[1]] = Math.min(temp[flight[1]], dp[flight[0]] + flight[2]);
            }
        }
        dp = temp;
    }
    
    return dp[dst] === Number.MAX_VALUE ? -1 : dp[dst];
}
```

# CODE WITH EXPLAINATION
```
import java.util.Arrays;

class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Create an array to store the minimum cost to reach each node.
        int[] dp = new int[n];
        
        // Initialize the array with maximum values, except for the source node which has cost 0.
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[src] = 0;

        // Iterate through each stop up to k.
        for (int i = 0; i <= k; i++) {
            // Create a temporary array to store the updated costs for this iteration.
            int[] temp = Arrays.copyOf(dp, n);
            
            // Iterate through each flight.
            for (int[] flight : flights) {
                // Check if we can reach the starting node of the current flight from the source node.
                if (dp[flight[0]] != Integer.MAX_VALUE) {
                    // Update the cost to reach the destination node of the current flight if it's cheaper.
                    temp[flight[1]] = Math.min(temp[flight[1]], dp[flight[0]] + flight[2]);
                }
            }
            
            // Update dp array with the temporary array for this iteration.
            dp = temp;
        }
        
        // Return the cost to reach the destination node. If it's still Integer.MAX_VALUE, it means it's not reachable.
        return dp[dst] == Integer.MAX_VALUE ? -1 : dp[dst];
    }
}
```

# PLESE UPVOTE TO MAKE THIS EFFORTS WORTH\uD83E\uDD7A\u2705
