# Graph Traversal for Grid Construction by coderkb

**Author:** coderkb
**Votes:** 17
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5876240/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5876240/)

---

# Intuition
The problem asks for constructing a 2D grid from a graph such that adjacent nodes in the grid are connected by an edge in the graph. The key insight is that nodes with a degree of 1 represent boundary or corner nodes, while nodes with a degree of 2 likely form the inner structure of the grid. By tracing the connections starting from nodes with degrees 1 or 2, we can layout the grid row by row while ensuring adjacent nodes remain connected.

# Approach
1. **Graph Representation and Degree Calculation:**
   - Represent the graph using an adjacency list.
   - Calculate the degree of each node to determine which nodes are boundary (degree 1) or internal (degree 2).

2. **Handling Special Case (Degree 1 Nodes):**
   - If there are nodes with a degree of 1, construct a single row (linear path) grid by following the graph from the degree 1 node.

3. **Normal Case (Degree 2 Nodes):**
   - Start with a degree 2 node, since these form the core of the grid, and construct the first row by connecting adjacent nodes.
   - Use a helper function `findNext` to find the next unvisited node with the smallest degree, ensuring that the grid remains connected.
   
4. **Build the Full Grid:**
   - Once the first row is constructed, continue building the grid row by row, ensuring that nodes are placed adjacent to their neighbors based on the graph connections.

# Complexity
- **Time complexity:** $$O(n + m)$$, where $$n$$ is the number of nodes and $$m$$ is the number of edges. We traverse all the edges to build the grid.
- **Space complexity:** $$O(n + m)$$ due to the adjacency list representation of the graph and the degree array.

# Code with comments

```cpp
class Solution {
    // Graph adjacency list for up to 50001 nodes
    vector<int> graph[50001];
    
    // Function to find the next unvisited node with the smallest degree
    int findNext(int curr, vector<int>& degree, vector<bool>& vis) {
        int mn = INT_MAX, cnt = INT_MAX;
        // Traverse the neighbors of the current node
        for(int v: graph[curr]) {
            // Find the unvisited node with the smallest degree
            if(!vis[v] && degree[v] < cnt) {
                cnt = degree[v];
                mn = v;
            }
        }
        return mn;
    }

public:
    vector<vector<int>> constructGridLayout(int n, vector<vector<int>>& edges) {
        vector<int> degree(n);
        
        // Build the adjacency list and calculate the degree of each node
        for(auto edge: edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
            degree[edge[0]]++;
            degree[edge[1]]++;
        }

        // Track the frequency of nodes with degrees 1 and 2
        vector<int> degFreq(5);
        int deg1Val = -1, deg2Val = -1;
        for(int i = 0; i < n; ++i) {
            degFreq[degree[i]]++;
            if(degree[i] == 1) {
                deg1Val = i; // Find a node with degree 1
            }
            if(degree[i] == 2) {
                deg2Val = i; // Find a node with degree 2
            }
        }

        // Special case: If there are degree 1 nodes, construct a single row
        if(degFreq[1] > 0) {
            vector<vector<int>> ans(1, vector<int>(n, 0));
            ans[0][0] = deg1Val;
            int ind = 1;
            int prev = -1;
            int curr = deg1Val;
            
            // Traverse and construct the linear path
            for(int i = 1; i < n; ++i) {
                for(int next: graph[curr]) {
                    if(next != prev) {
                        ans[0][i] = next;
                        prev = curr;
                        curr = next;
                        break;
                    }
                }
            }
            return ans; // Return the single row grid
        }

        // Normal case: Start with a degree 2 node and build the first row
        vector<int> firstRow;
        firstRow.push_back(deg2Val);
        vector<bool> vis(n);
        vis[deg2Val] = true;
        int lastInd = 0;
        
        // Build the first row by connecting adjacent nodes
        while(true) {
            int curr = firstRow[lastInd];
            int next = findNext(curr, degree, vis);
            firstRow.push_back(next);
            vis[next] = true;
            degree[curr]--;
            degree[next]--;
            
            // Stop if we reach a boundary (degree 1 node)
            if(degree[next] == 1) break;
            ++lastInd;
        }

        int cols = firstRow.size();  // Columns in the grid
        int rows = n / cols;         // Rows in the grid

        vector<vector<int>> ans(rows, vector<int>(cols));
        ans[0] = firstRow;

        // Build the rest of the rows by connecting adjacent nodes
        for(int i = 1; i < rows; ++i) {
            for(int j = 0; j < cols; ++j) {
                int curr = ans[i - 1][j];
                int next = findNext(curr, degree, vis);
                ans[i][j] = next;
                vis[next] = true;
                degree[curr]--;
                degree[next]--;
            }
        }

        return ans; // Return the final grid
    }
};
```

This solution ensures the 2D grid layout is constructed by leveraging graph traversal and degree information to maintain adjacency constraints.