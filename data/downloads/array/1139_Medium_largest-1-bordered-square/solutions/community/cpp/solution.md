# ✅✔️Easy and clean Implementation || C++ Solution ✈️✈️✈️✈️✈️

**Author:** ajay_1134
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/3862742/](https://leetcode.com/problems/largest-1-bordered-square/solutions/3862742/)

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

    void fillrd(int r, int c, vector<vector<int>>&rd, int n, int m, vector<vector<int>>& grid){
        int rcnt = 0, ccnt = 0;
        for(int j=c; j<m; j++){
            if(grid[r][j] == 0) break;
            rcnt++;
        }
        for(int i=r; i<n; i++){
            if(grid[i][c] == 0) break;
            ccnt++;
        }
        rd[r][c] = min(rcnt,ccnt);
    }

    void filllu(int r, int c, vector<vector<int>>&lu, int n, int m, vector<vector<int>>& grid){
        int rcnt = 0, ccnt = 0;
        for(int j=c; j>=0; j--){
            if(grid[r][j] == 0) break;
            rcnt++;
        }
        for(int i=r; i>=0; i--){
            if(grid[i][c] == 0) break;
            ccnt++;
        }
        lu[r][c] = min(rcnt,ccnt);
    }

    int solve(int r, int c, vector<vector<int>>&rd,vector<vector<int>>&lu){
        for(int sz=rd[r][c]; sz>0; sz--){
            if(lu[r+sz-1][c+sz-1] >= sz) return sz;
        }
        return 1;
    }

    int largest1BorderedSquare(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        vector<vector<int>>rd(n,vector<int>(m));
        vector<vector<int>>lu(n,vector<int>(m));
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                fillrd(i,j,rd,n,m,grid);
                filllu(i,j,lu,n,m,grid);
            }
        }
        int ans = 0;
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(grid[i][j] == 1) ans = max(ans, solve(i,j,rd,lu));
            }
        }
        return ans*ans;
    }
};
```