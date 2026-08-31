# [C++] Clean djikstra solution [Detailed Explanation]

**Author:** cryptx_
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/2236587/](https://leetcode.com/problems/the-maze-iii/solutions/2236587/)

---

```
/*
    https://leetcode.com/problems/the-maze-iii/
    
    TC: O(MNlogMN)
    SC: O(MN)
    
    We can use modified djikstra's algorithm to find the shortest path to the hole.
    Important changes:
    1. Comparator for min heap. If the distance is same, then one with the smallest lexographic string should be selected
    2. Implementation stays the same as Maze II problem, one extra step is added when we are traversing to find the end from
    a start point. In this problem we might hit the hole before hitting the hole, it is important to stop there and add that 
    the cost till that point to the heap.
    
    Ref: Solution to Maze II
    https://leetcode.com/problems/the-maze-ii/discuss/2235668/C%2B%2B-Clean-Djikstra-solution-Detailed-Explanation
*/
class Solution {
private:
    unordered_map<string, pair<int, int> > directions = {{"d", {1, 0}}, {"u", {-1, 0}},
                                                         {"r", {0, 1}}, {"l", {0, -1}}};
public:
    bool isValid(int row, int col, int m, int n, vector<vector<int>>& maze) {
        return row >= 0 && row < m && col >= 0 && col < n && maze[row][col] == 0;
    }
    
    string djikstra(vector<vector<int>>& maze, vector<int>& ball, vector<int>& hole) {
        int m = maze.size(), n = maze[0].size();
        string min_path;
        int min_dist = INT_MAX;
        
        vector<vector<bool>> visited(m, vector<bool>(n, false));
            
        // custom comparator based on the distance and lexographical path for min heap;
        auto comp = [&](const tuple<int, int, int, string>& a,
                        const tuple<int, int, int, string>& b) { 
            // If the distance is same, decide based on smallest lexographical path string
            if(get<0>(a) == get<0>(b))
                return get<3>(a) > get<3>(b);
            return get<0>(a) > get<0>(b); 
        };
        
        priority_queue<tuple<int, int, int, string>, 
                    vector<tuple<int, int, int, string>>,
                    decltype(comp)> min_heap(comp);
        // <distance, row, col, path>
        min_heap.push({0, ball[0], ball[1], ""});
        
        while(!min_heap.empty()) {
            auto [dist, r, c, path] = min_heap.top();
            min_heap.pop();
            
            // target reached
            if(r == hole[0] and c == hole[1]) 
                return path;
            
            if(visited[r][c])
                continue;
            
            // mark as visited
            visited[r][c] = true;
            
            // visit the starting points reachable from here
            for(auto [dir, coords]: directions) {
                auto [dx, dy] = coords;
                int row = r + dx, col = c + dy;
                int steps = dist + 1;
                bool hole_found = false;
                
                // Move ahead until either a wall or hole is encountered
                while(isValid(row, col, m, n, maze)) {
                    if(row == hole[0] && col == hole[1]) {
                        hole_found = true;
                        break;
                    }
                    row += dx, col += dy, steps += 1;
                }
            
                // retrack a step back if a wall is hit
                if(!hole_found)
                    row -= dx, col -= dy, steps -= 1;
                
                if(!visited[row][col]) 
                    min_heap.emplace(make_tuple(steps, row, col, path + dir));
            }
        }
        
        return "impossible";
    }
    
    string findShortestWay(vector<vector<int>>& maze, vector<int>& ball, vector<int>& hole) {
        return djikstra(maze, ball, hole);
    }
};
```