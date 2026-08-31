# C++ SOLUTION CODE

**Author:** mrigankraj2003
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4587526/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4587526/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    // Using 3D DP
    int dp[51][51][101];
    int n, m, k;

    int solve(int len, int lisLen, int lar){
        if(len == n){
            if(lisLen == k) return 1;
            return 0;
        }

        if(dp[len][lisLen][lar] != -1) return dp[len][lisLen][lar];

        int ans = 0;
        for(int i = 1; i <= m; i++){
            if(i > lar){
                ans += solve(len + 1, lisLen + 1, i);
            }else{
                ans += solve(len + 1, lisLen, lar);
            }

            ans = ans % 1000000007;
        }

        return dp[len][lisLen][lar] = ans;
    }
    
    int numOfArrays(int N, int M, int K) {
        memset(dp, -1, sizeof(dp));
        n = N; m = M; k = K;
        return solve(0, 0, 0);
    }
};
```