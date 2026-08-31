# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || Brute->Optimized || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 139
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4458561/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4458561/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2023-12-24 062247.png](./images/0.png)


# Approaches
(Also explained in the code)
#### ***Approach 1(Brute Force)***

1. **Memoization:** The solution uses a 2D array `dp` for memoization to store and reuse previously computed results. `dp[n][target]` stores the number of ways to obtain the target sum with 'n' dice rolls.

1. **Recursion:**

    - **Base Cases:**

        - If 'n' becomes 0 and the target becomes 0 (`target == 0 && n == 0`), there is exactly one way to achieve this - return 1.
        - If 'n' becomes 0 or the target reaches 0 (`n == 0 || target <= 0`), no further dice rolls are possible, so return 0.
    - **Calculation:**

        - If the result for the current state is already calculated (`dp[n][target] != -1`), return the stored result.
        - Otherwise, for each possible face value of the die (from 1 to 'k'), calculate the number of ways to achieve the target sum by recursively calling the function for 'n-1' dice rolls and subtracting the current face value from the target sum.
        - Accumulate these `ways` in the ways variable.
    - **Memoize Result:**

        - Store the computed result in the `dp` array to avoid recalculating the same state.
1. **Return:** Return the final count of ways modulo `10^9 + 7` to handle large values and provide the result.


# Complexity
- **Time complexity:**
   $$O(n * target * k)$$
*(where 'n' is the number of dice, 'k' is the number of faces, and 'target' is the target sum.)*
    

- **Space complexity:**
  ** $$O(n * target)$$**
(*the space used by the memoization table (dp).*)
    


# Code
```C++ []
class Solution {
public:
    const int mod = (int)pow(10, 9) + 7; // Modulo value for calculations

    // Function to calculate the number of ways to obtain a target sum using 'n' dice rolls with 'k' faces on each die
    int numRollsToTarget(int n, int k, int target) {
        vector<vector<int>> dp(n + 1, vector<int>(target + 1, -1)); // Create a 2D vector for memoization
        return recursion(dp, n, k, target); // Call the recursive function with memoization
    }

private:
    // Recursive function to calculate the number of ways to obtain the target sum
    int recursion(vector<vector<int>>& dp, int n, int k, int target) {
        // Base cases: if the target sum is reached with 'n' dice rolls or if 'n' becomes 0 or target reaches 0, return accordingly
        if (target == 0 && n == 0) return 1;
        if (n == 0 || target <= 0) return 0;

        // If the result is already computed, return the stored value from the memoization table
        if (dp[n][target] != -1) return dp[n][target] % mod;

        int ways = 0; // Variable to count the number of ways to obtain the target sum
        for (int i = 1; i <= k; i++) {
            // Calculate the number of ways by considering each possible face value of the die
            ways = (ways + recursion(dp, n - 1, k, target - i)) % mod;
        }
        dp[n][target] = ways % mod; // Store the computed result in the memoization table
        return dp[n][target];
    }
};




```
```Java []
import java.util.Arrays;

class Solution {
    final int mod = (int) Math.pow(10, 9) + 7;

    public int numRollsToTarget(int n, int k, int target) {
        int[][] dp = new int[n + 1][target + 1];
        for (int[] d : dp) {
            Arrays.fill(d, -1);
        }
        return recursion(dp, n, k, target);
    }

    private int recursion(int[][] dp, int n, int k, int target) {
        if (target == 0 && n == 0) return 1;
        if (n == 0 || target <= 0) return 0;

        if (dp[n][target] != -1) return (int) (dp[n][target] % mod);
        int ways = 0;
        for (int i = 1; i <= k; i++) {
            ways = (ways + recursion(dp, n - 1, k, target - i)) % mod;
        }
        dp[n][target] = ways % mod;
        return dp[n][target];
    }
}



```
```python3 []
class Solution:
    mod = 10 ** 9 + 7

    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        dp = [[-1] * (target + 1) for _ in range(n + 1)]
        return self.recursion(dp, n, k, target)

    def recursion(self, dp: list, n: int, k: int, target: int) -> int:
        if target == 0 and n == 0:
            return 1
        if n == 0 or target <= 0:
            return 0

        if dp[n][target] != -1:
            return dp[n][target] % self.mod

        ways = 0
        for i in range(1, k + 1):
            ways = (ways + self.recursion(dp, n - 1, k, target - i)) % self.mod

        dp[n][target] = ways % self.mod
        return dp[n][target]



```
```javascript []
class Solution {
    constructor() {
        this.mod = Math.pow(10, 9) + 7;
    }

    numRollsToTarget(n, k, target) {
        const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));
        return this.recursion(dp, n, k, target);
    }

    recursion(dp, n, k, target) {
        if (target === 0 && n === 0) return 1;
        if (n === 0 || target <= 0) return 0;

        if (dp[n][target] !== -1) return dp[n][target] % this.mod;

        let ways = 0;
        for (let i = 1; i <= k; i++) {
            ways = (ways + this.recursion(dp, n - 1, k, target - i)) % this.mod;
        }
        dp[n][target] = ways % this.mod;
        return dp[n][target];
    }
}



```
---

