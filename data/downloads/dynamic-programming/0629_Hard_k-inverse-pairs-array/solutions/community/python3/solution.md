# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 63
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632048/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632048/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)

1. **Dynamic Programming:**

    - Use a 2D array `dp` to store the number of arrays with at most `k` inverse pairs for each size i and number of inverse pairs `j`.
Initialize `dp[0][0]` to 1 as a base case.
1. **Recurrence Relation:**

    - For each `i` and `j`, iterate over `x` to compute the number of arrays with at most `k` inverse pairs.
    - Update `dp[i][j]` based on the recurrence relation: `dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % 1000000007`.
1. **Result:**

    - The final result is stored in `dp[n][k]`, representing the number of arrays with at most `k` inverse pairs for an array of size `n`.



# Complexity
- Time complexity:
   $$O(n*k^2)$$
    

- Space complexity:
   $$O(n*k)$$
    


# Code
```C++ []
class Solution {
public:
    int kInversePairs(int n, int k) {
        int dp[1001][1001] = {1};  
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= k; j++) {
                for (int x = 0; x <= min(j, i - 1); x++) {
                    
                    if (j - x >= 0) {
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % 1000000007;
                    }
                }
            }
        }

        return dp[n][k];
    }
};




```
```Java []
class Solution {
    public int kInversePairs(int n, int k) {
        int[][] dp = new int[1001][1001];
        dp[0][0] = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= k; j++) {
                for (int x = 0; x <= Math.min(j, i - 1); x++) {
                    if (j - x >= 0) {
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % 1000000007;
                    }
                }
            }
        }

        return dp[n][k];
    }
}



```
```python3 []
class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        dp = [[0] * 1001 for _ in range(1001)]
        dp[0][0] = 1

        for i in range(1, n + 1):
            for j in range(0, k + 1):
                for x in range(0, min(j, i - 1) + 1):
                    if j - x >= 0:
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % 1000000007

        return dp[n][k]


```

```javascript []
var kInversePairs = function(n, k) {
    const M = 1000000007;
    let dp = new Array(1001).fill(0).map(() => new Array(1001).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            for (let x = 0; x <= Math.min(j, i - 1); x++) {
                if (j - x >= 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % M;
                }
            }
        }
    }

    return dp[n][k];
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---