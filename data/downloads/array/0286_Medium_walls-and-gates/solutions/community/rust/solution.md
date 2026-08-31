# Rust O(m * n) BFS Easy Solution

**Author:** duncpro
**Votes:** 0
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/5928714/](https://leetcode.com/problems/walls-and-gates/solutions/5928714/)

---

# Complexity
- Time complexity: $O(m * n)$
- Space complexity: $O(m * n)$

# Code
```rust []
use std::collections::{LinkedList, HashSet};

fn iter_grid(m: usize, n: usize) -> impl Iterator<Item = (usize, usize)> {
    (0..(m * n)).map(move |i| (i / n, i % n))
}

impl Solution {
    pub fn walls_and_gates(rooms: &mut Vec<Vec<i32>>) {
        let (m, n) = (rooms.len(), rooms[0].len());
        let mut queue: LinkedList<((usize, usize), usize)> = LinkedList::new();
        let mut visited: HashSet<(usize, usize)> = HashSet::with_capacity(m * n);
        let mut neighbors_buf: Vec<(usize, usize)> = Vec::with_capacity(4);
        for (i, j) in iter_grid(m, n) {
            if rooms[i][j] != 0 { continue; }
            queue.push_front(((i, j), 0));
        }
        while let Some((root, depth)) = queue.pop_back() {
            if !visited.insert(root) { continue; }
            let (i, j) = root;
            rooms[i][j] = i32::try_from(depth).unwrap();
            if let Some(k) = i.checked_sub(1) { neighbors_buf.push((k, j)); }
            if let Some(l) = j.checked_sub(1) { neighbors_buf.push((i, l)); }
            if i < m - 1 { neighbors_buf.push((i + 1, j)); }
            if j < n - 1 { neighbors_buf.push((i, j + 1)); }
            for (k, l) in neighbors_buf.drain(..) {
                if rooms[k][l] == -1 { continue; }
                queue.push_front(((k, l), depth + 1));
            }
        }
    }
}
```