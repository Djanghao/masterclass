# ✅ Short & Easy w/ Explanation & diagrams | Simple Graph traversals - DFS & BFS

**Author:** archit91
**Votes:** 424
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1126938/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1126938/)

---

In a naive approach, we would have to consider each cell and find if it is reachable to both the oceans by checking if it is able to reach - **1.** top or left edge(atlantic) and,  **2.** bottom or right edge (pacific). This would take about **`O((mn)^2)`**, which is not efficient.

***Solution - I (DFS Traversal)***

I will try to explain the process using images provided in LC solution.

We can observe that there are these cells which can reach -

* None 
* Pacific
* Atlantic
* Both Pacific and Atlantic


We need only the cells satisfying the last condition above.


Now, if we start from the cells connected to altantic ocean and visit all cells having height greater than current cell (**water can only flow from a cell to another one with height equal or lower**), we are able to reach some subset of cells (let's call them **`A`**).

<p align="center">
<img src="https://assets.leetcode.com/users/images/7fe6657a-4bc1-4d68-8a26-befe6e106371_1616674367.2859244.png" align="center" width="500"/></p>



Next, we start from the cells connected to pacific ocean and repeat the same process, we find another subset (let's call this one **`B`**).

<p align="center"><img src="https://assets.leetcode.com/users/images/ef3a788b-7b66-4c70-a47c-58490b998177_1616674843.2320118.png" align="center" width="500"/></p>


The final answer we get will be the intersection of sets `A` and `B` (**`A \u2229 B`**).

<p align="center"><img src="https://assets.leetcode.com/users/images/6a9f7a1f-105e-4d6c-8e7c-ede3a2f9b6de_1616674967.7329113.png" align="center" width="500"/></p>

So, we just need to iterate from edge cells, find cells reachable from atlantic (set `A`), cells reachable from pacific (set `B`) and return their intersection. This can be done using DFS or BFS graph traversals.


```
class Solution {
public:
    int m, n;
	// denotes cells reachable starting from atlantic and pacific edged cells respectively
    vector<vector<bool> > atlantic, pacific;
	vector<vector<int> > ans;    
    vector<vector<int> > pacificAtlantic(vector<vector<int>>& mat) {
        if(!size(mat)) return ans;
        m = size(mat), n = size(mat[0]);
        atlantic = pacific = vector<vector<bool> >(m, vector<bool>(n, false));
		// perform dfs from all edge cells (ocean-connected cells)
        for(int i = 0; i < m; i++) dfs(mat, pacific, i, 0), dfs(mat, atlantic, i, n - 1);
        for(int i = 0; i < n; i++) dfs(mat, pacific, 0, i), dfs(mat, atlantic, m - 1, i);             
        return ans;
    }
    void dfs(vector<vector<int> >& mat, vector<vector<bool> >& visited, int i, int j){        
        if(visited[i][j]) return;
        visited[i][j] = true;
		// if cell reachable from both the oceans, insert into final answer vector
        if(atlantic[i][j] && pacific[i][j]) ans.push_back(vector<int>{i, j});    
		// dfs from current cell only if height of next cell is greater
/*\u2B07\uFE0F*/  if(i + 1 <  m && mat[i + 1][j] >= mat[i][j]) dfs(mat, visited, i + 1, j); 
/*\u2B06\uFE0F*/  if(i - 1 >= 0 && mat[i - 1][j] >= mat[i][j]) dfs(mat, visited, i - 1, j);
/*\u27A1\uFE0F*/  if(j + 1 <  n && mat[i][j + 1] >= mat[i][j]) dfs(mat, visited, i, j + 1); 
/*\u2B05\uFE0F*/  if(j - 1 >= 0 && mat[i][j - 1] >= mat[i][j]) dfs(mat, visited, i, j - 1);
    }
};
```

**Time Complexity :** **`O(M*N)`**, in worst case, all cells are reachable to both oceans and would be visited twice. This case can occur when all elements are equal.
**Space Complexity :** **`O(M*N)`**, to mark the atlantic and pacific visited cells.


---------
---------

***Solution - II (BFS Traversal)***

Below is similar solution as above converted to **BFS traversal** -

```
class Solution {
public:
    int m, n;
    vector<vector<int> > ans;
    vector<vector<bool> > atlantic, pacific;
    queue<pair<int, int> > q;
    vector<vector<int> > pacificAtlantic(vector<vector<int>>& mat) {
        if(!size(mat)) return ans;
        m = size(mat), n = size(mat[0]);
        atlantic = pacific = vector<vector<bool> >(m, vector<bool>(n, false));
        for(int i = 0; i < m; i++) bfs(mat, pacific, i, 0), bfs(mat, atlantic, i, n - 1);
        for(int i = 0; i < n; i++) bfs(mat, pacific, 0, i), bfs(mat, atlantic, m - 1, i);             
        return ans;
    }
    void bfs(vector<vector<int> >& mat, vector<vector<bool> >& visited, int i, int j){        
        q.push({i, j});
        while(!q.empty()){
            tie(i, j) = q.front(); q.pop();
            if(visited[i][j]) continue;
            visited[i][j] = true;
            if(atlantic[i][j] && pacific[i][j]) ans.push_back(vector<int>{i, j});
            if(i + 1 <  m && mat[i + 1][j] >= mat[i][j]) q.push({i + 1, j});
            if(i - 1 >= 0 && mat[i - 1][j] >= mat[i][j]) q.push({i - 1, j});
            if(j + 1 <  n && mat[i][j + 1] >= mat[i][j]) q.push({i, j + 1});
            if(j - 1 >= 0 && mat[i][j - 1] >= mat[i][j]) q.push({i, j - 1});
        }
    }
};
```