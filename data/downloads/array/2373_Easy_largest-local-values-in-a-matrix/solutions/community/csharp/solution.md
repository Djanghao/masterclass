# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/4896777/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/4896777/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

# Code
```
class Solution {
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) 
    {
        int n = grid.size();
        vector<vector<int>>ans;
        vector<int>tmp;
        int mx = 0;
        for(int i=0;i<n-2;i++)
        {
            for(int j=0;j<n-2;j++)
            {
                for(int x=i;x<i+3;x++)
                {
                    for(int y=j;y<j+3;y++)
                    {
                        // cout<<x<<y<<" ";
                        mx = max(mx, grid[x][y]);
                    }
                    // cout<<endl;
                }
                // cout<<endl;
                tmp.push_back(mx);
                mx = 0;
            }
            ans.push_back(tmp);
            tmp.clear();
        }
        return ans;
    }
};
```