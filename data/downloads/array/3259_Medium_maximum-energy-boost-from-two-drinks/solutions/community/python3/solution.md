# DP || O(1) space

**Author:** fahad_Mubeen
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5653184/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5653184/)

---

# Intution
1. **State Definition:** Define the state of DP with two parameters:
    
    - **Current Index:** represents the position in the arrays where the decision is being made.
    - **Last Choice:** indicates whether the last chosen energy boost was from array A or array B.

2. **State Representation:** Use a DP table where `dp[i][curr]` represents the maximum energy boost achievable starting from index **i** with **curr** indicating the last choice:
    - `curr = 1:` The last boost was chosen from array A.
    - `curr = 0:` The last boost was chosen from array B.
    
3. **Transition:** At each index:
    - If curr is 1 (last choice was A): Compute the maximum boost by either:
        - Continuing with array A (adding the current element from A).
        - Switching to array B.
    - If curr is 0 (last choice was B): Compute the maximum boost by either:
        - Continuing with array B (adding the current element from B).
        - Switching to array A. 


4. Finally compute the result by starting from index 0 and considering both possibilities (starting with A or B).

# Top Down

```C++ []
class Solution {
public:
    #define ll long long
    vector<vector<ll>> dp;
    ll f(vector<int>& A, vector<int>& B, int i, int curr) {
        if (i >= A.size()) return 0;
        if(dp[i][curr] != -1) return dp[i][curr];

        ll ans = 0;
        if(curr)
            ans = max(A[i] + f(A, B, i + 1, curr), f(A, B, i + 1, curr ^ 1));

        else
            ans = max(B[i] + f(A, B, i + 1, curr), f(A, B, i + 1, curr ^ 1));

        return dp[i][curr] = ans;
    }

    long long maxEnergyBoost(vector<int>& A, vector<int>& B){
        int n = A.size();
        dp.clear();
        dp.resize(n, vector<ll>(2, -1));  
        return max(f(A, B, 0, 1), f(A, B, 0, 0));
    }
};
```
```Java []
class Solution {
    private long[][] dp;

    private long f(int[] A, int[] B, int i, int curr) {
        if (i >= A.length) return 0;
        if (dp[i][curr] != -1) return dp[i][curr];

        long ans = 0;
        if (curr == 1) {
            ans = Math.max(A[i] + f(A, B, i + 1, curr), f(A, B, i + 1, 1 - curr));
        } else {
            ans = Math.max(B[i] + f(A, B, i + 1, curr), f(A, B, i + 1, 1 - curr));
        }

        return dp[i][curr] = ans;
    }

    public long maxEnergyBoost(int[] energyDrinkA, int[] energyDrinkB) {
        int n = energyDrinkA.length;
        dp = new long[n][2];
        for (long[] row : dp) {
            Arrays.fill(row, -1);
        }
        return Math.max(f(energyDrinkA, energyDrinkB, 0, 1), f(energyDrinkA, energyDrinkB, 0, 0));
    }
}

```
```Python3 []
class Solution:
    def __init__(self):
        self.dp = []
    
    def f(self, A: List[int], B: List[int], i: int, curr: int) -> int:
        if i >= len(A):
            return 0
        if self.dp[i][curr] != -1:
            return self.dp[i][curr]

        ans = 0
        if curr == 1:
            ans = max(A[i] + self.f(A, B, i + 1, curr), self.f(A, B, i + 1, 1 - curr))
        else:
            ans = max(B[i] + self.f(A, B, i + 1, curr), self.f(A, B, i + 1, 1 - curr))

        self.dp[i][curr] = ans
        return ans

    def maxEnergyBoost(self, energyDrinkA: List[int], energyDrinkB: List[int]) -> int:
        n = len(energyDrinkA)
        self.dp = [[-1] * 2 for _ in range(n)]
        return max(self.f(energyDrinkA, energyDrinkB, 0, 1), self.f(energyDrinkA, energyDrinkB, 0, 0))
```

# Bottom Up
```C++ []
class Solution {
public:
    #define ll long long

    long long maxEnergyBoost(vector<int>& A, vector<int>& B) {
        int n = A.size();
        vector<vector<ll>> dp(n + 5, vector<ll>(2, 0));

        for(int i = n - 1; i >= 0; i--){ 
            dp[i][0] = max(B[i] + dp[i + 1][0], dp[i + 1][1]);
            dp[i][1] = max(A[i] + dp[i + 1][1], dp[i + 1][0]);
        }

        return max(dp[0][0], dp[0][1]);
    }
};
```
```Java []
class Solution {
    public long maxEnergyBoost(int[] A, int[] B) {
        int n = A.length;
        long[][] dp = new long[n + 5][2];

        for (int i = n - 1; i >= 0; i--) {
            dp[i][0] = Math.max(B[i] + dp[i + 1][0], dp[i + 1][1]);
            dp[i][1] = Math.max(A[i] + dp[i + 1][1], dp[i + 1][0]);
        }

        return Math.max(dp[0][0], dp[0][1]);
    }
}
```
```Python3 []
class Solution:
    def maxEnergyBoost(self, A: List[int], B: List[int]) -> int:
        n = len(A)
        dp = [[0] * 2 for _ in range(n + 5)]

        for i in range(n - 1, -1, -1):
            dp[i][0] = max(B[i] + dp[i + 1][0], dp[i + 1][1])
            dp[i][1] = max(A[i] + dp[i + 1][1], dp[i + 1][0])

        return max(dp[0][0], dp[0][1])

```
# Space Optimised
```C++ []
class Solution {
public:
    long long maxEnergyBoost(vector<int>& A, vector<int>& B) {
        int n = A.size();
        vector<long long> curr(2, 0), next(2, 0);

        for(int i = n - 1; i >= 0; i--){
            curr[0] = max(B[i] + next[0], next[1]);
            curr[1] = max(A[i] + next[1], next[0]);
            next = curr;
        }

        return max(next[0], next[1]);
    }
};
```
```Java []
class Solution {
    public long maxEnergyBoost(int[] A, int[] B) {
        int n = A.length;
        long[] curr = new long[2];
        long[] next = new long[2];

        for (int i = n - 1; i >= 0; --i) {
            curr[0] = Math.max(B[i] + next[0], next[1]);
            curr[1] = Math.max(A[i] + next[1], next[0]);
            System.arraycopy(curr, 0, next, 0, 2);
        }

        return Math.max(next[0], next[1]);
    }
}
```
```Python3 []
from typing import List

class Solution:
    def maxEnergyBoost(self, A: List[int], B: List[int]) -> int:
        n = len(A)
        curr = [0, 0]
        next = [0, 0]

        for i in range(n - 1, -1, -1):
            curr[0] = max(B[i] + next[0], next[1])
            curr[1] = max(A[i] + next[1], next[0])
            next[:] = curr

        return max(next[0], next[1])

```
