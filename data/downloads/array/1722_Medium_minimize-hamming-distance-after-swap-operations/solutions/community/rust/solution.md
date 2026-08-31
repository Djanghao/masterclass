# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/3199891/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/3199891/)

---

# Code
```
impl Solution {
    pub fn minimum_hamming_distance(source: Vec<i32>, target: Vec<i32>, allowed_swaps: Vec<Vec<i32>>) -> i32 {
        use std::collections::HashMap;
        let mut uf = UnionFind::new(source.len());
        for s in allowed_swaps {
            uf.union(s[0] as usize, s[1] as usize);
        }
        let mut circles = HashMap::new();
        for i in 0..source.len() {
            if source[i] == target[i] {
                continue;
            }
            let p = uf.find(i);
            circles
                .entry(p)
                .or_insert(HashMap::new())
                .entry(source[i])
                .and_modify(|v| *v += 1)
                .or_insert(1);
        }
        let mut res = 0;
        for i in 0..source.len() {
            if source[i] == target[i] {
                continue;
            }
            let pi = uf.find(i);
            if circles.get(&pi).unwrap().get(&target[i]).unwrap_or(&0) == &0 {
                res += 1;
            } else {
                *circles.get_mut(&pi).unwrap().get_mut(&target[i]).unwrap() -= 1;
            }
        }
        res
    }
}

struct UnionFind {
    parents: Vec<usize>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        let mut parents = vec![0; n];
        for (i, item) in parents.iter_mut().enumerate().take(n) {
            *item = i;
        }
        UnionFind { parents }
    }
    fn find(&mut self, i: usize) -> usize {
        let mut i = i;
        while i != self.parents[i] {
            self.parents[i] = self.parents[self.parents[i]];
            i = self.parents[i];
        }
        i
    }
    fn union(&mut self, i: usize, j: usize) {
        let v = self.find(i);
        self.parents[v] = self.find(j);
    }
}

```