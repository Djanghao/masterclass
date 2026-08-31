# C# Removing unused edges

**Author:** justunderdog
**Votes:** 2
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3343350/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3343350/)

---

# Approach
Removing unused edges starting from leaves

# Complexity

- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
public class Solution
{
    private IDictionary<int, ISet<int>> tree;
    private int[] degree;

    public int CollectTheCoins(int[] coins, int[][] edges)
    {
        int n = coins.Length;

        BuildTree(n, edges);

        int result = edges.Length;

        bool[] visited = new bool[n];
        int[] d = new int[n];

        var queue = new Queue<int>();

        for (int i = 0; i < n; i++)
        {
            if (degree[i] == 1)
            {
                queue.Enqueue(i);
            }
        }

        int u;
        while (queue.Count > 0)
        {
            u = queue.Dequeue();

            visited[u] = true;

            foreach (int v in tree[u])
            {
                if (!visited[v])
                {
                    d[v] = Math.Max(d[v], d[u] > 0 ? 1 + d[u] : coins[u]);

                    result--;

                    degree[v]--;
                    if (degree[v] == 1 && d[v] < 2)
                    {
                        queue.Enqueue(v);
                    }
                }
            }
        }

        return 2 * result;
    }

    private void BuildTree(int n, int[][] edges)
    {
        tree = new Dictionary<int, ISet<int>>();
        degree = new int[n];

        for (int i = 0; i < n; i++)
        {
            tree.Add(i, new HashSet<int>());
        }

        foreach (var edge in edges)
        {
            tree[edge[0]].Add(edge[1]);
            tree[edge[1]].Add(edge[0]);

            degree[edge[0]]++;
            degree[edge[1]]++;
        }
    }
}
```