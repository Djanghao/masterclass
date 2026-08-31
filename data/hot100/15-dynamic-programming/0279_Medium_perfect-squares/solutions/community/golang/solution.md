# 🔥🔥🔥 Dynamic Programming Solution | Explained 🔥🔥🔥

**Author:** pratamandiko
**Votes:** 8
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4694899/](https://leetcode.com/problems/perfect-squares/solutions/4694899/)

---

# Intuition
The goal is to minimize the number of steps or selections needed to reach exactly n. This problem can be solved by dynamic programming approach due to its optimal substructure and overlapping subproblems characteristics.

# Approach
1. **Initialize a Dynamic Programming Array (dp):** We start by creating an array dp of length n + 1 and initialize all its elements to Infinity, except for dp[0], which is set to 0. This dp array is used to store the least number of perfect squares that sum up to each value up to n.

2. **Iterate Through All Numbers Up to n:** For each number i from 1 to n, we determine the minimum number of perfect squares required to sum up to i. 

3. **Find the Minimum Number of Perfect Squares for Each i:** For each i, we iterate through all possible perfect square numbers j*j that are less than or equal to i. For each perfect square j*j, we look at dp[i - j*j] which gives us the least number of perfect squares needed to sum up to i - j*j. Adding one to this (representing the current perfect square j*j), we update dp[i] if this sum is smaller than the current value of dp[i]. This ensures that dp[i] holds the minimum number of perfect squares needed to sum to i.

4. **Dynamic Programming Recurrence Relation:** The essence of this approach is captured by the recurrence relation dp[i] = min(dp[i], dp[i - j*j] + 1) for all j*j <= i. This relation is applied iteratively to build up the solution for n starting from the base case.

# Complexity
- Time complexity:
**$$O(n x sqrt(n))$$**

- Space complexity:
**$$O(n)$$**

# Code
```javascript []
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j*j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }
    
    return dp[n];
};
```
```python3 []
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [float('inf')] * (n + 1)
        dp[0] = 0

        for i in range(1, n + 1):
            j = 1
            while j * j <= i:
                dp[i] = min(dp[i], dp[i - j * j] + 1)
                j += 1

        return dp[n]
```
```Go []
func numSquares(n int) int {
    dp := make([]int, n+1)
    for i := 1; i <= n; i++ {
        dp[i] = math.MaxInt32
    }
    dp[0] = 0

    for i := 1; i <= n; i++ {
        for j := 1; j*j <= i; j++ {
            dp[i] = min(dp[i], dp[i-j*j]+1)
        }
    }

    return dp[n]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
```Java []
class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }

        return dp[n];
    }
}

```
```C++ []
class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                dp[i] = min(dp[i], dp[i - j * j] + 1);
            }
        }

        return dp[n];
    }
};
```
# PLEASE UPVOTE IF ITS HELP!!!!!\uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE09