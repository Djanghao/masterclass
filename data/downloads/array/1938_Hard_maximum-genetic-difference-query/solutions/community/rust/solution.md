# Rust Bitwise Trie & DFS solution

**Author:** wddwycc
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/1359217/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/1359217/)

---

Two key points: 

* use bitwise trie to reduce max XOR finding time to O(1), similar to: [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
* use backtracking to traverse the graph, updating the trie accordingly, resolve all queries related to certain node when reach it.

```rust
use std::collections::HashMap;

/// https://en.wikipedia.org/wiki/Trie#Bitwise_tries
#[derive(Default, Debug)]
struct Trie {
    left: Option<Box<Trie>>,
    right: Option<Box<Trie>>,
    ct: usize,
}

impl Trie {
    pub fn new() -> Trie {
        Default::default()
    }

    pub fn insert(&mut self, num: i32) {
        let mut cur = self;
        for i in (0..18).rev() {
            if (num >> i) & 1 > 0 {
                if let Some(ref mut r) = cur.right {
                    cur = r;
                } else {
                    cur.right = Some(Box::new(Trie::new()));
                    cur = cur.right.as_mut().unwrap();
                }
                cur.ct += 1;
            } else {
                if let Some(ref mut l) = cur.left {
                    cur = l;
                } else {
                    cur.left = Some(Box::new(Trie::new()));
                    cur = cur.left.as_mut().unwrap();
                }
                cur.ct += 1;
            }
        }
    }

    pub fn remove(&mut self, num: i32) {
        let mut cur = self;
        for i in (0..18).rev() {
            if (num >> i) & 1 > 0 {
                cur = cur.right.as_mut().unwrap();
                cur.ct -= 1;
            } else {
                cur = cur.left.as_mut().unwrap();
                cur.ct -= 1;
            }
        }
    }

    pub fn max_xor(&self, num: i32) -> i32 {
        let mut cur = self;
        let mut ans = 0;
        for i in (0..18).rev() {
            ans = ans << 1;
            if (num >> i) & 1 > 0 {
                match cur.left {
                    Some(ref l) if l.ct > 0 => {
                        cur = l;
                        ans += 1;
                    }
                    _ => cur = cur.right.as_ref().unwrap(),
                }
            } else {
                match cur.right {
                    Some(ref r) if r.ct > 0 => {
                        cur = r;
                        ans += 1;
                    }
                    _ => cur = cur.left.as_ref().unwrap(),
                }
            }
        }
        ans
    }
}

impl Solution {
    pub fn max_genetic_difference(parents: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let n = parents.len();
        let mut root = 0;
        let mut adjacency_list = vec![vec![]; n];
        for (u, v) in parents.into_iter().enumerate() {
            if v == -1 {
                root = u as i32;
            } else {
                adjacency_list[v as usize].push(u);
            }
        }
        // HashMap<u, Vec<(q_val, q_idx)>>
        let grouped_queries = {
            let mut res = HashMap::new();
            for (idx, query) in queries.iter().enumerate() {
                let u = query[0];
                let p = query[1];
                res.entry(u).or_insert(vec![]).push((p, idx));
            }
            res
        };
        let mut ans = vec![0; queries.len()];
        let mut trie = Trie::new();
        Self::dfs(&adjacency_list, &grouped_queries, root, &mut trie, &mut ans);
        ans
    }

    fn dfs(
        adjacency_list: &[Vec<usize>],
        queries: &HashMap<i32, Vec<(i32, usize)>>,
        cur: i32,
        trie: &mut Trie,
        ans: &mut Vec<i32>,
    ) {
        trie.insert(cur);
        if let Some(list) = queries.get(&cur) {
            for query in list {
                let q_val = query.0;
                let q_idx = query.1;
                ans[q_idx] = trie.max_xor(q_val);
            }
        }
        for &u in &adjacency_list[cur as usize] {
            Self::dfs(adjacency_list, queries, u as i32, trie, ans);
        }
        trie.remove(cur);
    }
}
```