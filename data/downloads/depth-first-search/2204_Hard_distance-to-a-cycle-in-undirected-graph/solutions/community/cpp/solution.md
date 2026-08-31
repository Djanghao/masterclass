# 🔥🔥🔥Using Topological Sort to Find Minimum Distances to Cycles in Graphs

**Author:** Harry0613
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/6097439/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/6097439/)

---

# Problem
The problem distanceToCycle takes an integer n (number of nodes) and a list of edges representing an undirected graph. The goal is to calculate the minimum distance of each node to the nearest cycle in the graph.

# Approach
1. Building the Graph
2. Topological Sort (Removing Leaf Nodes)
3. Marking Nodes in the Cycle
4. BFS to Find Distances


# Code
```cpp []
class Solution {
public:
    vector<int> distanceToCycle(int n, vector<vector<int>>& edges) {
        vector<vector<int>> adj(n); 
        vector<int> degree(n); // Stores the degree of each node (used for topological sort)

        // Construct adjacency list for the graph
        for(vector<int> e : edges){
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }

        queue<int> q;
        // Identify leaf nodes (degree == 1) and push them into the queue
        for(int i = 0; i < n; i++){
            degree[i] = adj[i].size();
            if(adj[i].size() == 1){
                q.push(i);
            }
        }

        // Perform topological sort to remove all non-cycle nodes
        while(!q.empty()){
            int cur = q.front();
            q.pop();
            for(int next : adj[cur]){
                if(--degree[next] == 1){ // Reduce degree and check for new leaf nodes
                    q.push(next);
                }
            }
        }

        // Initialize result array with a large value
        vector<int> res(n, n);
        // Mark nodes in the cycle with distance 0
        for(int i = 0; i < n; i++){
            if(degree[i] > 1){ // Remaining nodes are part of the cycle
                res[i] = 0;
                q.push(i);
            }
        }

        // BFS to calculate the shortest distance to the cycle for all nodes
        while(!q.empty()){
            int cur = q.front();
            q.pop();
            for(int next : adj[cur]){
                if(res[next] > res[cur] + 1){ // Update the distance if shorter
                    res[next] = res[cur] + 1;
                    q.push(next);
                }
            }
        }

        return res; // Return the result array
    }
};

```