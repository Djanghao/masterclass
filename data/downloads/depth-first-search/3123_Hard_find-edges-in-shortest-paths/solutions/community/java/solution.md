# Java - Dijstra's Algorithm + Set

**Author:** Makubex74
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5052485/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5052485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The graph is represented using a `HashMap<Integer, List<Edge>>`, which maps each node to a list of its outgoing edges.
- Implement Dijkstra's algorithm using a `PriorityQueue` to efficiently find the shortest path from node 0 to all other nodes.
- After finding the shortest distances, use a `Queue` to perform a traceback from node n-1 to node 0. During this process, collect all the nodes that are part of the shortest path(s) and stored the edges between them in an encoded `Long` datatype set `Set<Long>`.
- For each edge, check whether both the nodes of that edge are part of the shortest path(s). 
- The result is a boolean array where each entry corresponds to whether the edge at that index in the input array is part of at least one shortest path.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(V+ElogV)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(|V|)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    class Edge {
        int node;
        int weight;
        Edge(int node, int weight) {
            this.node = node;
            this.weight = weight;
        }
    }

    public boolean[] findAnswer(int n, int[][] edges) {
        // Initialize graph as an array of lists
        List<Edge>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] edge : edges) {
            graph[edge[0]].add(new Edge(edge[1], edge[2]));
            graph[edge[1]].add(new Edge(edge[0], edge[2]));
        }

        // Dijkstra's algorithm to find the shortest path distances
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[0] = 0;
        PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.weight));
        pq.offer(new Edge(0, 0));

        while (!pq.isEmpty()) {
            Edge current = pq.poll();
            int currentNode = current.node;
            int currentWeight = current.weight;

            if (currentWeight > dist[currentNode]) continue;

            for (Edge neighbor : graph[currentNode]) {
                int newDist = dist[currentNode] + neighbor.weight;
                if (newDist < dist[neighbor.node]) {
                    dist[neighbor.node] = newDist;
                    pq.offer(new Edge(neighbor.node, newDist));
                }
            }
        }

        // Use a HashSet to track edges that are part of any shortest path
        Set<Long> shortestPathEdges = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.add(n - 1);

        while (!queue.isEmpty()) {
            int currentNode = queue.poll();
            for (Edge neighbor : graph[currentNode]) {
                if (dist[currentNode] - neighbor.weight == dist[neighbor.node]) {
                    long edgeKey = encodeEdge(neighbor.node, currentNode);
                    if (!shortestPathEdges.contains(edgeKey)) {
                        shortestPathEdges.add(edgeKey);
                        queue.add(neighbor.node);
                    }
                }
            }
        }

        // Generate the final answer
        boolean[] answer = new boolean[edges.length];
        for (int i = 0; i < edges.length; i++) {
            int u = edges[i][0], v = edges[i][1];
            long edgeForward = encodeEdge(u, v);
            long edgeBackward = encodeEdge(v, u);
            answer[i] = shortestPathEdges.contains(edgeForward) || shortestPathEdges.contains(edgeBackward);
        }

        return answer;
    }

    // Helper function to encode an edge (u, v) as a unique long key
    private long encodeEdge(int u, int v) {
        return ((long) u << 32) | (v & 0xFFFFFFFFL);
    }
}

```