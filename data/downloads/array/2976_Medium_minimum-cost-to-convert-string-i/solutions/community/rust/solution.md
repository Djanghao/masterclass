# Python/Rust: Two solutions. Dijkstra (faster 100% with 900ms py) and Floyd

**Author:** SalvadorDali
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/4449606/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/4449606/)

---

# Intuition

Lets look at the Dijkstra solution. It is longer than the next one, but is at least 2x faster than the most efficient Floyd. This is achieved due to a lazy evaluation of distances.

This is a graph problem. Having `original`, `changed` and `cost` we can build a graph which shows from which character to which character you can move and how much does it cost. See `build_graph` for this construction.

Now when we iterate over characters in `source` and `target`. When we see two characters which are different we need to find the cost to convert them. This cost is found from that graph using dijkstra algorithm. See `find_cost` function.

Now it is very likely that we will do those recomputations for the same charactes so we cache them.

# Complexity


Space time and time complexity only depends on the graph. The graph depends on the size of the alphabet $k = 26$. As k is not big, both compexities will be dominated by another factor so:

- Time complexity: $O(n)$
- Space complexity: $O(k^2) = O(1)$

```
from collections import defaultdict
from heapq import heappop, heappush

class Solution:

  def build_graph(self, c_from, c_to, cost):
    data = {}
    for c1, c2, c in zip(c_from, c_to, cost):
      data[(c1, c2)] = min(data.get((c1, c2), float('inf')), c)

    g = defaultdict(list)
    for (c1, c2), c in data.items():
      g[c1].append((c2, c))
    return g

  def find_cost(self, g, c):
    frontier, dist = [(0, c)], {c: float('inf') for c in 'abcdefghijklmnopqrstuvwxyz'}
    while frontier:
      curr_dist, node = heappop(frontier)
      if dist[node] > curr_dist:
        dist[node] = curr_dist
        for node_nxt, w in g[node]:
          heappush(frontier, (w + curr_dist, node_nxt))

    return dist

  def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
    g = self.build_graph(original, changed, cost)
    distances = {}
    res = 0

    for c1, c2 in zip(source, target):
      if c1 == c2:
        continue

      if c1 not in distances:
        distances[c1] = self.find_cost(g, c1)

      r = distances[c1][c2]
      if r == float('inf'):
        return -1
      res += r

    return res
```


-----------------

As we see in the previous solution we need to get the minimum cost of moving from one character to another. And [Floyd Warshall](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm) does this.

So calculate the cost matrix and then use it to find the cost of strings and sum of individual characters.

Those solutions way be way smaller (in terms of lines of code), but the issue is that we are not lazy here. No matter what graph do you have you still precalculate everything which will be $O(k^3)$ which is not prohibitive, but noticable.

Time and space complexity is still the same (as we assume that k is constant)

```Python []
class Solution:

  def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
    C = [[float('inf')] * 26 for _ in range(26)]
    for c1, c2, c in zip(original, changed, cost):
      c1, c2 = ord(c1) - 97, ord(c2) - 97
      C[c1][c2] = min(C[c1][c2], c)
    
    for k in range(26):
      for i in range(26):
        for j in range(26):
          C[i][j] = min(C[i][j], C[i][k]+ C[k][j])

    res = sum(C[ord(c1) - 97][ord(c2) - 97] for c1, c2 in zip(source, target) if c1 != c2)
    return res if res != float('inf') else -1
```
```Rust []
impl Solution {
  pub fn minimum_cost(source: String, target: String, original: Vec<char>, changed: Vec<char>, cost: Vec<i32>) -> i64 {
    let mut C = [[i32::MAX as u64; 26]; 26];
    for i in 0 .. original.len() {
      let c1 = original[i] as usize - 97;
      let c2 = changed[i] as usize - 97;
      C[c1][c2] = C[c1][c2].min(cost[i] as u64);
    }

    for k in 0 .. 26 {
      for i in 0 .. 26 {
        for j in 0 .. 26 {
          C[i][j] = C[i][j].min(C[i][k] + C[k][j])
        }
      }
    }

    let mut res = 0;
    let source = source.into_bytes();
    let target = target.into_bytes();
    for i in 0 .. source.len() {
      if target[i] != source[i] {
        let v = C[source[i] as usize - 97][target[i] as usize - 97];
        if v >= i32::MAX as u64 {
          return -1;
        }
        res += v;
      }
    }

    return res as i64;
  }
}
```