# BFS + Video Solution

**Author:** jeevankumar159
**Votes:** 26
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694816/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694816/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jq6Fn5-vMVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Approach
Look through the grid to find the starting position marked with '@' and count the total number of keys (lowercase letters 'a' to 'f').

Create a queue to keep track of the states we need to explore, and a set to remember the states we have already visited.

Start by putting the starting state into the queue, which includes the number of keys collected, the current row, and the current column.

Mark the starting state as visited so that we don't process it again.

Keep a variable to track the number of steps taken.

While the queue is not empty, do the following:

a. Take the front state from the queue.

b. If the keys collected in this state match the total number of keys, we have found the shortest path. Return the number of steps taken.

c. Explore all possible directions (up, down, left, right) from the current position:

Calculate the new row and column indices based on the current position and the direction.

Check if the new position is within the grid boundaries.

If it is a wall ('#'), skip this direction.

If it is a lowercase letter (key), update the keys collected so far.

If it is an uppercase letter (door), check if we have the corresponding key. If not, skip this direction.

If the new state (with updated keys and position) has not been visited before, add it to the set of visited states and enqueue it into the queue.

d. Increase the step count by 1 since we have explored all possible moves at the current distance.

If we finish the while loop without finding a path that collects all the keys, it means it is not possible. Return -1.


```
class Solution {
   class State {
        int keys, i, j;
        State(int keys, int i, int j) {
            this.keys = keys;
            this.i = i;
            this.j = j;
        }
    }
    public int shortestPathAllKeys(String[] grid) {
        int x = -1, y = -1, m = grid.length, n = grid[0].length(), totalKeys = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = grid[i].charAt(j);
                if (c == '@') {
                    x = i;
                    y = j;
                }
                if (c >= 'a' && c <= 'f') {
                    totalKeys ++;
                }
            }
        }
        State start = new State(0, x, y);
        Queue<State> q = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        visited.add(0 + " " + x + " " + y);
        q.offer(start);
        int[][] dirs = new int[][]{{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int step = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            while (size-- > 0) {
                State cur = q.poll();
                if (cur.keys == (1 << totalKeys) - 1) {
                    return step;
                }
                for (int[] dir : dirs) {
                    int i = cur.i + dir[0];
                    int j = cur.j + dir[1];
                    int keys = cur.keys;
                    if (i >= 0 && i < m && j >= 0 && j < n) {
                        char c = grid[i].charAt(j);
                        if (c == '#') {
                            continue;
                        }
                        if (c >= 'a' && c <= 'f') {
                            keys |= 1 << (c - 'a');
                        }
                        if (c >= 'A' && c <= 'F' && ((keys >> (c - 'A')) & 1) == 0) {
                            continue;
                        }
                        if (!visited.contains(keys + " " + i + " " + j)) {
                            visited.add(keys + " " + i + " " + j);
                            q.offer(new State(keys, i, j));
                        }
                    }
                }
            }
            step++;
        }
        return -1;
    }
}
```

```
class Solution {
    struct State {
        int keys, i, j;
        State(int keys, int i, int j) : keys(keys), i(i), j(j) {}
    };

public:
    int shortestPathAllKeys(vector<string>& grid) {
        int x = -1, y = -1, m = grid.size(), n = grid[0].length(), totalKeys = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = grid[i][j];
                if (c == '@') {
                    x = i;
                    y = j;
                }
                if (c >= 'a' && c <= 'f') {
                    totalKeys++;
                }
            }
        }
        State start(0, x, y);
        queue<State> q;
        unordered_set<string> visited;
        visited.insert(to_string(0) + " " + to_string(x) + " " + to_string(y));
        q.push(start);
        vector<vector<int>> dirs{{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int step = 0;
        while (!q.empty()) {
            int size = q.size();
            while (size-- > 0) {
                State cur = q.front();
                q.pop();
                if (cur.keys == (1 << totalKeys) - 1) {
                    return step;
                }
                for (auto dir : dirs) {
                    int i = cur.i + dir[0];
                    int j = cur.j + dir[1];
                    int keys = cur.keys;
                    if (i >= 0 && i < m && j >= 0 && j < n) {
                        char c = grid[i][j];
                        if (c == '#') {
                            continue;
                        }
                        if (c >= 'a' && c <= 'f') {
                            keys |= 1 << (c - 'a');
                        }
                        if (c >= 'A' && c <= 'F' && ((keys >> (c - 'A')) & 1) == 0) {
                            continue;
                        }
                        if (visited.find(to_string(keys) + " " + to_string(i) + " " + to_string(j)) == visited.end()) {
                            visited.insert(to_string(keys) + " " + to_string(i) + " " + to_string(j));
                            q.push(State(keys, i, j));
                        }
                    }
                }
            }
            step++;
        }
        return -1;
    }
};
```

```
class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        x, y, m, n, totalKeys = -1, -1, len(grid), len(grid[0]), 0
        for i in range(m):
            for j in range(n):
                c = grid[i][j]
                if c == '@':
                    x, y = i, j
                if 'a' <= c <= 'f':
                    totalKeys += 1

        start = (0, x, y)
        queue = deque([start])
        visited = defaultdict(bool)
        visited[start] = True

        step = 0
        while queue:
            size = len(queue)
            for _ in range(size):
                keys, i, j = queue.popleft()
                if keys == (1 << totalKeys) - 1:
                    return step

                for dx, dy in directions:
                    ni, nj = i + dx, j + dy
                    newKeys = keys
                    if 0 <= ni < m and 0 <= nj < n:
                        c = grid[ni][nj]
                        if c == '#':
                            continue
                        if 'a' <= c <= 'f':
                            newKeys |= 1 << (ord(c) - ord('a'))
                        if 'A' <= c <= 'F' and not (keys >> (ord(c) - ord('A')) & 1):
                            continue
                        if not visited[(newKeys, ni, nj)]:
                            visited[(newKeys, ni, nj)] = True
                            queue.append((newKeys, ni, nj))
            step += 1
        return -1
```