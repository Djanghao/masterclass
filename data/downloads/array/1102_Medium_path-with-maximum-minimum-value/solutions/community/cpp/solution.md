# Dijkstra's Algorithm || C++

**Author:** vulli
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/3969076/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/3969076/)

---



# Approach
Dijkstra's Algorithm



# Code
```
class Solution {
public:
    int maximumMinimumPath(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();

        vector<vector<int>> dist(n, vector<int> (m, -1));

        priority_queue<pair<int, pair<int, int>>> pq;
        pq.push({grid[0][0], {0, 0}});
        dist[0][0] = grid[0][0];
        vector<vector<int>> dirs = {{0, 1},{1, 0},{-1, 0},{0, -1}};
        while(!pq.empty()){
            pair<int, pair<int, int>> pt = pq.top();
            pq.pop();
            // vis[pt.second.first][pt.second.second] = 1;
            if(pt.second.first == n - 1 && pt.second.second == m - 1)
                return pt.first;
            if(pt.first < dist[pt.second.first][pt.second.second])
                continue;
            for(int i=0;i<4;i++){
                int a = pt.second.first + dirs[i][0];
                int b = pt.second.second + dirs[i][1];
                if(a >= 0 && a < n && b >= 0 && b < m && (dist[a][b] < min(dist[pt.second.first][pt.second.second], grid[a][b]))){
                    dist[a][b] = min(dist[pt.second.first][pt.second.second], grid[a][b]);
                    pq.push({min(dist[pt.second.first][pt.second.second], grid[a][b]), {a, b}});
                    
                }
            }
            
        }

        return -1;
    }
};
```