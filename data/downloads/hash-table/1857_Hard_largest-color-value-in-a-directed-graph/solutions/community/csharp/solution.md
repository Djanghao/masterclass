# Easy with C#

**Author:** mahmudunnabi
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3395595/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3395595/)

---

# Intuition\r
We want to find the largest path value in a directed graph, which means we need to find the longest path ending at each node.\r
We can use topological sorting to traverse the graph in a way that ensures we only visit nodes that have all their incoming edges processed.\r
At each visited node, we can update the counts for its neighbors based on the counts for the current node and the color of the neighbor.\r
We can use a set of nodes with zero indegrees to start the traversal and continue until we have visited all nodes, or detect a cycle in the graph.\r
The counts array allows us to keep track of the number of occurrences of each color in the longest path ending at each node, which is what we need to compute the largest path value.\r
\r
\r
# Code\r
```\r
public class Solution {\r
    public int LargestPathValue(string colors, int[][] edges) {\r
        int n = colors.Length, k = 26;\r
        int[] indegrees = new int[n];\r
        List<int>[] graph = new List<int>[n];\r
        for (int i = 0; i < n; i++) {\r
            graph[i] = new List<int>();\r
        }\r
        foreach (int[] edge in edges) {\r
            int u = edge[0], v = edge[1];\r
            graph[u].Add(v);\r
            indegrees[v]++;\r
        }\r
        HashSet<int> zero_indegree = new HashSet<int>();\r
        for (int i = 0; i < n; i++) {\r
            if (indegrees[i] == 0) {\r
                zero_indegree.Add(i);\r
            }\r
        }\r
        int[,] counts = new int[n, k];\r
        for (int i = 0; i < n; i++) {\r
            counts[i, colors[i] - 'a']++;\r
        }\r
        int max_count = 0, visited = 0;\r
        while (zero_indegree.Count > 0) {\r
            int u = zero_indegree.First();\r
            zero_indegree.Remove(u);\r
            visited++;\r
            foreach (int v in graph[u]) {\r
                for (int i = 0; i < k; i++) {\r
                    counts[v, i] = Math.Max(counts[v, i], counts[u, i] + (colors[v] - 'a' == i ? 1 : 0));\r
                }\r
                indegrees[v]--;\r
                if (indegrees[v] == 0) {\r
                    zero_indegree.Add(v);\r
                }\r
            }\r
            max_count = Math.Max(max_count, Enumerable.Range(0, k).Select(i => counts[u, i]).Max());\r
\r
        }\r
        return visited == n ? max_count : -1;\r
    }\r
}\r
```