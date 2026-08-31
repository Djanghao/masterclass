# Simple C# DFS | beats 100% runtime

**Author:** Baymax_
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330441/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330441/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find number of disconnected parts in graph to establish the remaining connections

# Approach
<!-- Describe your approach to solving the problem. -->
Using DFS and adjacency list/graph, identify the number of disconnected graphs. By identifying this number 'c' the number of connections to be estabished to complete the graph is 'c - 1'.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) as we need to visit all n nodes

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n^2) to create an adjacency list.

# Code
```
public class Solution {
    public int MakeConnected(int n, int[][] connections) {
        if (n == 1)
            return 0;

        if (connections.Length < (n - 1))
            return -1;

        bool[] v = new bool[n];
        List<int>[] adj = new List<int>[n];
        foreach (var con in connections)
        {
            if (adj[con[0]] == null)
                adj[con[0]] = new List<int>();
            if (adj[con[1]] == null)
                adj[con[1]] = new List<int>();

            adj[con[0]].Add(con[1]);
            adj[con[1]].Add(con[0]);
        }
        
        int com = 0;
        for (int i = 0; i < n; i++)
        {
            if (!v[i])
            {
                TravelGraph(i, adj, v);
                com++;
            }
        }

        return com - 1;
    }

    private void TravelGraph(int i, List<int>[] adj, bool[] v)
    {
        v[i] = true;
        if (adj[i] != null)
        {
            foreach (int x in adj[i])
            {
                if (!v[x])
                    TravelGraph(x, adj, v);
            }
        }
    }
}
```

# Please upvote if you liked the approach