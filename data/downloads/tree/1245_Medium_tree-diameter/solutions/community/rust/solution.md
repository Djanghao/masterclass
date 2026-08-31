# Rust/Python 2 DFS with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/3580401/](https://leetcode.com/problems/tree-diameter/solutions/3580401/)

---

# Intuition

We do a first DFS call to find the distances to every node of the tree. We do not care from what node do we call it.

Once we know those distances we need to find the node which has the biggest distance. Then we do the same DFS call and get another distances. Now the diameter will be the maximum size in that distance array.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code


```Rust []
impl Solution {

  fn dfs(g: &Vec<Vec<i32>>, node: i32, node_prev: i32, cnt: i32, distances: &mut Vec<i32>) {
    distances[node as usize] = cnt;
    for node_next in &g[node as usize] {
      if *node_next != node_prev {
        Self::dfs(g, *node_next, node, cnt + 1, distances);
      }
    }
  }

  pub fn tree_diameter(edges: Vec<Vec<i32>>) -> i32 {
    let l = edges.len();
    let mut g = vec![vec![]; l + 1];
    for e in edges {
      g[e[0] as usize].push(e[1]);
      g[e[1] as usize].push(e[0]);
    }
    
    let mut distances = vec![0; l + 1];
    Self::dfs(&g, 0, -1, 0, &mut distances);
    
    let (mut best_node, mut best_dist) = (0, 0);
    for n in 0 .. l + 1 {
      if distances[n] > best_dist {
        best_dist = distances[n];
        best_node = n;
      }
    }

    let mut distances = vec![0; l + 1];
    Self::dfs(&g, best_node as i32, -1, 0, &mut distances);

    return *distances.iter().max().unwrap();
  }
}
```
```python []
class Solution:

  def dfs(self, g, node, node_prev, cnt, dist):
    dist[node] = cnt
    for node_next in g[node]:
      if node_next != node_prev:
        self.dfs(g, node_next, node, cnt + 1, dist)


  def treeDiameter(self, edges: List[List[int]]) -> int:
    g = [[] for _ in range(len(edges) + 1)]
    for v1, v2 in edges:
      g[v1].append(v2)
      g[v2].append(v1)

    distances = [0] * (len(edges) + 1)
    self.dfs(g, 0, -1, 0, distances)

    node, best_d = 0, 0
    for n, v in enumerate(distances):
      if v >= best_d:
        best_d = v
        node = n
    
    distances = [0] * (len(edges) + 1)
    self.dfs(g, node, -1, 0, distances)
    return max(distances)
```