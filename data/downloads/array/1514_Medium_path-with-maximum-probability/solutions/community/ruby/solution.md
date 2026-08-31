# ✅100.00% Easy to Understand🔥With Explanation🔥 in Ruby and JavaScript

**Author:** dev-shahadat
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5713249/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5713249/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In the Path with Maximum Probability problem, the objective is to find the most reliable path between two nodes in an undirected graph, where each edge between nodes has a probability of successful traversal. Unlike typical shortest path problems where the goal is to minimize distance, here we aim to maximize the probability of reaching the destination node.

This problem can be thought of as a variant of the shortest path problem. Instead of focusing on minimizing the sum of edge weights (distances), we focus on maximizing the product of edge probabilities. The problem is particularly well-suited for adaptations of graph traversal algorithms like Dijkstra\u2019s or Bellman-Ford, where we continuously update the most promising (highest probability) paths.

The core intuition is to explore the graph in such a way that we prioritize paths that currently offer the highest success probability, ensuring that by the time we reach our destination, we have followed the most reliable route.
# Approach
<!-- Describe your approach to solving the problem. -->
To solve the problem, we employ a modified version of the Bellman-Ford algorithm, which is typically used for finding the shortest paths in graphs with possible negative weights. In this scenario, we adapt the algorithm to focus on maximizing the probability of successful traversal between nodes. The approach can be summarized in the following steps:

1. **Graph Representation**:
   We represent the graph as an adjacency list, where each node is associated with its neighboring nodes and the corresponding edge probabilities.

2. **Initialization**:
   - We initialize an array `dist` of size `n` (number of nodes) to store the maximum probability of reaching each node from the start node. Initially, all probabilities are set to 0 except for the start node, which is set to 1 (since the probability of starting at the start node is certain).
   - We also initialize a priority queue (or use a similar structure) to manage nodes, prioritizing those with the highest probability paths.

3. **Iterative Edge Relaxation**:
   - The algorithm iterates over the edges up to `n-1` times, each time checking if there is a path that offers a higher probability to reach a node than currently known.
   - For each edge `(u, v)` with a success probability `p`, we check if traversing this edge results in a higher probability of reaching node `v` from `u` (or vice versa). If so, we update the `dist` array for that node and mark that an update has been made.
   - The iteration stops early if no updates are made in a full pass, indicating that all maximum probabilities have been found.

4. **Termination**:
   - After completing the iterations, the maximum probability to reach the target node is stored in `dist[end_node]`. If no path exists, it will remain 0.
# Complexity
- **Time complexity**: The time complexity of the algorithm is $$O(n \	imes E)$$, where `n` is the number of nodes and `E` is the number of edges. This arises because the algorithm performs `n-1` iterations over all the edges, updating probabilities as necessary. In practice, this means the algorithm scales linearly with respect to the number of edges, making it feasible for moderately large graphs.
- **Space complexity**: The space complexity is $$O(n)$$, where `n` is the number of nodes. This is because we maintain an array `dist` to store the maximum probabilities for each node. Additionally, the space required for storing the graph itself is $$O(V + E)$$, where `V` is the number of vertices, and `E` is the number of edges.
# Code
```ruby []
# @param {Integer} n
# @param {Integer[][]} edges
# @param {Float[]} succ_prob
# @param {Integer} start_node
# @param {Integer} end_node
# @return {Float}
def max_probability(n, edges, succ_prob, start_node, end_node)
  dist = Array.new(n, 0)
  dist[start_node] = 1.0

  (n - 1).times do
    updated = false
    edges.each_with_index do |(u, v), i|
      if dist[u] * succ_prob[i] > dist[v]
        dist[v] = dist[u] * succ_prob[i]
        updated = true
      end
      if dist[v] * succ_prob[i] > dist[u]
        dist[u] = dist[v] * succ_prob[i]
        updated = true
      end
    end
    break unless updated
  end

  dist[end_node]
end

```
```javascript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    let dist = new Array(n).fill(0.0);
    dist[start_node] = 1.0;

    for (let i = 0; i < n - 1; i++) {
        let updated = false;
        for (let j = 0; j < edges.length; j++) {
            let u = edges[j][0];
            let v = edges[j][1];
            let prob = succProb[j];

            if (dist[u] * prob > dist[v]) {
                dist[v] = dist[u] * prob;
                updated = true;
            }
            if (dist[v] * prob > dist[u]) {
                dist[u] = dist[v] * prob;
                updated = true;
            }
        }
        if (!updated) break;
    }

    return dist[end_node];
};

```
# Conclusion
The Path with Maximum Probability problem challenges us to rethink the classic shortest path problem by focusing on maximizing success probabilities rather than minimizing distances. By adapting the Bellman-Ford algorithm, we can efficiently find the most reliable path in a graph, even when dealing with complex scenarios where probabilities vary across multiple edges.