# DFS

**Author:** lauel24
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6137202/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6137202/)

---

# Code
```csharp []
public class Solution {
    record Edge(int node, int weight);
    
    public long MaximizeSumOfWeights(int[][] edges, int k) {
        int n = edges.Length + 1;

        List<Edge>[] nodes = new List<Edge>[n];
        for (int i = 0; i < n; i++) {
            nodes[i] = new();
        }

        foreach (int[] e in edges) {           
            nodes[e[0]].Add(new Edge(e[1], e[2]));
            nodes[e[1]].Add(new Edge(e[0], e[2]));
        }

        return FindSums(nodes, k, 0, -1, 0).Max();
    }

    private long[] FindSums(List<Edge>[] nodes, int k, int node, int parent, int parentWeight) {
        Edge[] children = nodes[node].Where(e => e.node != parent).ToArray();

        if (children.Length == 0) return [0, parentWeight];

        long sum = 0;
        List<long> diffs = new();

        foreach (Edge child in children) {
            long[] sums = FindSums(nodes, k, child.node, node, child.weight);
            long withoutParent = sums[0];
            long withParent = sums[1];

            sum += withoutParent;
            if (withParent > withoutParent) {
                diffs.Add(withParent - withoutParent);
            }
        }

        if (diffs.Count >= k) {
            diffs = diffs.OrderByDescending(d => d).Take(k).ToList();
        }
        sum += diffs.Sum();
        long last = diffs.Count == k ? diffs.Last() : 0;

        return [sum, sum - last + parentWeight];
    }
}
```