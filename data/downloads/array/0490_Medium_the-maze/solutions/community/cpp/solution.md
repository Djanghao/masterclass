# C++ short BFS

**Author:** jianchao-li
**Votes:** 31
**Link:** [https://leetcode.com/problems/the-maze/solutions/251426/](https://leetcode.com/problems/the-maze/solutions/251426/)

---

Avoid using an `m x n` `visited` array by changing each visited `0` to be `-1`. In this way, to check whether a point is a space, we do ` <= 0`.

```cpp
class Solution {
public:
    bool hasPath(vector<vector<int>>& maze, vector<int>& start, vector<int>& destination) {
        int m = maze.size(), n = maze[0].size(), d[] = {0, 1, 0, -1, 0};
        queue<vector<int>> todo;
        todo.push(start);
        maze[start[0]][start[1]] = -1;
        while (!todo.empty()) {
            vector<int> p = todo.front();
            todo.pop();
            for (int i = 0; i < 4; i++) {
                int r = p[0], c = p[1];
                while (r + d[i] >= 0 && r + d[i] < m && c + d[i + 1] >= 0 && c + d[i + 1] < n && maze[r + d[i]][c + d[i + 1]] <= 0) {
                    r += d[i];
                    c += d[i + 1];
                }
                if (r == destination[0] && c == destination[1]) {
                    return true;
                }
                if (!maze[r][c]) {
                    maze[r][c] = -1;
                    todo.push({r, c});
                }
            }
        }
        return false;
    }
};
```