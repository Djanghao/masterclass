# C# Graph-Theoretic approach with Greedy techniques

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/5732443/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/5732443/)

---

# Approach
<!-- Describe your approach to solving the problem. -->Graph Construction:

First, we'll create an adjacency list from the pairs to represent the graph.
For each pair [xi, yi], xi should be an ancestor of yi or vice versa.
Degree Analysis:

Calculate the degree of each node (the number of connections).
The node with the highest degree should ideally be the root because it should have connections to many other nodes.
Validation:

Iterate over the nodes in decreasing order of their degrees to check if we can construct the tree by ensuring each node's connections match the ancestor relationships.
Multiple Trees Check:

While constructing the tree, if we find more than one valid parent for a node, then there are multiple valid trees possible.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(M^2)
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(M + N).
____

# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int CheckWays(int[][] pairs) {
        Dictionary<int, HashSet<int>> graph = new Dictionary<int, HashSet<int>>();
        
        foreach (var pair in pairs) {
            if (!graph.ContainsKey(pair[0])) graph[pair[0]] = new HashSet<int>();
            if (!graph.ContainsKey(pair[1])) graph[pair[1]] = new HashSet<int>();
            graph[pair[0]].Add(pair[1]);
            graph[pair[1]].Add(pair[0]);
        }
        
        // Get all nodes sorted by their degree in descending order
        var sortedNodes = graph.Keys.OrderByDescending(x => graph[x].Count).ToList();
        int root = sortedNodes[0];
        
        // Check if the node with the highest degree can be the root
        if (graph[root].Count != graph.Count - 1) return 0;
        
        int ways = 1;
        
        foreach (var node in sortedNodes) {
            if (node == root) continue;
            
            int parent = -1;
            int parentSize = int.MaxValue;
            
            // Find the most suitable parent for the current node
            foreach (var neighbor in graph[node]) {
                if (graph[neighbor].Count < parentSize && graph[neighbor].Count >= graph[node].Count) {
                    parent = neighbor;
                    parentSize = graph[neighbor].Count;
                }
            }
            
            if (parent == -1) return 0;
            
            // Check if all connections of the current node are covered by its parent
            foreach (var neighbor in graph[node]) {
                if (neighbor != parent && !graph[parent].Contains(neighbor)) {
                    return 0;
                }
            }
            
            if (parentSize == graph[node].Count) ways = 2;
        }
        
        return ways;
    }
}

//  Graph Construction: We build a graph where each node is connected according to the pairs provided.
//  Root Identification: The node with the maximum degree (connections) is considered as the root candidate.
//  Validation: We ensure that the connections of each node are a subset of its parent\u2019s connections. If 
//  not, it's not possible to build the tree.
//  Multiple Tree Detection: If two nodes have the same degree and their connection pattern matches, 
//  multiple trees are possible.
```