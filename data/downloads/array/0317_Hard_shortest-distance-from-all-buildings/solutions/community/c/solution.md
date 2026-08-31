# C++ clean solution with explaination

**Author:** linlin0208
**Votes:** 15
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/699062/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/699062/)

---

```
class Solution {
/*
 * Traverse the matrix
 * 1) For each building, use BFS to compute distance from each '0' to the building.
 * 2) Do step1 for all the buildings
 * 3) Get the sum of shortest distance from every 0 to all reachable buildings
 */
private:
vector<pair<int, int>> delta = {{0, 1},{1, 0},{0, -1},{-1, 0}};
    
public:
    int shortestDistance(vector<vector<int>>& grid) {
        int row = grid.size();
        int col = grid[0].size();
        
        // Store distance sum to all building for every point 0. Update values when we do BFS traversal
        vector<vector<int>> distance (row, vector<int>(col, 0));
        // Store how many buildings each '0' can reach, because we don't guarantee each '0' can reach all builidings
        vector<vector<int>> reach (row, vector<int>(col, 0));
        
        int buildingNum = 0;
        
        for (int i=0; i<row; ++i) {
            for (int j=0; j<col; ++j) {
                if (grid[i][j] == 1) {
                    buildingNum++;
                    BfsGetDistance(i, j, distance, reach, grid); 
                }
            }
        }
        
        int shortest = INT_MAX;
        for (int i=0; i< row; i++) {
            for (int j=0; j<col; j++) {
                if (grid[i][j] || reach[i][j]!= buildingNum)
                    continue;
                
                shortest = min(shortest, distance[i][j]);
            }
        }
        
        return shortest == INT_MAX ? -1: shortest;
    }
    
    void BfsGetDistance(int& i, int& j, vector<vector<int>>& distance, vector<vector<int>>& reach, vector<vector<int>>& grid)
    {
         int row = grid.size();
         int col = grid[0].size();
         vector<vector<bool>> visited(row, vector<bool>(col, false));
                    
         queue<pair<int, int>> myqueue;
         myqueue.emplace(i, j);

         int step = 1;
                    
         while(!myqueue.empty()) {
            int qSize = myqueue.size();
                        
            for(int q = 0; q < qSize; q++) {
                pair<int, int> curr = myqueue.front();
                myqueue.pop();
                            
                for (int k=0; k<4; k++) {
                    int x = curr.first + delta[k].first;
                    int y = curr.second + delta[k].second;
                                
                    if (x >= row || y>= col || x<0 || y<0)
                        continue;
                                
                    if (visited[x][y])
                        continue;
                                
                    if (grid[x][y]!=0)
                        continue;
                                
                    distance[x][y] += step;
                    reach[x][y]++;
                    visited[x][y] = true;
                                
                    myqueue.emplace(x,y);
                }
            }
            // The shortest distance from x,y to the building
            step++;
        }        
    }
};
```