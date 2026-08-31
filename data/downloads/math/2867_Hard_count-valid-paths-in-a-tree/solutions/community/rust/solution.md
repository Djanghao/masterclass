# Rust/Python. Almost linear time with detailed explanation. Beats 100%

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4090715/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4090715/)

---

# Intuition

You can easily see that you do not care about values in the tree, the only thing you care is whether the node is prime or no. So we can just consider the graph with only zeros (not-primes) and ones (primes). I will ignore the part how to find whether something is prime (the most efficient is to implemetn [sieve](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)) and building a tree (it is obvious). See `eratosthenes_sieve` and `build_graph`.


Now rephrasing the problem as a tree with `0, 1` nodes the question asks how many pathes are their in a tree whose sum is exactly 1. 

We can calculate this value by noticing that we can look at any specific node and checking how many of such pathes are going via this node. To get a path with exactly sum of exactly one we need to know two values:
 - how many pathes have sum of zero. I call them `n0, num0` in code
 - how many pathes have sum of exactly one. I call them `n1, num1` in code.

The only way to create path of sum one is to combine each path in `n0` with each pathe with `n1` (basically multiply them).

Now lets assume that we have a function which returns those two values. For leaf nodes it will be `(1, 0)` if the node is not prime and `(0, 1)` for prime nodes. Lets see are you going to update the values and the results based on child nodes.

---------------

Lets look at the situation where parent is `1` and has some children. We know that we return `(0, num1)` in this case (as it is not possible to be path of sum 0), and we start `num1 = 1` (we already have soem path). Here where we get `n0, n1 = dfs(...)` and use them to update res += `n0 * num1` (already explained why) and update the number of pathes which currently have at most one will be updated by `n0` (as we already have 1)


-------------

Lets look at the situation where parent is `1` and has some children. Here we might have both values and we start from `num0, num1 = 1, 0`. Having `n0, n1 = dfs(...)` we do the updates:
 - `res` by both components `n0 * num1 + n1 * num0`
 - `num0 += n0`. Because the parent is 0, we just increase by `n0`
 - `num1 += n1`. Because the parent is 0, we just increase by `n1`



# Complexity
- Time complexity: $O(n \\log \\log n)$
- Space complexity: $O(n)$

# Code

Notice that in Rust I return 3 values where first is the result. We can do the same in Py, but there it seemed to me that having class variables is easier.

```Rust []
impl Solution {

  fn eratosthenes_sieve(n: usize) -> Vec<bool> {
    let (mut primes, mut res) = (vec![true; n], vec![2]);
    let mut is_prime = vec![false; n];
    if 2 < is_prime.len() {
      is_prime[2] = true;
    }
    let sqrt_n = ((n as f64).sqrt() as usize + 1) | 1;
    for p in (3 .. sqrt_n).step_by(2) {
      if primes[p] {
        is_prime[p] = true;
        for i in (p * p .. n).step_by(2 * p) {
          primes[i] = false;
        }
      }
    }

    for p in (sqrt_n .. n).step_by(2) {
      if primes[p] {
        is_prime[p] = true;
      }
    } 

    return is_prime;
  }

  fn build_graph(edges: Vec<Vec<i32>>) -> Vec<Vec<usize>> {
    let mut g = vec![Vec::new(); edges.len() + 2];
    for v in edges {
      g[v[0] as usize].push(v[1] as usize);
      g[v[1] as usize].push(v[0] as usize);
    }

    return g;
  }

  fn dfs(node: usize, node_parent: usize, g: &Vec<Vec<usize>>, is_prime: &Vec<bool>) -> (i64, i64, i64) {
    let mut res = 0i64;

    if is_prime[node] {
      let mut num1 = 1i64;
      for i in 0 .. g[node].len() {
        let node_nxt = g[node][i];
        if node_nxt == node_parent {
          continue
        }

        let (r, n0, n1) = Self::dfs(node_nxt, node, g, is_prime);
        res += r + num1 * n0;
        num1 += n0;
      }
      return (res, 0, num1);
    }

    let (mut num0, mut num1) = (1i64, 0i64);
    for i in 0 .. g[node].len() {
      let node_nxt = g[node][i];
      if node_nxt == node_parent {
        continue
      }

      let (r, n0, n1) = Self::dfs(node_nxt, node, g, is_prime);
      res += r + n0 * num1 + n1 * num0;
      num0 += n0;
      num1 += n1;
    }
    return (res, num0, num1);
  }

  pub fn count_paths(n: i32, edges: Vec<Vec<i32>>) -> i64 {
    let is_prime = Self::eratosthenes_sieve(n as usize + 1);
    let g = Self::build_graph(edges);

    let (r, n1, n2) = Self::dfs(1, 0, &g, &is_prime);
    return r;
  }
}
```
```python []
class Solution:

  def __init__(self):
    self.primes = []
    self.g = []
    self.res = 0

  def eratosthenes_sieve(self, n):
    prime, result, sqrt_n = [True] * n, {2}, (int(n ** .5) + 1) | 1  # ensure it's odd
    for p in range(3, sqrt_n, 2):
      if prime[p]:
        result.add(p)
        prime[p * p::2 * p] = [False] * ((n - p * p - 1) // (2 * p) + 1)

    self.primes = result | {p for p in range(sqrt_n, n, 2) if prime[p]}

  def build_graph(self, edges):
    g = [[] for _ in range(len(edges) + 2)]
    for v1, v2 in edges:
      g[v1].append(v2)
      g[v2].append(v1)
    self.g = g

  def dfs(self, node, node_parent):
    if node in self.primes:
      num1 = 1
      for node_nxt in self.g[node]:
        if node_nxt == node_parent:
          continue

        n0, n1 = self.dfs(node_nxt, node)
        self.res += n0 * num1
        num1 += n0
      return 0, num1
    
    num0, num1 = 1, 0
    for node_nxt in self.g[node]:
      if node_nxt == node_parent:
          continue

      n0, n1 = self.dfs(node_nxt, node)
      self.res += num0 * n1 + num1 * n0
      num1 += n1
      num0 += n0
    
    return num0, num1

  def countPaths(self, n: int, edges: List[List[int]]) -> int:
    self.eratosthenes_sieve(n + 3)
    self.build_graph(edges)
    self.dfs(1, -1)
    return self.res
```
