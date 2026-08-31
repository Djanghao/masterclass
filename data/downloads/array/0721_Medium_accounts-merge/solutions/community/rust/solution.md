# Rust UnionFind solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/1602116/](https://leetcode.com/problems/accounts-merge/solutions/1602116/)

---

```rust
use std::collections::HashMap;

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
    pub fn accounts_merge(accounts: Vec<Vec<String>>) -> Vec<Vec<String>> {
        let mut hm = HashMap::new();
        let mut uf = UnionFind::new(accounts.len());
        for (i, account) in accounts.iter().enumerate() {
            for email in account.iter().skip(1) {
                if let Some(&j) = hm.get(email) {
                    uf.union(i, j);
                } else {
                    hm.insert(email, i);
                }
            }
        }
        let mut components = HashMap::new();
        for (&email, &i) in &hm {
            components
                .entry(uf.find(i))
                .or_insert_with(Vec::new)
                .push(email.clone());
        }
        let mut answer = Vec::new();
        for (&i, emails) in components.iter_mut() {
            let mut merged = vec![accounts[i][0].clone()];
            emails.sort();
            merged.extend(emails.iter().cloned());
            answer.push(merged);
        }
        answer
    }
}
```