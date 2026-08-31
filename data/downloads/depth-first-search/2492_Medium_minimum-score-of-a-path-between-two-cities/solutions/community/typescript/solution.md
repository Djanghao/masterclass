# C#, Java, and TypeScript Solution 🔥🚀 with approach. ❇️✅

**Author:** ArafatSabbir
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3327497/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3327497/)

---

# \u2B06\uFE0FLike|\uD83C\uDFAFShare|\u2B50Favourite


```CSharp []
public class Solution 
{
    public int MinScore(int n, int[][] roads) 
    {
        var graph = new Dictionary<int, Dictionary<int, int>>();
        foreach (var road in roads)
        {
            if (!graph.ContainsKey(road[0]))
            {
                graph.Add(road[0], new Dictionary<int, int>());
            }

            if (!graph.ContainsKey(road[1]))
            {
                graph.Add(road[1], new Dictionary<int, int>());
            }
            graph[road[0]].Add(road[1], road[2]);
            graph[road[1]].Add(road[0], road[2]);
        }
        var minScore = int.MaxValue;
        var visited = new HashSet<int>();
        var queue = new Queue<int>();
        queue.Enqueue(1);
        while (queue.Count > 0)
        {
            var node = queue.Dequeue();
            foreach (var adj in graph[node].Keys)
            {
                if (!visited.Contains(adj))
                {
                    queue.Enqueue(adj);
                    visited.Add(adj);
                }
                minScore = Math.Min(minScore, graph[node][adj]);
            }
        }
        return minScore;
    }
}
```
```Java []
class Solution {
    public int minScore(int n, int[][] roads) {
        Map<Integer, Map<Integer, Integer>> graph = new HashMap<>();
        for (int[] road : roads) {
            if (!graph.containsKey(road[0])) {
                graph.put(road[0], new HashMap<>());
            }
            if (!graph.containsKey(road[1])) {
                graph.put(road[1], new HashMap<>());
            }
            graph.get(road[0]).put(road[1], road[2]);
            graph.get(road[1]).put(road[0], road[2]);
        }
        int minScore = Integer.MAX_VALUE;
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(1);
        while (!queue.isEmpty()) {
            int node = queue.poll();
            for (int adj : graph.get(node).keySet()) {
                if (!visited.contains(adj)) {
                    queue.offer(adj);
                    visited.add(adj);
                }
                minScore = Math.min(minScore, graph.get(node).get(adj));
            }
        }
        return minScore;
    }
}
```
```TypeScript []
function minScore(n: number, roads: number[][]): number {
    const graph = new Map<number, Map<number, number>>();
    for (const road of roads) {
        if (!graph.has(road[0])) {
            graph.set(road[0], new Map<number, number>());
        }
        if (!graph.has(road[1])) {
            graph.set(road[1], new Map<number, number>());
        }
        graph.get(road[0]).set(road[1], road[2]);
        graph.get(road[1]).set(road[0], road[2]);
    }
    let minScore = Number.MAX_SAFE_INTEGER;
    const visited = new Set<number>();
    const queue = new Array<number>();
    queue.push(1);
    while (queue.length > 0) {
        const node = queue.shift();
        for (const adj of graph.get(node).keys()) {
            if (!visited.has(adj)) {
                queue.push(adj);
                visited.add(adj);
            }
            minScore = Math.min(minScore, graph.get(node).get(adj));
        }
    }
    return minScore;
};
```


# Approach
1. Create a graph with the given roads.
2. Perform a BFS traversal from node 1.
3. For each node, find the minimum score of the adjacent nodes.
4. Return the minimum score.

# Complexity
- Time complexity:
O(n^2). We need to traverse the entire graph.

- Space complexity:
O(n^2). We need to store the graph.