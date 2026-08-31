# Clean C++ BFS with explanation and comments

**Author:** zzg_zzm
**Votes:** 175
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/409594/](https://leetcode.com/problems/is-graph-bipartite/solutions/409594/)

---

To be able to split the node set `{0, 1, 2, ..., (n-1)}` into sets A and B, we will try to color nodes in set A with color A (i.e., value 1) and nodes in set B with color B (i.e., value -1), respectively.

If so, ***the graph is bipartite if and only if the two ends of each edge must have opposite colors***. Therefore, we could just start with standard BFS to traverse the entire graph and 
* color neighbors with opposite color if not colored, yet;
* ignore neighbors already colored with oppsite color;
* annouce the graph can't be bipartite if any neighbor is already colored with the same color.

**NOTE:** The given graph might not be connected, so we will need to loop over all nodes before BFS.

```cpp
  bool isBipartite(vector<vector<int>>& graph) {
    int n = graph.size();
    vector<int> color(n); // 0: uncolored; 1: color A; -1: color B
        
    queue<int> q; // queue, resusable for BFS    
	
    for (int i = 0; i < n; i++) {
      if (color[i]) continue; // skip already colored nodes
      
      // BFS with seed node i to color neighbors with opposite color
      color[i] = 1; // color seed i to be A (doesn't matter A or B) 
      for (q.push(i); !q.empty(); q.pop()) {
        int cur = q.front();
        for (int neighbor : graph[cur]) 
		{
          if (!color[neighbor]) // if uncolored, color with opposite color
          { color[neighbor] = -color[cur]; q.push(neighbor); } 
		  
          else if (color[neighbor] == color[cur]) 
            return false; // if already colored with same color, can't be bipartite!
        }        
      }
    }
    
    return true;
  }
```