#### ***Approach 2(Optimized)***
1. **solve() function:**

    - Initializes `prev` and `curr` arrays to store the number of ways to get the sum 'j'.
    - Uses dynamic programming to calculate the number of ways to achieve the target sum 'j' using 'i' dice rolls.
    - The innermost loop iterates through all possible outcomes of a single dice roll to calculate the number of ways to reach the current sum.
    - Updates `prev` and `curr` arrays to move to the next dice roll iteration.
    - Returns the number of ways to achieve the target sum with 'n' dice rolls.
1. **numRollsToTarget() function:**

    - Calls the `solve()` function with the given parameters 'n', 'k', and 'target'.
    - Returns the result obtained from the `solve()` function.



# Complexity
- **Time complexity:**
   $$O(n * target * k)$$

    

- **Space complexity:**
  $$O(target)$$

    


# Code
```C++ []
class Solution {
public:

    // Function to solve the problem using dynamic programming
    long long solve(int n, int k, int target){
        // Initializing previous and current arrays to store the number of ways to get the sum 'j'
        vector<long long> prev(target+1,0);
        vector<long long> curr(target+1,0);

        prev[0]=1; // Base case: There's only one way to achieve sum 0

        int mod = 1e9+7; // Modulo value

        // Loop through 'n' dice rolls
        for(int i=1;i<=n;i++){
            // For each number 'j' from 1 to the target
            for(int j=1;j<=target;j++){
                long long ans=0;

                // Calculate the number of ways to achieve sum 'j' with 'i' dice rolls
                for(int x=1;x<=k;x++){
                    if(j-x>=0){
                        ans+=prev[j-x] % mod;
                    }
                }
                curr[j] = ans; // Store the result in the current array
            }
            prev = curr; // Update the previous array for the next iteration
        }
        return prev[target] % mod; // Return the result
    }

    // Function to call the solve function and solve the problem
    int numRollsToTarget(int n, int k, int target) {
        return solve(n, k, target) ; // Call the solve function and return the result
    }
};




```
```Java []
class Solution {
    public int numRollsToTarget(int n, int k, int target) {
        long mod = (long) Math.pow(10, 9) + 7;

        long[] prev = new long[target + 1];
        long[] curr = new long[target + 1];

        prev[0] = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= target; j++) {
                long ans = 0;
                for (int x = 1; x <= k; x++) {
                    if (j - x >= 0) {
                        ans += prev[j - x] % mod;
                    }
                }
                curr[j] = ans;
            }
            prev = curr.clone();
        }
        return (int) (prev[target] % mod);
    }
}



```
```python3 []
class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        mod = 10**9 + 7

        prev = [0] * (target + 1)
        curr = [0] * (target + 1)

        prev[0] = 1

        for i in range(1, n + 1):
            for j in range(1, target + 1):
                ans = 0
                for x in range(1, k + 1):
                    if j - x >= 0:
                        ans += prev[j - x] % mod
                curr[j] = ans
            prev = curr[:]
        return int(prev[target] % mod)



```
```javascript []

var numRollsToTarget = function(n, k, target) {
    const mod = Math.pow(10, 9) + 7;

    let prev = new Array(target + 1).fill(0);
    let curr = new Array(target + 1).fill(0);

    prev[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            let ans = 0;
            for (let x = 1; x <= k; x++) {
                if (j - x >= 0) {
                    ans += prev[j - x] % mod;
                }
            }
            curr[j] = ans;
        }
        prev = [...curr];
    }
    return prev[target] % mod;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---