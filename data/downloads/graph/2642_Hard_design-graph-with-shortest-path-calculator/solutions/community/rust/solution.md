# Rust/Python. Should be at most medium. Just dijkstra

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4275801/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4275801/)

---

# Intuition
No idea why is this a hard question. It does not need anything apart from knowing dijkstra. Also once you know it, there is just a straight forward application of it.

# Complexity and implementattion

**On init**: create a directed graph. $O(E + V)$

**On add edge**: just add the edge to $O(1)$

**On shortest path**: us a dijkstra algorithm where you put tuples of `(current cost, node)` in a heap. Complexity is $O(E + V \\log V)$

# Code
```Rust []
use std::collections::BinaryHeap;

struct Graph {
  g: Vec<Vec<(usize, i32)>>
}

impl Graph {
  fn new(n: i32, edges: Vec<Vec<i32>>) -> Self {
    let mut g = vec![Vec::new(); n as usize];
    for v in edges {
      g[v[0] as usize].push((v[1] as usize, v[2]))
    }
    return Graph {g: g}
  }
  
  fn add_edge(&mut self, v: Vec<i32>) {
    self.g[v[0] as usize].push((v[1] as usize, v[2]));
  }
  
  fn shortest_path(&self, v1: i32, v2: i32) -> i32 {
    let v2 = v2 as usize;
    let mut heap = BinaryHeap::from([(0, v1 as usize)]);
    let mut all_cost = vec![i32::MAX; self.g.len()];

    while !heap.is_empty() {
      let (cost, node) = heap.pop().unwrap();
      if node == v2 {
        return -cost;
      }

      for i in 0 .. self.g[node].len() {
        let (node_nxt, c) = self.g[node][i];
        if -cost + c < all_cost[node_nxt] {
          all_cost[node_nxt] = -cost + c;
          heap.push((cost - c, node_nxt));
        }
      }
    }

    return -1;
  }
}
```
```python []
class Graph:

  def __init__(self, n: int, edges: List[List[int]]):
    g = [[] for _ in range(n)]
    for v1, v2, w in edges:
      g[v1].append((v2, w))
    self.g = g
      

  def addEdge(self, edge: List[int]) -> None:
    v1, v2, w = edge
    self.g[v1].append((v2, w))

  def shortestPath(self, v1: int, v2: int) -> int:
    frontier = [(0, v1)]
    heapify(frontier)
    all_cost = [float('inf')] * len(self.g)

    while frontier:
      cost, node = heappop(frontier)
      if node == v2:
        return cost

      for node_nxt, c in self.g[node]:
        if cost + c < all_cost[node_nxt]:
          all_cost[node_nxt] = cost + c
          heappush(frontier, (cost + c, node_nxt))
    
    return -1
```
