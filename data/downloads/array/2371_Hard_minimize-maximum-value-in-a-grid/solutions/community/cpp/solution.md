# Topological Sort with O(mn) Edges

**Author:** Benlegend
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/3807807/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/3807807/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    /*
    Observations:
    1. Numbers are distinct in grid, but not necessarily continuous.
    2. Due to the ordering between elements, we use the topological sort
       technique. Treat each element as node value in graph. Build
       the adjacency list/indegree with hashtable due to values not
       continuous. Also store the mapping from value to (x, y) coordinate
       in the grid, so as to fill result later.
    3. At first sight, one may attempt to link edge between each (u, v)
       pair in row/column. For example, row = [2,4,6,3]
       2 -> 3,4,6
       3 -> 4,6
       4 -> 6

       It takes O(mnn) to build graph, graph has O(mn*(m+n)) edges.
       Not efficienct and should cause TLE.
    4. Actually we only need an edge between adjacent values in row/col.
       [2,4,6,3] sort -> [2,3,4,6]
       2->3
       3->4
       4->6

       In topological traversal, when 3 has been processed 2 must have
       been processed already, so we can safely go on with 4.

       It takes O(mnlogn) to build graph, having O(mn) edges.
    5. Apply topological sort with help of a queue. Replace with
       the same number for nodes at the same layer. Override the
       result with mapping prepared earlier.

       O(mnlogn) time O(n) space
       matrix; graph; topological sort; sorting; hashtable;
    */
    vector<vector<int>> minScore(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        // value to (x, y) coordinate
        unordered_map<int, vector<int>> table;
        // adjacency list
        unordered_map<int, vector<int>> adj;
        // indegree
        unordered_map<int, int> indeg;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                table[grid[i][j]] = {i, j};
                indeg[grid[i][j]] = 0;
            }
        }

        for (int i = 0; i < m; i++) {
            vector<int> row(grid[i]);
            sort(row.begin(), row.end());
            for (int j = 0; j < n - 1; j++) {
                adj[row[j]].push_back(row[j + 1]);
                indeg[row[j + 1]]++;
            }
        }

        for (int j = 0; j < n; j++) {
            vector<int> col;
            for (int i = 0; i < m; i++) {
                col.push_back(grid[i][j]);
            }

            sort(col.begin(), col.end());
            for (int i = 0; i < m - 1; i++) {
                adj[col[i]].push_back(col[i + 1]);
                indeg[col[i + 1]]++;
            }
        }

        // topological sort, bfs
        queue<int> q;
        int num = 0;
        for (auto it = indeg.begin(); it != indeg.end(); it++) {
            if (it->second == 0) {
                q.push(it->first);
            }
        }

        while (!q.empty()) {
            // advance to a new number
            num++;

            int cnt = q.size();
            while (cnt-- > 0) {
                int u = q.front(); q.pop();

                // replace with the new number
                vector<int> coor = table[u];
                grid[coor[0]][coor[1]] = num;

                for (auto v : adj[u]) {
                    if (--indeg[v] == 0) {
                        q.push(v);
                    }
                }
            }
        }

        return grid;
    }
};
```