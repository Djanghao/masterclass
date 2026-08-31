# Min Time To Visit Disappearing Nodes: Efficient Dijkstra Algo

**Author:** madhusudanrathi99
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017292/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017292/)

---

# Intuition
The intuition is to use sorted set and graph to find the minimum time to reach each node, given some constraints on when each node disappears.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialize Variables**: 
Create a graph `graph` to store the edges and their associated times. Also, create a sorted set `set` to store the nodes and their associated times, sorted by time. Initialize an array `ans` to store the minimum time to reach each node.
2. **Build Graph**: 
For each edge in `edges`, add the edge to the graph `graph`.
3. **Traverse Graph**: 
While the sorted set `set` is not empty, remove the node with the smallest time from `set`. If the node has not been visited, update `ans` with the current time and add all its neighbors to `set` if the time to reach the neighbor is less than the time the neighbor disappears.
4. **Return Result**: 
Return the array `ans` which contains the minimum time to reach each node.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(E \\log E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N + E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[] MinimumTime(int n, int[][] edges, int[] disappear) {
        Dictionary<int, List<int[]>> graph = new();
        foreach(var edge in edges) {
            int nf = edge[0], nt = edge[1], time = edge[2];
            if(!graph.ContainsKey(nf))
                graph[nf] = new List<int[]>();
            if(!graph.ContainsKey(nt))
                graph[nt] = new List<int[]>();
            graph[nf].Add(new int[] {nt, time});
            graph[nt].Add(new int[] {nf, time});
        }

        var set = new SortedSet<int[]>(Comparer<int[]>.Create((a, b) => a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]));
        set.Add(new int[] {0, 0});

        int[] ans = new int[n];
        Array.Fill(ans, -1);

        while(set.Count > 0) {
            int[] cur = set.Min;
            set.Remove(set.Min);
            int node = cur[0], time = cur[1];
            if(ans[node] != -1)
                continue;
            
            ans[node] = time;
            if(graph.ContainsKey(node)) {
                foreach(var it in graph[node]) {
                    if(ans[it[0]] == -1 && time + it[1] < disappear[it[0]])
                        set.Add(new int[] {it[0], time + it[1]});
                }
            }
        }

        return ans;
    }
}

```