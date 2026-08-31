# UnionFind solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/3181060/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/3181060/)

---

# Code
```
impl Solution {
    pub fn are_connected(n: i32, threshold: i32, queries: Vec<Vec<i32>>) -> Vec<bool> {
        let mut uf = UnionFind::new(n as usize + 1);
        for z in (threshold + 1)..=n {
            for x in (z * 2..=n).step_by(z as usize) {
                uf.union(z as usize, x as usize);
            }
        }
        queries
            .iter()
            .map(|q| uf.find(q[0] as usize) == uf.find(q[1] as usize))
            .collect()
    }
}

struct UnionFind {
    parent: Vec<usize>,
    size: Vec<usize>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        let mut parent = vec![0; n];
        let size = vec![1; n];
        for (i, item) in parent.iter_mut().enumerate().take(n) {
            *item = i;
        }
        UnionFind { parent, size }
    }

    fn find(&mut self, x: usize) -> usize {
        if self.parent[x] == x {
            x
        } else {
            self.parent[x] = self.find(self.parent[x]);
            self.parent[x]
        }
    }

    fn union(&mut self, u: usize, v: usize) -> bool {
        let pu = self.find(u);
        let pv = self.find(v);
        if pu == pv {
            return false;
        }
        if self.size[pu] > self.size[pv] {
            self.size[pu] += self.size[pv];
            self.parent[pv] = pu;
        } else {
            self.size[pv] += self.size[pu];
            self.parent[pu] = pv;
        }
        true
    }
}

```