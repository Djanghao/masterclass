# Rust | Disjoint Set

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/3678876/](https://leetcode.com/problems/number-of-islands-ii/solutions/3678876/)

---

# Approach

For dealing with sets of disjoint elements, we can use a disjoint set.

To count the number of islands, we only need to keep track of the number of sets in our disjoint set implementation.

# Complexity
- Time complexity:
$$O(k \\log mn)$$

- Space complexity:
$$O(mn)$$

# Code
```
use std::collections::HashSet;

pub struct DisjointSet {
    ids: HashSet<usize>,
    parents: Vec<Option<usize>>,
}

impl DisjointSet {
    pub fn new(n: usize) -> Self {
        let ids = HashSet::new();
        let parents = vec![None; n];

        Self { ids, parents }
    }

    pub fn init(&mut self, e: usize) {
        if e >= self.parents.len() { return; }
        if let Some(parent) = self.parents[e] { return; } // already initialized

        self.parents[e] = Some(e);
        self.ids.insert(e); // new representative
    }

    pub fn find(&mut self, e: usize) -> Option<usize> {
        if e >= self.parents.len() { return None; }
        
        let parent = if let Some(parent) = self.parents[e] {
            parent
        } else { return None; }; // uninitialized
        if parent == e { return Some(e); } // self-representative

        let ret = if let Some(val) = self.find(parent) {
            val
        } else { return None; };

        self.parents[e] = Some(ret); // path compression

        Some(ret)
    }

    pub fn link(&mut self, e0: usize, e1: usize) {
        if let Some(p0) = self.find(e0) {
            if let Some(p1) = self.find(e1) {
                if p0 == p1 { return; } // already linked

                // p1 is no longer a representative
                self.ids.remove(&p1);
                self.parents[p1] = Some(p0);
            }
        }
    }

    pub fn len(&self) -> usize { self.ids.len() }
}

impl Solution {
    fn _impl(
        m: usize, n: usize,
        positions: Vec<Vec<i32>>
    ) -> Vec<usize> {
        let mut dset = DisjointSet::new(m * n);

        positions.into_iter()
            .map(|v| (v[0] as usize, v[1] as usize))
            .map(|(i, j)| {
                let idx = i * n + j;

                dset.init(idx); // mark the square

                if i > 0 { dset.link((i - 1) * n + j, idx); }
                if i < m - 1 { dset.link((i + 1) * n + j, idx); }
                if j > 0 { dset.link(i * n + j - 1, idx); }
                if j < n - 1 { dset.link(i * n + j + 1, idx); }

                dset.len()
            }).collect::<Vec<_>>()
    }

    pub fn num_islands2(m: i32, n: i32, positions: Vec<Vec<i32>>) -> Vec<i32> {
        Self::_impl(m as usize, n as usize, positions)
            .into_iter()
            .map(|v| v as i32)
            .collect::<Vec<_>>()
    }
}
```