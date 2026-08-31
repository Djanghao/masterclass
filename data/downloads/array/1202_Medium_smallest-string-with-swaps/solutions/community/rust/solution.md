# Rust Union Find Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/1986503/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/1986503/)

---

```rust
use std::collections::HashMap;

struct UnionFind {
    roots: Vec<usize>,
    ranks: Vec<i32>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        Self {
            roots: (0..n).collect(),
            ranks: vec![1; n],
        }
    }

    fn find(&mut self, x: usize) -> usize {
        if self.roots[x] != x {
            self.roots[x] = self.find(self.roots[x]);
        }
        self.roots[x]
    }

    fn union(&mut self, x: usize, y: usize) {
        let x = self.find(x);
        let y = self.find(y);
        if self.ranks[x] > self.ranks[y] {
            self.roots[y] = x;
        } else if self.ranks[x] < self.ranks[y] {
            self.roots[x] = y;
        } else {
            self.roots[y] = x;
            self.ranks[y] += 1;
        }
    }
}

impl Solution {
    pub fn smallest_string_with_swaps(s: String, pairs: Vec<Vec<i32>>) -> String {
        let mut uf = UnionFind::new(s.len());
        pairs
            .iter()
            .for_each(|p| uf.union(p[0] as usize, p[1] as usize));

        let mut s: Vec<char> = s.chars().collect();
        let mut map = HashMap::new();
        for i in 0..s.len() {
            map.entry(uf.find(i)).or_insert(vec![]).push(i);
        }

        for (k, v) in map.iter() {
            let mut arr = Vec::new();
            v.iter().for_each(|&i| arr.push(s[i]));
            arr.sort();
            v.iter().zip(arr.into_iter()).for_each(|(&i, c)| s[i] = c);
        }

        s.into_iter().collect()
    }
}
```