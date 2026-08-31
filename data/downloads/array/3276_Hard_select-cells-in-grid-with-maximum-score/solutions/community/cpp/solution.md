# Focus on uniqueness in values first, then uniqueness in rows | Full explanation

**Author:** virujthakur01
**Votes:** 67
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5718075/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5718075/)

---

So this one is a tricky one. Brute force suggests to try all possibilities on rows and maintain uniqueness through sets, which results in tle.

The optimisation lies in the fact that we can store values in increasing/ decreasing order and then only select values greater than / less than the previous value. This ensures uniqueness.

As for row uniqueness, we can store which row has been taken in previous states through a mask variable. The total possible values of this variable is 2^ (No. of rows) which fits well in the time constraints.
```
class Solution {
public:
    int recur(vector<vector<int>>& values, int idx, int mask_row, map<pair<int,int>, int>& dp)
    {
        int n= values.size();
        if(idx == n)
            return 0;
        
        if(dp.find({idx, mask_row})!= dp.end())
            return dp[{idx, mask_row}];
        
        int ans = 0;
        int row = values[idx][1];
        if((1<<row) & mask_row)
            ans += recur(values, idx+1, mask_row, dp);
        else
        {
            int j = idx;
            while (j< n and values[idx][0]== values[j][0])
                j++;
            
            int ans1= values[idx][0]+ recur(values, j, mask_row | (1<<row), dp);
            int ans2 = recur(values, idx+1, mask_row, dp);
            
            ans= max(ans1, ans2);
        }
            
        return dp[{idx, mask_row}]= ans;
        
    }
    int maxScore(vector<vector<int>>& grid) {
        int n= grid.size();
        int m= grid[0].size();
        vector<vector<int>> values;
        for(int i=0; i<n; i++)
        {
            for(int j=0; j<m; j++)
            {
                values.push_back({grid[i][j], i, j});
            }
        }
        
        
        sort(values.begin(), values.end(), greater<vector<int>>());
        map<pair<int,int>, int> dp;
        
        return recur(values, 0, 0, dp);
    }
};
```

TC: O(M*N* 2^M) SC: O(M*N*2^(M))