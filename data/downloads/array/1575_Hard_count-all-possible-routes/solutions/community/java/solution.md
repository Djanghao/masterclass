# ✅Beats 100% || Memo -> Tabulation || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 105
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3678974/](https://leetcode.com/problems/count-all-possible-routes/solutions/3678974/)

---

# Intuition:
The Intuition is to count all possible routes from a start city to a finish city, given a certain amount of fuel. It uses a recursive approach with memoization to optimize the computation.

The `helper` function performs the main computation. It checks if the remaining fuel is sufficient for each possible move and recursively explores all valid paths. The results of subproblems are stored in a memoization table to avoid redundant computations.

By using memoization, the code avoids recomputing the same routes multiple times, significantly improving efficiency. The approach enables the algorithm to handle larger inputs by reusing previously computed results, reducing the overall time complexity.

# Explanation:
1. The `helper` function is a recursive function that performs the main computation for counting all possible routes. It takes the following parameters: `locations` (vector of city locations), `city` (current city index), `finish` (index of the finish city), `remainFuel` (remaining fuel), and `memo` (memoization table).
2. The function begins by checking if the remaining fuel (`remainFuel`) is negative. If so, it means that the current path is not feasible due to insufficient fuel, and the function returns 0.
3. Next, the function checks if the result for the current `city` and `remainFuel` combination is already present in the `memo` table. If so, it retrieves and returns the stored result, avoiding redundant computations.
4. If the result is not available in the `memo` table, the function proceeds to compute it.
5. The function initializes the `total` variable as 1 if the current `city` is the same as the `finish` city, indicating that a valid route has been found. Otherwise, `total` is initialized as 0.
6. The function then iterates over all possible `nextCity` indices, representing the cities that can be visited from the current `city`. It skips the current `city` itself.
7. For each `nextCity`, the function checks if there is enough fuel (`remainFuel`) to travel from the current `city` to the `nextCity`. If so, it recursively calls the `helper` function for the `nextCity` with the updated `remainFuel` (subtracting the fuel consumed for the current move) and adds the returned result to the `total` value.
8. Before adding the result to `total`, the function takes modulo `MOD` to keep the result within the specified range (1000000007).
9. Once all possible `nextCity` options have been explored, the function stores the computed `total` result in the `memo` table for the current `city` and `remainFuel` combination. This is done to avoid redundant computations in future recursive calls.
10. Finally, the function returns the computed `total` result.

# Code
```C++ []
class Solution {
public:
    const int MOD = 1000000007;

    int helper(const vector<int>& locations, int city, int finish, int remainFuel, vector<vector<int>>& memo) {
        if (remainFuel < 0) {
            return 0;
        }
        
        if (memo[city][remainFuel] != -1) {
            return memo[city][remainFuel];
        }
        
        int total = city == finish ? 1 : 0;
        
        for (int nextCity = 0; nextCity < locations.size(); nextCity++) {
            if (nextCity != city && remainFuel >= abs(locations[nextCity] - locations[city])) {
                total = (total + helper(locations, nextCity, finish, remainFuel - abs(locations[nextCity] - locations[city]), memo)) % MOD;
            }
        }
        
        return memo[city][remainFuel] = total;
    }

    int countRoutes(vector<int>& locations, int start, int finish, int fuel) {
        int n = locations.size();
        vector<vector<int>> memo(n, vector<int>(fuel + 1, -1));
        return helper(locations, start, finish, fuel, memo);
    }
};
```
```Java []
class Solution {
    private static final int MOD = 1000000007;

    public int helper(int[] locations, int city, int finish, int remainFuel, Integer[][] memo) {
        if (remainFuel < 0) {
            return 0;
        }
        
        if (memo[city][remainFuel] != null) {
            return memo[city][remainFuel];
        }
        
        int total = city == finish ? 1 : 0;
        
        for (int nextCity = 0; nextCity < locations.length; nextCity++) {
            if (nextCity != city && remainFuel >= Math.abs(locations[nextCity] - locations[city])) {
                total = (total + helper(locations, nextCity, finish, remainFuel - Math.abs(locations[nextCity] - locations[city]), memo)) % MOD;
            }
        }
        
        return memo[city][remainFuel] = total;
    }

    public int countRoutes(int[] locations, int start, int finish, int fuel) {
        int n = locations.length;
        Integer[][] memo = new Integer[n][fuel + 1];
        return helper(locations, start, finish, fuel, memo);
    }
}
```
```Python3 []
class Solution:
    MOD = 1000000007

    def helper(self, locations, city, finish, remainFuel, memo):
        if remainFuel < 0:
            return 0
        
        if memo[city][remainFuel] is not None:
            return memo[city][remainFuel]
        
        total = 1 if city == finish else 0
        
        for nextCity in range(len(locations)):
            if nextCity != city and remainFuel >= abs(locations[nextCity] - locations[city]):
                total = (total + self.helper(locations, nextCity, finish, remainFuel - abs(locations[nextCity] - locations[city]), memo)) % self.MOD
        
        memo[city][remainFuel] = total
        return total

    def countRoutes(self, locations, start, finish, fuel):
        n = len(locations)
        memo = [[None] * (fuel + 1) for _ in range(n)]
        return self.helper(locations, start, finish, fuel, memo)
```

# Tabulation:
# Code
```C++ []
class Solution {
public:
    int countRoutes(vector<int>& locations, int start, int finish, int fuel) {                
        const int MOD = 1000000007;
        int n = locations.size();    
        
        vector<vector<int>> dp(n, vector<int>(fuel + 1, 0));
        for (int f = 0; f <= fuel; f++) {
            dp[finish][f] = 1;
        }
        
        // for each fuel, we calculate all cross between cities
        for (int f = 0; f <= fuel; f++) {
            for (int city = 0; city < n; city++) {            
                for (int nextCity = 0; nextCity < n; nextCity++) {               
                    if (nextCity != city && f >= abs(locations[nextCity] - locations[city])) {
                        dp[city][f] = (dp[city][f] + dp[nextCity][f - abs(locations[nextCity] - locations[city])]) % MOD;
                    }
                }
            }            
        }
        return dp[start][fuel];
    }
};
```
```Java []
class Solution {
    public int countRoutes(int[] locations, int start, int finish, int fuel) {
        final int MOD = 1000000007;
        int n = locations.length;
        
        int[][] dp = new int[n][fuel + 1];
        for (int f = 0; f <= fuel; f++) {
            dp[finish][f] = 1;
        }
        
        for (int f = 0; f <= fuel; f++) {
            for (int city = 0; city < n; city++) {
                for (int nextCity = 0; nextCity < n; nextCity++) {
                    if (nextCity != city && f >= Math.abs(locations[nextCity] - locations[city])) {
                        dp[city][f] = (dp[city][f] + dp[nextCity][f - Math.abs(locations[nextCity] - locations[city])]) % MOD;
                    }
                }
            }
        }
        
        return dp[start][fuel];
    }
}
```
```Python3 []
class Solution:
    def countRoutes(self, locations, start, finish, fuel):
        MOD = 1000000007
        n = len(locations)
        
        dp = [[0] * (fuel + 1) for _ in range(n)]
        for f in range(fuel + 1):
            dp[finish][f] = 1
        
        for f in range(fuel + 1):
            for city in range(n):
                for nextCity in range(n):
                    if nextCity != city and f >= abs(locations[nextCity] - locations[city]):
                        dp[city][f] = (dp[city][f] + dp[nextCity][f - abs(locations[nextCity] - locations[city])]) % MOD
        
        return dp[start][fuel]
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**