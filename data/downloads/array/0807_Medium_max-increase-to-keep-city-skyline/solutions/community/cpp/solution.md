# easiest solution || c++ || easy to understand || just simplest approach 🤔🤔

**Author:** youdontknow001
**Votes:** 10
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/2851021/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/2851021/)

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
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        int n = grid.size();
        // vector<vector<int>> row(n,vector<int>(n, 0)),col(n,vector<int>(n,0));
        vector<int> row,col;
        for(int i=0;i<n;i++){
            int maxi = INT_MIN;
            for(int j=0;j<n;j++){
                maxi=max(maxi,grid[i][j]);
            }
            row.push_back(maxi);
        }
        for(int i=0;i<n;i++){
            int maxi = INT_MIN;
            for(int j=0;j<n;j++){
                maxi=max(maxi,grid[j][i]);
            }
            col.push_back(maxi);
        }
        int sum = 0;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                sum+=abs(grid[i][j]-min(row[i],col[j]));
            }
        }
        return sum;
    }
};
```