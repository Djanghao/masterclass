# Simple Solution || Beginner Friendly || Easy to Understand ✅

**Author:** Anirban_Pramanik10
**Votes:** 64
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4333597/](https://leetcode.com/problems/knight-dialer/solutions/4333597/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
###### The approach of this code is based on dynamic programming to compute the number of distinct phone numbers of length `n` that a knight can dial, starting from any digit. The knight moves according to the valid knight moves on a phone pad, and the goal is to find the total number of valid phone numbers of length `n`.

#### Here's a step-by-step explanation of the approach:

$$Initialization:$$

- Initialize a 2D array `dp` of size `n x 10`, where `n` is the length of the phone number and `10` represents the possible digits.
- Set the values in the first row of `dp` to 1 because there is only one way to reach each digit from the starting position (the knight is already there).

$$Dynamic Programming Iteration:$$

- Use a nested loop structure to iterate over the steps (`i`) and digits (`j`).
- For each step and digit, iterate over the possible next moves from the current digit according to the valid knight moves.
- Update the count in `dp[i][j]` by adding the counts from the previous step `(dp[i-1][next])`, considering all possible moves.
- Take the result modulo `1_000_000_007` to handle large numbers.

$$Result Calculation:$$
- After completing the dynamic programming steps, calculate the final result by summing up the counts for each digit in the last row of `dp`.
- Return the result modulo `1_000_000_007` as the answer may be very large.
# Complexity
- Time complexity: `O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int knightDialer(int n) {
        final int MOD = 1_000_000_007;
        int[][] moves = {{4, 6}, {6, 8}, {7, 9}, {4, 8}, {0, 3, 9}, {}, {0, 1, 7}, {2, 6}, {1, 3}, {2, 4}};
        int[][] dp = new int[n][10];
        Arrays.fill(dp[0], 1);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < 10; j++) {
                for (int next : moves[j]) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][next]) % MOD;
                }
            }
        }

        int result = 0;
        for (int count : dp[n - 1]) {
            result = (result + count) % MOD;
        }

        return result;
    }
}
```
```python []
class Solution:
    def knightDialer(self, n: int) -> int:
        MOD = 10**9 + 7
        moves = {0: [4, 6], 1: [6, 8], 2: [7, 9], 3: [4, 8], 4: [0, 3, 9], 5: [], 6: [0, 1, 7], 7: [2, 6], 8: [1, 3], 9: [2, 4]}
        dp = dict()
        
        # base cases
        for i in range(10):
            dp[(1, i)] = 1
        
        # bottom up
        for m in range(2, n+1):  # calculate all subproblems of len m digits
            for currDigit in range(10):  # calculate all subproblems of len m digits starting at currDigit
                dp[(m, currDigit)] = sum([dp[(m-1, nextDigit)] for nextDigit in moves[currDigit]]) % MOD
        return sum([dp[(n, i)] for i in range(10)]) % MOD
```
```python3 []
class Solution:
    def knightDialer(self, n: int) -> int:
        @lru_cache(None)
        def helper(n, row, col):
            if n==0:
                return 1
            ans=0
            for row_i, col_i in [[2,1], [1,2], [-2,1], [-1,2], [2,-1], [1,-2], [-2,-1], [-1,-2]]:
                new_row = row+row_i
                new_col = col+col_i
                if (-1<new_row<3 and -1<new_col<3) or (new_row==3 and new_col==1):
                    ans+=helper(n-1, new_row, new_col)
            return ans%(10**9+7)
        
        ans = helper(n-1, 3, 1)
        for row in range(3):
            for col in range(3):
                ans += helper(n-1, row, col)
        return ans%(10**9+7)
```
```C++ []
class Solution {
public:
    int knightDialer(int n) {
        vector<vector<int>> keypad{{4,6},{6,8},{7,9},{4,8},{0,3,9},{},{1,7,0},{2,6},{1,3},{4,2}};
        vector<vector<int>> dp(10,vector<int>(n+1,0));
        for(int i=0;i<10;i++) {
            dp[i][1]=1;
        }
        if(n==1) return 10;
        for(int j=2;j<=n;j++) {
            for(int i=0;i<10;i++) {
                for(int k=0;k<keypad[i].size();k++) {
                    dp[i][j]=(dp[i][j]+dp[ keypad[i][k] ][j-1])%1000000007;
                }
            }
        }
        int ans=0;
        for(int i=0;i<10;i++) {
            ans=(ans+dp[i][n])%1000000007;
        }
        return ans;
    }
};
```
```C []
class Solution {
public:
    int knightDialer(int n) {
        vector<vector<int>> keypad{{4,6},{6,8},{7,9},{4,8},{0,3,9},{},{1,7,0},{2,6},{1,3},{4,2}};
        vector<vector<int>> dp(10,vector<int>(n+1,0));
        for(int i=0;i<10;i++) {
            dp[i][1]=1;
        }
        if(n==1) return 10;
        for(int j=2;j<=n;j++) {
            for(int i=0;i<10;i++) {
                for(int k=0;k<keypad[i].size();k++) {
                    dp[i][j]=(dp[i][j]+dp[keypad[i][k] ][j-1])%1000000007;
                }
            }
        }
        int ans=0;
        for(int i=0;i<10;i++) {
            ans=(ans+dp[i][n])%1000000007;
        }
        return ans;
    }
};
```
```Javacsript []
var knightDialer = function(moves) {
    const MOD = 1e9 + 7;
    const memo = new Map();
    const nextValidKeys = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4]
    };  
    
    let count = 0;
    
    for (let i = 0; i <= 9; i++) {
        count = (count + countDistinctWays(i, moves - 1)) % MOD;
    }
    
    return count;
    
    function countDistinctWays(currKey, n) {
        const key = `${currKey}#${n}`;
        
		// base case
        if (n == 0) return 1;
        if (memo.has(key)) return memo.get(key);
        
        let count = 0;
        
        for (const nextKey of nextValidKeys[currKey]) {
            count = (count + countDistinctWays(nextKey, n - 1)) % MOD;
        }
        
        memo.set(key, count);
        return count;
    }
};
```
# If you like the solution please UPVOTE !!
![da69d522-8deb-4aa6-a4db-446363bf029f_1687283488.9528875.gif](./images/0.gif)


