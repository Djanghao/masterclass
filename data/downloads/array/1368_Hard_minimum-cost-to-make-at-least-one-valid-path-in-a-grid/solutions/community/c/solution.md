# A single intuitive C++ 0/1 BFS approach. Beats 100% soln

**Author:** nithish_kannen
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/1229683/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/1229683/)

---

We just run a single 0/1 BFS algorithm which is a modification of the conventional bfs where we push the element in the front instead of back, if weight is 0. 
The 2 cases are as follows:
1) When we move in direction of the arrow, it is a 0 weighted edge.
2) When we move in any of the other 3 directions, it is a 1 weighted edge
At the end of the day, we just need to return dist[n - 1][m - 1] by starting our bfs at 0, 0

```
class Solution {
public:
    #define F first
    #define S second
    int minCost(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int dx[4] = {0, 0, 1, -1};
        int dy[4] = {1, -1, 0, 0};
        
        int dist[n][m];
        for(int i = 0; i<n; i++){
            for(int j = 0; j<m; j++){
                dist[i][j] = 1e9;
            }
        }
        
        deque<pair<int, int>> pq;
        pq.push_back({0, 0});
        dist[0][0] = 0;
        
        while(!pq.empty()){
            auto cur = pq.front();
            pq.pop_front();
            int cur_x = cur.F;
            int cur_y = cur.S;
            int weight = grid[cur_x][cur_y];
            for(int i = 0; i<4; i++){
                int x = cur_x + dx[i];
                int y = cur_y + dy[i];
                int val = 1;
                if(i + 1 == weight){
                    val = 0;
                }
                
                if(x <n && y<m && x>=0 && y>=0){// valid thingy
                    if(dist[x][y] > dist[cur_x][cur_y] + val){
                        dist[x][y] = dist[cur_x][cur_y] + val;
                        if(val){
                            pq.push_back({x, y});
                        }else{
                            pq.push_front({x, y});
                        }
                       
                    }
                }
            }
            
        }
        
        return dist[n -1][m - 1];
        
    }
};
```

