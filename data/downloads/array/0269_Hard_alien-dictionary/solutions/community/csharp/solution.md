# C# | Optimal | Topological Sort | Explained

**Author:** AlphaWing0_0
**Votes:** 2
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/2903454/](https://leetcode.com/problems/alien-dictionary/solutions/2903454/)

---

# Approach
- Topological sor.

# Complexity
- Time complexity:
O(n*k), where n = words.Length; k = the length of each word.

- Space complexity:
O(n*k), where n = words.Length; k = the length of each word.

# Code
```
public class Solution {
    public string AlienOrder(string[] words) {
        var graph = new Dictionary<char, List<char>>();
        var indegree = new Dictionary<char, int>();

        // 0. Initialize maps.
        foreach (string word in words)
        {
            foreach (char c in word)
            {
                graph.TryAdd(c, new List<char>());
                indegree.TryAdd(c, 0);
            }
        }

        // 1. Build edges.
        for (int i = 1; i < words.Length; i++)
        {
            var left = words[i - 1];
            var right = words[i];

            // Handle an edge case. On invalid sorting, return "". Test case: ["test", "tes"]
            if (left.Length > right.Length && left.StartsWith(right))
            {
                return "";
            }

            for (int m = 0; m < Math.Min(left.Length, right.Length); m++)
            {
                if (left[m] != right[m])
                {
                    graph[left[m]].Add(right[m]);
                    indegree[right[m]]++;
                    break;
                }
            }
        }

        // 2. Build a queue for starting points.
        var queue = new Queue<char>();
        foreach(KeyValuePair<char, int> kvp in indegree)
        {
            if (kvp.Value == 0)
            {
                queue.Enqueue(kvp.Key);
            }
        }

        // 3. BFS to build result.
        var result = new StringBuilder();
        while (queue.Count != 0)
        {
            var cur = queue.Dequeue();
            result.Append(cur);
            if (graph.TryGetValue(cur, out List<char> neighbors))
            {
                foreach (var n in neighbors)
                {
                    indegree[n]--;
                    if (indegree[n] == 0)
                    {
                        queue.Enqueue(n);
                    }
                }
            }
        }

        var solution = result.ToString();

        return solution.Length == indegree.Count
            ? solution
            : "";
    }
}
```