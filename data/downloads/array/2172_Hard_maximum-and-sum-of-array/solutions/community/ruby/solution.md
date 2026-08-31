# Best Simple Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/3138124/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/3138124/)

---


```
class Solution {
public:
    int maximumANDSum(vector<int>& A, int ns) {
        int mask = pow(3, ns) - 1;
        vector<int> memo(mask + 1, 0);
        return dp(A.size() - 1, mask, ns, memo, A);
    }
    
    int dp(int i, int mask, int ns, vector<int>& memo, vector<int>& A) {
        if (memo[mask] > 0) return memo[mask];
        if (i < 0) return 0;
        for (int slot = 1, bit = 1; slot <= ns; ++slot, bit*= 3)
            if (mask / bit % 3 > 0)
                memo[mask] = max(memo[mask], (A[i] & slot) + dp(i - 1, mask - bit, ns, memo, A));
        return memo[mask];
    }
};
```