# C++ Linear solution, beat 100% solutions

**Author:** leetcoders111
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5159740/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5159740/)

---

# Approach
$$DFS$$

# Complexity
- Time complexity:
$$O(n*m*4)$$

- Space complexity:
$$O(n*m*4)$$

# Code
```
class Solution {
public:
    #pragma GCC optimization ("O3")
    #pragma GCC optimization ("unroll-loops")

    bool vis[301][301][5];
    int n, m;
    int dx[4]= {0, 1, 0, -1};
    int dy[4]= {1, 0, -1, 0};
    vector<vector<int>>g;
    inline void run(int x, int y, int d) {

        if(vis[x][y][d]) {
            return;
        }

        vis[x][y][d]= 1;
        g[x][y]= 2;

        int x1= x+dx[d];
        int y1= y+dy[d];
        if(x1<0 || x1==n || y1<0 || y1==m || g[x1][y1]==1) {
            run(x, y, (d+1)%4);
        }
        else {
            run(x1, y1, d);
        }
    }
    int numberOfCleanRooms(vector<vector<int>>& room) {
        g= room;
        n= g.size();
        m= g[0].size();
        run(0, 0, 0);
        int ret= 0;
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(g[i][j]==2) {
                    ret++;
                }
            }
        }
        return ret;
    }
};
```