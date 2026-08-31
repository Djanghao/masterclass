# Intuition + Explanation + Simple clean Dijkstra and DP solution. Passes all tests. C#

**Author:** user9126B
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/4105840/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/4105840/)

---

# Intuition

In Dijkstra, once a node is dequeued, you won't find a shorter path to any node that can reach the dequeued node. The algorithm guarantees that the shortest path to every dequeued node has already been found.

Based on this insight, we can calculate the num of shortest paths to each node (especially the dist node) by building on previously reached nodes, aka. Dynamic programming!


# Complexity
- Time complexity:
Total: $$O(V + E log(E))$$
We traverse all edges and vertices exactly once.
We have $$|V|$$ possible state to calculate, i.e. we have to calculate the min paths count of each vertex exactly once, the calculation take $$O(1)$$ time.
Each dequeue and enqueue operation takes $$O(E log(E))$$

- Space complexity:
Total: $$O(|E| + |V|)$$.
Adjacency List: $$O(|E| + |V|)$$.
Elements in the heap in worst case: $$O(|E|)$$.


# Code
```
public class Solution {
    private List<HashSet<Edge>> _adjacency;
    private int _dstNode;
    private long[] _minDistToNode;
    private long[] _numMinPathsToNode;
    private readonly int _modulo = (int)Math.Pow(10, 9) + 7;

    public int CountPaths(int n, int[][] roads) {
        _dstNode = n-1;

        _minDistToNode = new long[n];
        Array.Fill(_minDistToNode, Int64.MaxValue);
        _minDistToNode[0] = 0;

        _numMinPathsToNode = new long[n];
        Array.Fill(_numMinPathsToNode, 0);
        _numMinPathsToNode[0] = 1;

        InitializeAdjacency(n, roads);

        var heap = new PriorityQueue<int, long>();
        heap.Enqueue(0, 0);

        while (heap.Count > 0) {
            heap.TryDequeue(out var node, out var dist);

            if (node == _dstNode) {
                return (int)_numMinPathsToNode[_dstNode];
            }

            // This is equivalent to if(!visited[node]). 
            // This is true because we enqueue nodes if we found a shorter path and update the array accordingly,
            // so if after enqueuing a node we found a shorter path, we will dequeue the shorter path first but 
            // we are still gonna dequeue the longer path later, this if takes care of ignoring the legacy longer path.
            if (dist > _minDistToNode[node]) {
                continue;        
            }

            RelaxEdges(heap, node);
        }

        return (int)_numMinPathsToNode[_dstNode];
    }

    private void RelaxEdges(PriorityQueue<int, long> heap, int node) {
        foreach (var adj in _adjacency[node]) {
            var newDist = _minDistToNode[node] + adj.Time;
            if (newDist < _minDistToNode[adj.To]) {
                _minDistToNode[adj.To] = newDist;
                _numMinPathsToNode[adj.To] = 0;
                heap.Enqueue(adj.To, newDist);
            }
            if (newDist == _minDistToNode[adj.To]) {
                _numMinPathsToNode[adj.To] += _numMinPathsToNode[node];
                _numMinPathsToNode[adj.To] %= _modulo;
            }
        }
    }

    private void InitializeAdjacency(int n, int[][] roads) {
        _adjacency = new List<HashSet<Edge>>();

        for (int i = 0; i < n; i++) {
            _adjacency.Add(new HashSet<Edge>());
        }

        foreach (var road in roads) {
            _adjacency[road[0]].Add(new Edge() {To = road[1], Time = (long)road[2]});
            _adjacency[road[1]].Add(new Edge() {To = road[0], Time = (long)road[2]});
        }
    }

    private class Edge {
        public int To {get; set;}
        public long Time {get; set;}
    }
}
```