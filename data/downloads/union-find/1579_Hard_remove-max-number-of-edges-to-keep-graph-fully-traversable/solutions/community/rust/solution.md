# [Rust] concise implementation of Kruskal

**Author:** aexg
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5389126/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5389126/)

---

The solution is Kruskal's algorithm "by the book": https://en.wikipedia.org/wiki/Kruskal%27s_algorithm 

Quite short source code, considering complexity.


```
impl Solution {
    pub fn max_num_edges_to_remove(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let total_edges: i32 = edges.len() as i32;
        let mut dsu_a = Dsu::new(n);
        let mut dsu_b = Dsu::new(n);
        let mut cnt_a: i32 = 0;
        let mut cnt_b: i32 = 0;
        let mut cnt_ab: i32 = 0;

        for edge in edges.iter().filter(|x| x[0] == 3) {
            if dsu_a.find(edge[1]) != dsu_a.find(edge[2])
                || dsu_b.find(edge[1]) != dsu_b.find(edge[2])
            {
                dsu_a.union(edge[1], edge[2]);
                dsu_b.union(edge[1], edge[2]);
                cnt_ab += 1;
            }
        }

        for edge in edges.iter().filter(|x| x[0] == 1) {
            if dsu_a.find(edge[1]) != dsu_a.find(edge[2]) {
                dsu_a.union(edge[1], edge[2]);
                cnt_a += 1;
            }
        }

        for edge in edges.iter().filter(|x| x[0] == 2) {
            if dsu_b.find(edge[1]) != dsu_b.find(edge[2]) {
                dsu_b.union(edge[1], edge[2]);
                cnt_b += 1;
            }
        }

        if cnt_ab + cnt_a == n - 1 && cnt_ab + cnt_b == n - 1 {
            total_edges - cnt_ab - cnt_a - cnt_b
        } else {
            -1
        }
    }
}

struct Dsu {
    p: Vec<i32>,
}

impl Dsu {
    pub fn new(n: i32) -> Self {
        Self {
            p: Vec::from_iter(0..=n),
        }
    }

    pub fn find(&mut self, i: i32) -> i32 {
        if i != self.p[i as usize] {
            self.p[i as usize] = Self::find(self, self.p[i as usize]);
        }
        self.p[i as usize]
    }

    pub fn union(&mut self, i: i32, j: i32) {
        let pi: i32 = self.find(i);
        self.p[pi as usize] = self.find(j);
    }
}

```