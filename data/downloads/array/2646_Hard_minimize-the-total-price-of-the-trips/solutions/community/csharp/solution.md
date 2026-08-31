# C# | DFS + DP | Beats 100% (114ms)

**Author:** panagisart
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/4051401/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/4051401/)

---

# Code
```
public class Solution
{
    public int MinimumTotalPrice(int n, int[][] edges, int[] price, int[][] trips)
    {
        List<int>[] tree = new List<int>[n];
        for (int i = 0; i < n; i++)
            tree[i] = new();
        foreach (var edge in edges)
        {
            tree[edge[0]].Add(edge[1]);
            tree[edge[1]].Add(edge[0]);
        }

        int[] nodesVisitedCount = new int[n];
        HashSet<int> tempPath = new();

        void ComputeNodesVisitedCount(int start, int end)
        {
            tempPath.Add(start);
            if (start == end)
                foreach (var node in tempPath)
                    nodesVisitedCount[node]++;
            else
                foreach (var node in tree[start])
                {
                    if (tempPath.Contains(node))
                        continue;

                    ComputeNodesVisitedCount(node, end);
                }
            tempPath.Remove(start);
        }

        foreach (var trip in trips)
            ComputeNodesVisitedCount(trip[0], trip[1]);

        int[] ComputeMinPrices(int parentNode, int node)
        {
            int whole = 0, halved = 0;
            foreach (var nodeToVisit in tree[node])
            {
                if (nodeToVisit == parentNode) continue;
                var childPrices = ComputeMinPrices(node, nodeToVisit);
                halved += childPrices[1];
                whole += Math.Min(childPrices[0], childPrices[1]);
            }
            return new[] {
                price[node] * nodesVisitedCount[node] /2 + halved,
                price[node] * nodesVisitedCount[node] + whole
                };
        }

        var minPrices = ComputeMinPrices(-1, 0);
        return Math.Min(minPrices[0], minPrices[1]);
    }
}
```