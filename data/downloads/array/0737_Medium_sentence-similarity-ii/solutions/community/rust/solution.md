# Rust DisjointSet solution

**Author:** wddwycc
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/1292170/](https://leetcode.com/problems/sentence-similarity-ii/solutions/1292170/)

---

```rust
/// https://en.wikipedia.org/wiki/Disjoint-set_data_structure
pub struct DisjointSet {
    pub parents: Vec<usize>,
    pub ranks: Vec<usize>,
}

impl DisjointSet {
    pub fn new(n: usize) -> Self {
        let mut parents = vec![0; n + 1];
        for i in 1..=n {
            parents[i] = i;
        }
        let ranks = vec![0; n + 1];
        Self { parents, ranks }
    }

    // \u2248 O(1)
    // Achieved with path compression:
    // when finding x, point itself all its ancestor to root node
    pub fn find(&mut self, u: usize) -> usize {
        if self.parents[u] != u {
            self.parents[u] = self.find(self.parents[u]);
        }
        return self.parents[u];
    }

    // \u2248 O(1)
    // Achieved with union by rank
    pub fn union(&mut self, u: usize, v: usize) -> bool {
        let pu = self.find(u);
        let pv = self.find(v);
        if pu == pv {
            return false;
        }
        // Meger low rank tree into high rank tree
        if self.ranks[pu] > self.ranks[pv] {
            self.parents[pv] = pu;
        } else if self.ranks[pu] < self.ranks[pv] {
            self.parents[pu] = pv;
        } else {
            self.parents[pv] = pu;
            self.ranks[pu] += 1;
        }
        return true;
    }
}

use std::collections::{HashMap, HashSet};

pub struct Solution;
impl Solution {
    pub fn are_sentences_similar_two(
        sentence1: Vec<String>,
        sentence2: Vec<String>,
        similar_pairs: Vec<Vec<String>>,
    ) -> bool {
        if sentence1.len() != sentence2.len() {
            return false;
        }
        let (n, dict) = {
            let mut set = HashSet::new();
            for word in &sentence1 {
                set.insert(word.to_string());
            }
            for word in &sentence2 {
                set.insert(word.to_string());
            }
            for pair in &similar_pairs {
                set.insert(pair[0].to_string());
                set.insert(pair[1].to_string());
            }

            let mut dict = HashMap::new();
            let mut idx: usize = 0;
            for word in set {
                idx += 1;
                dict.insert(word, idx);
            }
            (idx, dict)
        };
        let mut disjoint_set = DisjointSet::new(n);
        for pair in similar_pairs {
            disjoint_set.union(dict[&pair[0]], dict[&pair[1]]);
        }
        for i in 0..sentence1.len() {
            let pu = disjoint_set.find(dict[&sentence1[i]]);
            let pv = disjoint_set.find(dict[&sentence2[i]]);
            if pu != pv {
                return false;
            }
        }
        true
    }
}
```