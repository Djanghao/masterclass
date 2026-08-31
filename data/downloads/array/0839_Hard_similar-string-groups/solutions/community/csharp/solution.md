# 💥 C# | Runtime beats 96.67%, Memory beats 56.67% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/5752351/](https://leetcode.com/problems/similar-string-groups/solutions/5752351/)

---

# Intuition
To find how many groups of similar strings there are, I treated the problem as a graph problem:

Nodes: Each string.

Edges: Connect two nodes if their strings are similar.

# Approach
To sum up, my approach is to build a graph where each string is a node and edges connect similar strings. Then, by using DFS, I find how many distinct groups (connected components) there are. This method is efficient and leverages graph traversal to solve the problem of finding similar string groups.

# Complexity
- Time complexity:
O(n2 . L)

- Space complexity:
O(n2)

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution
{
    public int NumSimilarGroups(string[] strs)
    {
        int n = strs.Length;
        var graph = new List<int>[n];
        for (int i = 0; i < n; i++)
        {
            graph[i] = new List<int>();
        }
        
        // Create the adjacency list based on similarity
        for (int i = 0; i < n; i++)
        {
            for (int j = i + 1; j < n; j++)
            {
                if (AreSimilar(strs[i], strs[j]))
                {
                    graph[i].Add(j);
                    graph[j].Add(i);
                }
            }
        }
        
        // Perform DFS to find all connected components
        var visited = new bool[n];
        int numGroups = 0;
        
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                numGroups++;
                Dfs(i, visited, graph);
            }
        }
        
        return numGroups;
    }
    
    private void Dfs(int node, bool[] visited, List<int>[] graph)
    {
        visited[node] = true;
        foreach (var neighbor in graph[node])
        {
            if (!visited[neighbor])
            {
                Dfs(neighbor, visited, graph);
            }
        }
    }
    
    private bool AreSimilar(string s1, string s2)
    {
        int diffCount = 0;
        for (int i = 0; i < s1.Length; i++)
        {
            if (s1[i] != s2[i])
            {
                diffCount++;
                if (diffCount > 2) return false;
            }
        }
        return diffCount == 0 || diffCount == 2;
    }
}

```