# C++ Solution. Using Dijkstra's Algorithm

**Author:** pulkitgupta38
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/3853161/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/3853161/)

---

# Intuition
Use Dijkstra's Algorithm

# Code
```
class Solution {
public:
    // 0 - distance
    // 1 - BoxX
    // 2 - BoxY
    // 3 - ManX
    // 4 - ManY

    int dx[4] = {0, 0, -1, 1};
    int dy[4] = {-1, 1, 0, 0};

    bool isValid(int x, int y, int n, int m, vector<vector<char>> &grid){
        if(x >= 0 && y >= 0 && x < n && y < m && grid[x][y] != '#'){
            return true;
        }
        return false;
    }

    int minPushBox(vector<vector<char>>& grid) {
        int n = grid.size(), m = grid[0].size();
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> pq;
        vector<int> init(5, 0);
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(grid[i][j] == 'B'){
                    init[1] = i;
                    init[2] = j;
                }
                else if(grid[i][j] == 'S'){
                    init[3] = i;
                    init[4] = j;
                }
            }
        }

        pq.push(init);
        map<vector<int>, int> dist;
        dist[{init[1], init[2], init[3], init[4]}] = 0;

        while(!pq.empty()) {
            int distance = pq.top()[0], boxX = pq.top()[1], boxY = pq.top()[2], manX = pq.top()[3], manY = pq.top()[4];
            pq.pop();
            // cout << "MAN: " << manX << " " << manY << "   BOX: " << boxX << " " << boxY << "\
";

            if(grid[boxX][boxY] == 'T'){
                return distance;
            }

            for(int i = 0; i < 4; i++){
                if(isValid(manX + dx[i], manY + dy[i], n, m, grid)){
                    if(manX + dx[i] == boxX && manY + dy[i] == boxY){
                        if(isValid(boxX + dx[i], boxY + dy[i], n, m, grid) && (dist.find({boxX + dx[i], boxY + dy[i], manX + dx[i], manY + dy[i]}) == dist.end()) || (dist[{boxX + dx[i], boxY + dy[i], manX + dx[i], manY + dy[i]}] > distance + 1)) {
                            if(manX + dx[i] == boxX + dx[i] && manY + dy[i] == boxY + dy[i]){
                                cout << "hello\
";
                            }
                            pq.push({distance + 1, boxX + dx[i], boxY + dy[i], manX + dx[i], manY + dy[i]});
                            dist[{boxX + dx[i], boxY + dy[i], manX + dx[i], manY + dy[i]}] = distance + 1;
                        }
                    }
                    else{
                        if((dist.find({boxX, boxY, manX + dx[i], manY + dy[i]}) == dist.end()) || (dist[{boxX, boxY, manX + dx[i], manY + dy[i]}] > distance)) {
                            pq.push({distance, boxX, boxY, manX + dx[i], manY + dy[i]});
                            dist[{boxX, boxY, manX + dx[i], manY + dy[i]}] = distance;
                        } 
                    }
                }
            }
        }

        return -1;
    }
};
```