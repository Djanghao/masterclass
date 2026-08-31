# ✅ C++ code | BFS as well as DFS Approach | Simple Solution | Runtime : 20ms

**Author:** HustlerNitin
**Votes:** 165
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1743503/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1743503/)

---

\u2714 ***All codes are running successfully !***
*if you find that this post to be helpful for you, So, please take out **one second** for single UPVOTE.* 

____
**1. DFS Approach :**

> **Time Complexity :** **`O(M*N)`**, When worst case occur then all cells are reachable to both oceans and also visited twice.  And this will happened only when all elements are become equal.
> **Space Complexity :** **`O(M*N)`**, to mark the atlantic and pacific visited cells.
```
class Solution {
public:
    
    /// main logic or trick for this problem : bahar se andar ki taraf jao
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        
        vector<vector<int>>ans;
        int m = heights.size();
        int n = heights[0].size();
        
        vector<vector<bool>> pacific(m, vector<bool>(n));
        vector<vector<bool>> atlantic(m, vector<bool>(n));
        
        for (int i = 0; i < m; i++) {
            
            dfs(heights, pacific, i, 0);
            dfs(heights, atlantic, i, n-1);

        }
        
        for (int j = 0; j < n; j++) {
            
            dfs(heights, pacific, 0, j);
            dfs(heights, atlantic, m-1, j);
        }

        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                
                if (pacific[i][j] && atlantic[i][j]) // agar uss particular point se dono oceans mai jaa paa rahe hai
                    ans.push_back({i,j});           // toh answer push kardo
            }
        }
        return ans;
    }
    
    void dfs(vector<vector<int>>& h, vector<vector<bool>>& vis, int i, int j) {
        
        int m = h.size();
        int n = h[0].size();

        vis[i][j] = true;
        //up
        if (i-1 >= 0 && vis[i-1][j] != true && h[i-1][j] >= h[i][j])
            dfs(h, vis, i-1, j);
        //down
        if (i+1 < m && vis[i+1][j] != true && h[i+1][j] >= h[i][j])
            dfs(h, vis, i+1, j);
        //left
        if (j-1 >= 0 && vis[i][j-1] != true && h[i][j-1] >= h[i][j])
            dfs(h, vis, i, j-1);
        //right
        if (j+1 < n && vis[i][j+1] != true && h[i][j+1] >= h[i][j])
            dfs(h, vis, i, j+1);

    }
};
```

***
**2. BFS Approach :**

> **Time Complexity :** **`O(M*N)`**, When worst case occur then all cells are reachable to both oceans and also visited twice. And this will happened only when all elements are become equal.
> **Space Complexity :** **`O(M*N)`**, to mark the atlantic and pacific visited cells.
```
class Solution {
public:
    int m,n;
    vector<int>dir={0,1,0,-1,0};
    queue<pair<int,int>> pac;
    queue<pair<int,int>> atl;
    
    bool isValid(int x, int y){
        return x>=0 && x<m && y>=0 && y<n;
    }
    
    // andar se bahar ki taraf jaa rahe hai
    void bfs(queue<pair<int,int>> &q, vector<vector<int>> &vis, vector<vector<int>>& matrix)
    {
        while(!q.empty())
        {
            int x=q.front().first;
            int y=q.front().second;
            vis[x][y]=1;
            q.pop();
            for(int k=0;k<4;k++)
            {
                int xx = x+dir[k];
                int yy = y+dir[k+1];
                if(isValid(xx,yy) && matrix[x][y] <= matrix[xx][yy] && vis[xx][yy]==0) // greater equal 
                {
                    q.push({xx,yy});
                }
            }
        }
    }
    
        
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& matrix) 
    {
        vector<vector<int>> ans;
        m=matrix.size();
        n=matrix[0].size();
 
        vector<vector<int>> visp(m, vector<int>(n,0));
        vector<vector<int>> visq(m, vector<int>(n,0));
        // push boundaries of pacific ocean
        for(int i=m-1;i>=0;i--)
            pac.push({i,0});
        for(int i=n-1;i>=0;i--)
            pac.push({0,i});
        
        // push boundaries of atlantic ocean
        for(int i=m-1;i>=0;i--)
            atl.push({i,n-1});
        for(int i=n-1;i>=0;i--)
            atl.push({m-1,i});
        
        bfs(pac, visp, matrix);
        bfs(atl, visq, matrix);
        
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                
                if(visp[i][j]==1 && visq[i][j]==1)
                    ans.push_back({i,j});
            }
        }
        return ans;
    }
};
```
**if you like my approach please don't forget to hit the upvote button ! : )**
\uD83D\uDE42