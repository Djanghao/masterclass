# Rust DSU solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/3721859/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/3721859/)

---

# Code
```
impl Solution {
    pub fn earliest_acq(mut logs: Vec<Vec<i32>>, n: i32) -> i32 {
        struct UF {
            repr: Vec<usize>,
            sz: Vec<i32>,
            cmp: i32,
        }
        impl UF {
            fn new(n: i32) -> Self {
                let mut repr = vec![];
                for i in 0..n as usize {
                    repr.push(i);
                }
                Self {
                    repr,
                    sz: vec![1; n as usize],
                    cmp: n,
                }
            }

            fn find(&mut self, x: usize) -> usize {
                if self.repr[x] != x {
                    self.repr[x] = self.find(self.repr[x]);
                }
                self.repr[x]
            }

            fn union(&mut self, x: usize, y: usize) {
                let (mut x, mut y) = (self.find(x), self.find(y));
                if x == y {
                    return;
                }
                if self.sz[x] < self.sz[y] {
                    std::mem::swap(&mut x, &mut y);
                }
                self.repr[y] = x;
                self.sz[x] += self.sz[y];
                self.cmp -= 1;
            }
        }

        let mut uf = UF::new(n);
        logs.sort();
        for log in logs {
            let (ts, x, y) = (log[0], log[1], log[2]);
            uf.union(x as usize, y as usize);
            if uf.cmp == 1 {
                return ts;
            }
        }
        -1
    }
}
```