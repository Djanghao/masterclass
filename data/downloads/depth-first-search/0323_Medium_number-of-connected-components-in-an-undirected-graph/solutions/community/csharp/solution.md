# Graph Traversal

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/6124957/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/6124957/)

---

# Complexity
- Time complexity:
$$O(n + m)$$

- Space complexity:
$$(n + m)$$

# Code
```csharp []
public class Solution {
    public int CountComponents(int n, int[][] edges) {
        if (n == 1) {
            return 1;
        }

        int m = edges.Length;
        Dictionary<int, List<int>> graph = new Dictionary<int, List<int>>();

        for (int i = 0; i < m; i++) {
            int a = edges[i][0];
            int b = edges[i][1];

            if (!graph.ContainsKey(a)) {
                graph[a] = new List<int>();
            }

            if (!graph.ContainsKey(b)) {
                graph[b] = new List<int>();
            }

            graph[a].Add(b);
            graph[b].Add(a);
        }

        Stack<int> stack = new Stack<int>();
        HashSet<int> visited = new HashSet<int>();
        int components = 0;

        for (int i = 0; i < n; i++) {
            if (visited.Contains(i)) {
                continue;
            }

            components++;
            stack.Push(i);
            visited.Add(i);

            while (stack.Count > 0) {
                int node = stack.Pop();

                if (graph.ContainsKey(node)) {
                    List<int> neighbors = graph[node];

                    foreach (var neighbor in neighbors) {
                        if (visited.Contains(neighbor)) {
                            continue;
                        }

                        stack.Push(neighbor);
                        visited.Add(neighbor);
                    }
                }


            }
        }

        return components;
    }
}
```