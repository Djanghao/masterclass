# ✅4 Method's 🤯 || Beat's 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 2502
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/3708750/](https://leetcode.com/problems/climbing-stairs/solutions/3708750/)

---

# Intuition:
To calculate the number of ways to climb the stairs, we can observe that when we are on the nth stair, 
we have two options: 
1. either we climbed one stair from the (n-1)th stair or 
2. we climbed two stairs from the (n-2)th stair. 

By leveraging this observation, we can break down the problem into smaller subproblems and apply the concept of the Fibonacci series. 
The base cases are when we are on the 1st stair (only one way to reach it) and the 2nd stair (two ways to reach it). 
By summing up the number of ways to reach the (n-1)th and (n-2)th stairs, we can compute the total number of ways to climb the stairs. This allows us to solve the problem efficiently using various dynamic programming techniques such as recursion, memoization, tabulation, or space optimization.

# Approach 1: Recursion ```\u274C TLE \u274C```
**Explanation**: The recursive solution uses the concept of Fibonacci numbers to solve the problem. It calculates the number of ways to climb the stairs by recursively calling the `climbStairs` function for (n-1) and (n-2) steps. However, this solution has exponential time complexity (O(2^n)) due to redundant calculations.

# Code
```C++ []
class Solution {
public:
    int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return climbStairs(n-1) + climbStairs(n-2);
    }
};
```
```Java []
class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return climbStairs(n-1) + climbStairs(n-2);
    }
}
```
```Python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        return self.climbStairs(n-1) + self.climbStairs(n-2)
```

# Approach 2: Memoization
**Explanation**: The memoization solution improves the recursive solution by introducing memoization, which avoids redundant calculations. We use an unordered map (`memo`) to store the already computed results for each step `n`. Before making a recursive call, we check if the result for the given `n` exists in the memo. If it does, we return the stored value; otherwise, we compute the result recursively and store it in the memo for future reference.

# Code
```C++ []
class Solution {
public:
    int climbStairs(int n, unordered_map<int, int>& memo) {
        if (n == 0 || n == 1) {
            return 1;
        }
        if (memo.find(n) == memo.end()) {
            memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
        }
        return memo[n];
    }

    int climbStairs(int n) {
        unordered_map<int, int> memo;
        return climbStairs(n, memo);
    }
};
```
```Java []
class Solution {
    public int climbStairs(int n) {
        Map<Integer, Integer> memo = new HashMap<>();
        return climbStairs(n, memo);
    }
    
    private int climbStairs(int n, Map<Integer, Integer> memo) {
        if (n == 0 || n == 1) {
            return 1;
        }
        if (!memo.containsKey(n)) {
            memo.put(n, climbStairs(n-1, memo) + climbStairs(n-2, memo));
        }
        return memo.get(n);
    }
}
```
```Python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        return self.helper(n, memo)
    
    def helper(self, n: int, memo: dict[int, int]) -> int:
        if n == 0 or n == 1:
            return 1
        if n not in memo:
            memo[n] = self.helper(n-1, memo) + self.helper(n-2, memo)
        return memo[n]
```

# Approach 3: Tabulation
**Explanation**: The tabulation solution eliminates recursion and uses a bottom-up approach to solve the problem iteratively. It creates a DP table (`dp`) of size n+1 to store the number of ways to reach each step. The base cases (0 and 1 steps) are initialized to 1 since there is only one way to reach them. Then, it iterates from 2 to n, filling in the DP table by summing up the values for the previous two steps. Finally, it returns the value in the last cell of the DP table, which represents the total number of ways to reach the top.

# Code
```C++ []
class Solution {
public:
    int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        vector<int> dp(n+1);
        dp[0] = dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
};
```
```Java []
class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        int[] dp = new int[n+1];
        dp[0] = dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
}
```
```Python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1

        dp = [0] * (n+1)
        dp[0] = dp[1] = 1
        
        for i in range(2, n+1):
            dp[i] = dp[i-1] + dp[i-2]
        return dp[n]
```

# Approach 4: Space Optimization
**Explanation**: The space-optimized solution further reduces the space complexity by using only two variables (`prev` and `curr`) instead of an entire DP table. It initializes `prev` and `curr` to 1 since there is only one way to reach the base cases (0 and 1 steps). Then, in each iteration, it updates `prev` and `curr` by shifting their values. `curr` becomes the sum of the previous two values, and `prev` stores the previous value of `curr`.

# Code
```C++ []
class Solution {
public:
    int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        int prev = 1, curr = 1;
        for (int i = 2; i <= n; i++) {
            int temp = curr;
            curr = prev + curr;
            prev = temp;
        }
        return curr;
    }
};
```
```Java []
class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        int prev = 1, curr = 1;
        for (int i = 2; i <= n; i++) {
            int temp = curr;
            curr = prev + curr;
            prev = temp;
        }
        return curr;
    }
}
```
```Python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        prev, curr = 1, 1
        for i in range(2, n+1):
            temp = curr
            curr = prev + curr
            prev = temp
        return curr
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**