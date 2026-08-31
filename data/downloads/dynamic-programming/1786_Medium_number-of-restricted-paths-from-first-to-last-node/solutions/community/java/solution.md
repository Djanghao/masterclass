# Easy One Pass Dijkstra Solution ||  No DFS + DP required

**Author:** sakshamsharma809
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/5336699/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/5336699/)

---

# Approach
Approach:
The approach to solve this problem is based on a combination of Dijkstra's algorithm for shortest paths and dynamic programming.

Shortest Path Calculation (Dijkstra's Algorithm):

We start by calculating the shortest distance from every node to node n using Dijkstra's algorithm.
We use a priority queue (min-heap) to efficiently get the next node with the smallest distance.

Counting Restricted Paths:

Using the distances calculated, we determine the number of restricted paths from node 1 to node n.
We use a priority queue to process nodes in the order of their distance from node n, ensuring that when we process a node, all nodes with shorter distances have already been processed.
For each node x, for each neighbor y, if the distance to n from y is greater than from x (dist[y] > dist[x]), it means we can move from x to y in a restricted path. We then update the number of restricted paths to y by adding the number of restricted paths to x.

# Complexity
- Time complexity:
Graph Construction: O(E)
Dijkstra's Algorithm: O(V + E)logV


- Space complexity:
Graph Representation: O(E + V)
Distance and Path Arrays: O(V)
Priority Queue: O(V)

# Code
```
class Pair {
    int node, weight;
    
    Pair(int node, int weight) {
        this.node = node;
        this.weight = weight;
    }
}

class Solution {
    public int countRestrictedPaths(int n, int[][] edges) {
        List<List<Pair>> adj = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            adj.get(u).add(new Pair(v, w));
            adj.get(v).add(new Pair(u, w));
        }

        int[] dist = new int[n + 1];
        int[] ans = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[n] = 0;
        ans[n] = 1;
        PriorityQueue<Pair> heap = new PriorityQueue<>((a, b) -> a.weight - b.weight);
        heap.offer(new Pair(n, 0));
        int mod = (int) 1e9 + 7;

        while (!heap.isEmpty()) {
            Pair top = heap.poll();
            int d = top.weight, x = top.node;
            if (d > dist[x]) continue;
            if (x == 1) break;
            for (Pair neighbor : adj.get(x)) {
                int y = neighbor.node, w = neighbor.weight;
                if (dist[y] > dist[x] + w) {
                    dist[y] = dist[x] + w;
                    heap.offer(new Pair(y, dist[y]));
                }
                if (dist[y] > dist[x]) {
                    ans[y] = (ans[y] + ans[x]) % mod;
                }
            }
        }
        return ans[1];
    }
}
```