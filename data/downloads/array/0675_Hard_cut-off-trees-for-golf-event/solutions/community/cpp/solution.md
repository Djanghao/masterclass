# C++ Sorting + BFS Solution

**Author:** hb05
**Votes:** 3
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2190533/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2190533/)

---

```cpp
typedef vector<vector<int>> vvi; 
typedef vector<vector<bool>> vvb; 
class Solution {
public:
    bool isValid(int x, int y, int n, int m){
        return x>=0 && y>=0 && x<n && y<m; 
    }
    // The function gives the length of shortest path
    // from (x1,y1)->(x2,y2)
    int bfs(int x1, int y1, int x2,int y2, vvi &forest){
        int n = forest.size(), m = forest[0].size(); 
        int dx[4] = {1,-1,0,0};
        int dy[4] = {0,0,1,-1}; 
        vector<vector<bool>> vis(n, vector<bool>(m, false)); 
        queue<pair<int, int>> q;
        q.push({x1, y1}); 
        vis[x1][y1] = true;
        int cnt = 0; 
        // Level Order Traversal
        while(!q.empty()){
            int sz = q.size(); 
            while(sz--){
                auto node = q.front(); q.pop(); 
                int x = node.first, y = node.second; 
                if(x == x2 && y==y2)
                    return cnt; 
                for(int i = 0; i<4; ++i){
                    int xr = x + dx[i], yr = y + dy[i]; 
                    if(isValid(xr,yr,n,m) && !vis[xr][yr]){
                        if(forest[xr][yr] > 0){
                            q.push({xr,yr});
                            vis[xr][yr] = true; 
                        }
                    }
                }
            }
            cnt++; 
        }
        return -1; 
    }
    int cutOffTree(vector<vector<int>>& forest) {
        if(forest[0][0] == 0)
            return -1; 
        int n = forest.size(), m = forest[0].size(); 
        // Collect the trees with coordinates in heightwise order
        vector<pair<int, pair<int, int>>> trees; 
        for(int i = 0; i<n; ++i){
            for(int j = 0; j<m; ++j){
                if(forest[i][j] > 1){
                    trees.push_back({forest[i][j], {i,j}}); 
                }
            }
        }
        sort(trees.begin(), trees.end()); 
        if(trees[0].second.first != 0 || trees[0].second.second != 0)
            trees.insert(trees.begin(), {0,{0,0}});
        // Traverse the order and find the shortest path between two adj trees
        int steps = 0; 
        for(int i = 1; i<trees.size(); ++i){
            auto src = trees[i-1].second; 
            auto dest = trees[i].second; 
            int x1 = src.first, y1 = src.second; 
            int x2 = dest.first, y2 = dest.second; 
            int cnt = bfs(x1, y1, x2, y2, forest); 
            if(cnt == -1)
                return -1; 
            steps += cnt; 
        }
        return steps; 
    }
};
```