# C++ Super-Simple Easy BFS

**Author:** YehudisK
**Votes:** 113
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/1065074/](https://leetcode.com/problems/is-graph-bipartite/solutions/1065074/)

---

We are trying to split the graph into two groups of edges.
So we color the edges, 1 = red, -1 = blue, 0 = not colored yet.
**A graph is bipartite if and only if the two ends of each edge have different colors.**
```
class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
        int n = graph.size();
        vector<int> colors(n, 0);
        queue<int> q;
        
        for (int i = 0; i < n; i++) {
            if (colors[i]) continue;
            
            colors[i] = 1;
            q.push(i);
            
            while (!q.empty()) {
                int temp = q.front();
                
                for (auto neighbor : graph[temp]) {
                    
					// Color neighbor with opposite color
                    if (!colors[neighbor]){
                        colors[neighbor] = -colors[temp];
                        q.push(neighbor);
                    }
                    
					// If the neighbor has the same color - can't bipartite.
                    else if (colors[neighbor] == colors[temp]) 
                        return false;
                }
                q.pop();
            }
        }
        return true;
    }
};
```
**Like it? please upvote...**