# O(n)

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/5693452/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/5693452/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Return color and count of nodes, if different colors, then return -1 in color.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaximumSubtreeSize(int[][] edges, int[] colors) {
        int n = colors.Length;
        List<int>[] adj = new List<int>[n];
        for(int i=0; i<edges.Length; i++)
        {
            int x = edges[i][0];
            int y = edges[i][1];
            if (adj[x] == null)
            {
                adj[x] = new List<int>();
            }
            if (adj[y] == null)
            {
                adj[y] = new List<int>();
            }
            adj[x].Add(y);
            adj[y].Add(x);
        }
        int[] visited = new int[n];
        int maxSize = 1;
        visited[0] = 1;
        SameColor(adj, 0, colors, visited, ref maxSize);
        return maxSize;
    }

    private (int, int) SameColor(List<int>[] adj, int node, int[] colors, int[] visited, ref int maxSize)
    {
        List<int> nb = adj[node];
        if (nb == null || nb.Count == 0)
        {
            return (colors[node], 1);
        }
        int prev = colors[node];
        int count = 0;
        bool found = false;
        bool invalid = false;
        foreach(int x in nb)
        {
            if (visited[x] == 0)
            {
                visited[x] = 1;
                (int col, int cnt) = SameColor(adj, x, colors, visited, ref maxSize);
                visited[x] = 0;
                if (col == -1)
                {
                    invalid = true;
                }
                if (col != prev)
                {
                    invalid = true;
                }
                prev = col;
                count += cnt;
            }
        }
        if (invalid)
        {
            return (-1, 0);
        }
        if (count == 0)
        {
            return (colors[node], 1);
        }
        maxSize = Math.Max(maxSize, count+1);
        return (prev, count+1);
    }
}
```