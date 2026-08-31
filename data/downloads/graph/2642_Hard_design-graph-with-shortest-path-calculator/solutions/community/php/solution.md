# 🚀Beats 100.00%of users with php

**Author:** devsohel
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277083/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277083/)

---

# If you have any suggestions, feel free to comments.

# php
```
class Graph {
    /**
     * @param Integer $n
     * @param Integer[][] $edges
     */
    function __construct($n, $edges) {
        $this->graph = array_fill(0, $n, []);
        foreach ($edges as $edge) {
            list($u, $v, $w) = $edge;
            $this->graph[$u][] = [$v, $w];
        }
    }
  
    /**
     * @param Integer[] $edge
     * @return NULL
     */
    function addEdge($edge) {
        list($u, $v, $w) = $edge;
        $this->graph[$u][] = [$v, $w];
    }
  
    /**
     * @param Integer $node1
     * @param Integer $node2
     * @return Integer
     */
    function shortestPath($node1, $node2) {
        $pq = new SplPriorityQueue();
        $pq->insert([$node1, 0], 0);
        $dist = array_fill(0, count($this->graph), PHP_INT_MAX);
        $dist[$node1] = 0;
        while (!$pq->isEmpty()) {
            list($u, $d) = $pq->extract();
            if ($u == $node2) {
                return $d;
            }
            if ($d > $dist[$u]) {
                continue;
            }
            foreach ($this->graph[$u] as list($v, $w)) {
                if ($dist[$v] > $d + $w) {
                    $dist[$v] = $d + $w;
                    $pq->insert([$v, $dist[$v]], -$dist[$v]);
                }
            }
        }
        return -1;
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * $obj = Graph($n, $edges);
 * $obj->addEdge($edge);
 * $ret_2 = $obj->shortestPath($node1, $node2);
 */
```
# python
```
class Graph:

    def __init__(self, n: int, edges: List[List[int]]):
        self.graph = [[] for _ in range(n)]
        for u, v, w in edges:
            self.graph[u].append((v, w))

    def addEdge(self, edge: List[int]) -> None:
        u, v, w = edge
        self.graph[u].append((v, w))

    def shortestPath(self, node1: int, node2: int) -> int:
        from heapq import heappush, heappop
        pq = [(0, node1)]
        dist = [float('inf')] * len(self.graph)
        dist[node1] = 0
        while pq:
            d, u = heappop(pq)
            if u == node2:
                return d
            if d > dist[u]:
                continue
            for v, w in self.graph[u]:
                if dist[v] > d + w:
                    dist[v] = d + w
                    heappush(pq, (dist[v], v))
        return -1


# Your Graph object will be instantiated and called as such:
# obj = Graph(n, edges)
# obj.addEdge(edge)
# param_2 = obj.shortestPath(node1,node2)
```
# JavaScript
```
/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.graph = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) {
        this.graph[u].push([v, w]);
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    const [u, v, w] = edge;
    this.graph[u].push([v, w]);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    const pq = [[0, node1]];
    const dist = Array(this.graph.length).fill(Infinity);
    dist[node1] = 0;
    while (pq.length) {
        const [d, u] = pq.shift();
        if (u === node2) {
            return d;
        }
        if (d > dist[u]) {
            continue;
        }
        for (const [v, w] of this.graph[u]) {
            if (dist[v] > d + w) {
                dist[v] = d + w;
                pq.push([dist[v], v]);
            }
        }
        pq.sort((a, b) => a[0] - b[0]);
    }
    return -1;
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
```