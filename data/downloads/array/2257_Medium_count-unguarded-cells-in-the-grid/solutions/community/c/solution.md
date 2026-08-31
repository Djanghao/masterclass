# Easy C++ code with explanation

**Author:** venkatasaitanish
**Votes:** 61
**Link:** [https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/1994554/](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/1994554/)

---

Solving by brute force,

We first create a grid of the given rows & columns and initiliaze every cell to 0. We indicate the walls as -2 and guards as 2.
We iterate over the entire guards, for every guard we traverse in the 4 directions (left,right,up,down) until we find a wall or a guard.
Until we find a wall or guard, we mark the cell as 1 to indicate it can be guarded by the guard.

So finally we just count the elements which are 0, so these are the cells which are not guarded.

**Time Complexity: O(4*m*n)**

```
class Solution {
public:
    int countUnguarded(int m, int n, vector<vector<int>>& g, vector<vector<int>>& w) {
        // m is no. of rows, n is no. of columns, g is guards vector and w is walls vector
        vector<vector<int>> v(m, vector<int> (n,0));
        int k = w.size();
        for(int i=0;i<k;i++){
            int x = w[i][0], y = w[i][1];
            v[x][y] = -2;
        }
        k = g.size();
        for(int i=0;i<k;i++){
            int x = g[i][0], y = g[i][1];
            v[x][y] = 2;
        }
        for(int j=0;j<k;j++){
            int x = g[j][0], y = g[j][1];
            for(int i=x-1;i>=0;i--){ // up
                if(v[i][y]==-2 || v[i][y]==2) break;
                v[i][y] = 1;
            }
            for(int i=x+1;i<m;i++){ // down
                if(v[i][y]==-2 || v[i][y]==2) break;
                v[i][y] = 1;
            }
            for(int i=y-1;i>=0;i--){ // left
                if(v[x][i]==-2 || v[x][i]==2) break;
                v[x][i] = 1;
            }
            for(int i=y+1;i<n;i++){ // right
                if(v[x][i]==-2 || v[x][i]==2) break;
                v[x][i] = 1;
            }
        }
        int ans = 0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(!v[i][j]) ans++;
            }
        }
        return ans;
    }
};
```

**Reason for solutions which got TLE:**
Let's say if m=10^5 and n=1 and g = 10^5-1 guards are present one after another in the same line from first cell.
If we don't mark the guards prior for checking the guarded cells, then you end up travelling the same cell many times as you don't know some other cells of guard.
Then time complexity = (g-1) + (g-2) + ... 1 = g*(g-1)/2. So it is nearly equal to 10^9. So it leads to TLE.

So marking the guard cells prior to checking, stops the revisiting of cell as you stop the iteration, whenever you find a guard.

Thanks to @kurshcise for pointing it out.
You can find out his explanation in the comments.

**Upvote if it helps !**
