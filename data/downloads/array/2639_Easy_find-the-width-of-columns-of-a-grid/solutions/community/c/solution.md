# C++ || NUMBER TO STRING || SHORT & SWEET CODE || EASY TO UNDERSTAND

**Author:** yash___sharma_
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420106/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420106/)

---

````
class Solution {
public:
    vector<int> findColumnWidth(vector<vector<int>>& grid) {
        int i,j,m=grid.size(),n=grid[0].size(),k;
        vector<int> ans(n,0);
        for(i = 0; i < m; i++){
            for(j = 0; j < n; j++){
                k = to_string(grid[i][j]).length();
                ans[j] = max(ans[j],k);
            }
        }
        return ans;
    }
};
````