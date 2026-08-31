# C++ Intuitive Solution via Bound Analyzation

**Author:** user4695o
**Votes:** 0
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/5643003/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/5643003/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
public:\r
    vector<vector<int>> rotateGrid(vector<vector<int>>& grid, int k) {\r
        const int n = grid.size(), m = grid[0].size();\r
        vector<vector<int>> newGrid(n,vector<int>(m));;\r
        for(int i = 0; i < min(n,m)/2; ++i){\r
            int loc = k % (((n - (i * 2)) * 2) + ((m - 2 - (i * 2)) * 2));\r
            pair<int,int> temp1, temp2;\r
            for(int x = n-i-1; x >= i; --x){\r
                temp1 = determineLoc(x, i    , i, n-i-1, i, m-i-1, loc);\r
                temp2 = determineLoc(x, m-i-1, i, n-i-1, i, m-i-1, loc);\r
                newGrid[temp1.first][temp1.second] = grid[x][i    ];\r
                newGrid[temp2.first][temp2.second] = grid[x][m-i-1];\r
            }\r
            for(int y = i; y < m-i-1; ++y){\r
                temp1 = determineLoc(i    , y, i, n-i-1, i, m-i-1, loc);\r
                temp2 = determineLoc(n-i-1, y, i, n-i-1, i, m-i-1, loc);\r
                newGrid[temp1.first][temp1.second] = grid[i    ][y];\r
                newGrid[temp2.first][temp2.second] = grid[n-i-1][y];\r
            }\r
        }\r
        return newGrid;\r
    }\r
\r
    pair<int, int> determineLoc(int x, int y, int lLim, int rLim, int dLim, int uLim, int step){\r
        if(step == 0) return make_pair(x, y);\r
        else if(y == uLim){\r
            if(step <= x - lLim) return make_pair(x - step, y);\r
            else{\r
                step -= (x - lLim);\r
                x = lLim;\r
            }\r
        }\r
        if(x == lLim){\r
            if(step <= y - dLim) return make_pair(x, y - step);\r
            else{\r
                step -= (y - dLim);\r
                y = dLim;\r
            }\r
        }\r
        if(y == dLim){\r
            if(step <= rLim - x) return make_pair(x + step, y);\r
            else{\r
                step -= (rLim - x);\r
                x = rLim;\r
            }\r
        }\r
        if(x == rLim){\r
            if(step <= uLim - y) return make_pair(x, y + step);\r
            else{\r
                step -= (uLim - y);\r
                y = uLim;\r
            }\r
        }\r
        return determineLoc(x, y, lLim, rLim, dLim, uLim, step);\r
    }\r
};\r
```