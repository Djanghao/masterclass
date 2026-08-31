# Explained - Find min upto that cell and take diff

**Author:** kreakEmp
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5145595/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5145595/)

---

# Intuition
- Need to find the min max, such that min item cell should be towards left and top of the max item cell.

# Approach
- Keep tracking the smallest number till the current cell torards its left and towards its top.
- Consider the current cell as the max item and take diff. Keep tracking the max diff

# Complexity
- Time complexity: O(N.N)

- Space complexity: O(1)

# Code
```
int maxScore(vector<vector<int>>& grid) {
    int ans = INT_MIN;
    for(int i = 0; i < grid.size(); ++i){
        for(int j = 0; j < grid[0].size(); ++j){
            int mn = INT_MAX;
            if(i == 0 && j == 0) continue;
            if(i != 0) mn = min(mn, grid[i-1][j]);
            if(j != 0) mn = min(mn, grid[i][j-1]);
            ans = max(ans, grid[i][j] - mn);
            grid[i][j] = min(grid[i][j], mn);
        }
    }
    return ans;
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---