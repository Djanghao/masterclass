# [C++] | Easy to Understand | Math, Greedy | O(1) Space

**Author:** TLE_
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5356889/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5356889/)

---

* Idea : We are maintaining the leftmost, rightmost, topmost and bottommost indexes at which 1 appeared because these will form the boundaries of our required rectangle. Once we have these 4 values, we can just assume a rectangle around it with length as (bottom-top+1) and width as (right-left+1). we can simply multiply these 2 values to get the area.

```
 int minimumArea(vector<vector<int>>& grid) {
        int l = INT_MAX, r = INT_MIN, u = INT_MAX, d = INT_MIN;
        int n = grid.size(), m = grid[0].size();
        
        for(int i = 0 ; i<n; i++){
            for(int j = 0; j<m ; j++){
                if(grid[i][j]==1){
                    l = min(l,i);
                    r = max(r,i);
                    u = min(u,j);
                    d = max(d,j);
                }
            }
        }
        
        int reqarea = (r-l+1)*(d-u+1);
        return reqarea;
    }
```

Time : O(N^2)
Space : O(1)