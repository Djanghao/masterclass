# ✅✔️Easy to understand C++ Solution using precalculations ✈️✈️✈️✈️✈️

**Author:** ajay_1134
**Votes:** 58
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4169812/](https://leetcode.com/problems/construct-product-matrix/solutions/4169812/)

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
    vector<vector<int>> constructProductMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        
        vector<vector<int>>ans(n,vector<int>(m));
        vector<vector<int>>xx(n,vector<int>(m));
        vector<vector<int>>yy(n,vector<int>(m));
        
        
        
        int mod = 12345;
        long long p = 1;
        
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                xx[i][j] = p;
                p *= grid[i][j];
                p %= mod;
            }
        }
        p = 1;
        for(int i=n-1; i>=0; i--){
            for(int j=m-1; j>=0; j--){
                yy[i][j] = p;
                p *= grid[i][j];
                p %= mod;
            }
        }
        
        
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                long long mul = xx[i][j] * yy[i][j];
                
                ans[i][j] = mul%mod;
            }
        }
        return ans;
    }
};
```