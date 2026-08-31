# Rust UnionFind solution (0ms)

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/1296443/](https://leetcode.com/problems/redundant-connection/solutions/1296443/)

---

```rust
struct UnionFind {
    parent: Vec<usize>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        Self {
            parent: (0..n).collect(),
        }
    }
    fn union(&mut self, x: usize, y: usize) {
        let x = self.find(x);
        let y = self.find(y);
        self.parent[y] = x
    }
    fn find(&mut self, x: usize) -> usize {
        if x != self.parent[x] {
            self.parent[x] = self.find(self.parent[x]);
        }
        self.parent[x]
    }
}

impl Solution {
    pub fn find_redundant_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
        let mut uf = UnionFind::new(edges.len());
        for edge in edges {
            let (e0, e1) = (edge[0] as usize - 1, edge[1] as usize - 1);
            if uf.find(e0) == uf.find(e1) {
                return edge;
            }
            uf.union(e0, e1);
        }
        unreachable!()
    }
}
```