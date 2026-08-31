# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/6041195/](https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/6041195/)

---

# Intuition
Find the maximum score of a valid sequence of 4 nodes in a graph, where each node is connected by edges, and no node appears more than once. The score of a sequence is the sum of the scores of the nodes in the sequence. The key idea is to focus on the neighbors of each node, but only keep the top 3 highest-scoring neighbors for potential sequences.

# Approach
First, create a graph where each node stores its top 3 highest-scoring neighbors, using a set to ensure uniqueness and efficient access. Then, for each edge, try to form valid sequences by checking all pairs of neighbors from both nodes and calculating their total score. Keep track of the highest valid score found during this process.

# Complexity
- Time complexity:
O(V + E), where V is the number of nodes (because we iterate through all nodes) and E is the number of edges (since we process each edge once).

- Space complexity:
O(V + E), because we store the graph with all edges and each node's top 3 neighbors.

# Code
```csharp []
public class Solution
{
    public int MaximumScore(int[] scores, int[][] edges)
    {
        // Initialize a graph of HashSets. Each node can have up to 3 neighbors stored.
        List<HashSet<KeyValuePair<int, int>>> graph = new List<HashSet<KeyValuePair<int, int>>>(new HashSet<KeyValuePair<int, int>>[scores.Length]);

        // Initialize each HashSet for the nodes
        for (int i = 0; i < scores.Length; i++)
        {
            graph[i] = new HashSet<KeyValuePair<int, int>>();
        }

        // Populate the graph with edges and ensure each node has at most 3 neighbors with highest scores
        foreach (var edge in edges)
        {
            int u = edge[0];
            int v = edge[1];

            // Insert the neighbors with their respective scores
            graph[u].Add(new KeyValuePair<int, int>(scores[v], v));
            graph[v].Add(new KeyValuePair<int, int>(scores[u], u));

            // Ensure that each node has no more than 3 neighbors with the highest scores
            if (graph[u].Count > 3)
                RemoveLowScoreNeighbors(graph[u]);

            if (graph[v].Count > 3)
                RemoveLowScoreNeighbors(graph[v]);
        }

        int result = -1;

        // Iterate over each edge to check all possible valid 4-node sequences
        foreach (var edge in edges)
        {
            int u = edge[0];
            int v = edge[1];

            int score = scores[u] + scores[v];

            // Check all pairs of top neighbors of u and v
            foreach (var node1 in graph[u])
            {
                foreach (var node2 in graph[v])
                {
                    // Ensure the nodes are distinct and not part of the current edge
                    if (node1.Value != u && node1.Value != v && node2.Value != u && node2.Value != v && node2.Value != node1.Value)
                    {
                        result = Math.Max(result, score + node1.Key + node2.Key);
                    }
                }
            }
        }

        return result;
    }

    // Helper function to remove the lowest scoring neighbor (maintains top 3 neighbors only)
    private void RemoveLowScoreNeighbors(HashSet<KeyValuePair<int, int>> nodeSet)
    {
        if (nodeSet.Count > 3)
        {
            // Find and remove the element with the lowest score (smallest first item)
            KeyValuePair<int, int> minItem = new KeyValuePair<int, int>(int.MaxValue, -1);
            foreach (var item in nodeSet)
            {
                if (item.Key < minItem.Key)
                {
                    minItem = item;
                }
            }

            nodeSet.Remove(minItem);
        }
    }
}

```