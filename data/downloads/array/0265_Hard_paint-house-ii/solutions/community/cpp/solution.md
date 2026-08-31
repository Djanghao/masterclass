# Sharing my simple 36ms C++ solution

**Author:** tryHarder
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/69543/](https://leetcode.com/problems/paint-house-ii/solutions/69543/)

---

    class Solution {
    public:
        int minCostII(vector<vector<int>>& costs) {
            int n = costs.size();
            if(n==0)
                return 0;
            int k = costs[0].size();
            if(k==0)
                return 0;
                
            vector<vector<int>> DP;
            DP.resize(n);
            int i, j, other;
            for(i=0; i<n; i++)
                DP[i].resize(k, 0);
                
            for(j=0; j<k; j++)
                DP[0][j] = costs[0][j];
                
            for(i=1; i<n; i++)
                for(j=0; j<k; j++)
                {
                    int minimum = INT_MAX;
                    for(other=0; other<k; other++)
                        if(other!=j)
                            minimum = min(minimum, DP[i-1][other]);
                    DP[i][j] = minimum + costs[i][j];
                }
                
            int result = INT_MAX;
            for(j=0; j<k; j++)
                result = min(result, DP[n-1][j]);
                
            return result;
        }
    };