# C# solution with detailed approach. ❇️✅

**Author:** ArafatSabbir
**Votes:** 2
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/2934649/](https://leetcode.com/problems/possible-bipartition/solutions/2934649/)

---

# Approach
1. Create a graph with the given dislikes
2. Use DFS to traverse the graph
3. If the node is not colored, color it with the given color
4. If the node is colored, check if the color is the same as the given color
5. If the color is different, return false
6. If the color is the same, return true
7. If all the nodes are colored, return true

# Complexity
- Time complexity:
O(n) where n is the number of dislikes

- Space complexity:
O(n) where n is the number of dislikes

# Code
```
public class Solution
{
    public bool PossibleBipartition(int N, int[][] dislikes)
    {
        var graph = new List<int>[N + 1];
        for (var i = 1; i <= N; i++)
        {
            graph[i] = new List<int>();
        }

        foreach (var dislike in dislikes)
        {
            graph[dislike[0]].Add(dislike[1]);
            graph[dislike[1]].Add(dislike[0]);
        }

        var colors = new int[N + 1];
        for (var i = 1; i <= N; i++)
        {
            if (colors[i] == 0 && !DFS(graph, colors, i, 1))
            {
                return false;
            }
        }

        return true;
    }

    private bool DFS(List<int>[] graph, int[] colors, int node, int color)
    {
        if (colors[node] != 0)
        {
            return colors[node] == color;
        }

        colors[node] = color;
        foreach (var neighbor in graph[node])
        {
            if (!DFS(graph, colors, neighbor, -color))
            {
                return false;
            }
        }

        return true;
    }
}
```