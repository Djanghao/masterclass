# Rust | 2D Top-down DP

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/solutions/3791453/](https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/solutions/3791453/)

---

# Code
```
pub struct DP {
    vec: Vec<u32>,
    search_vec: Vec<u32>,
    n: usize, m: usize,

    memo: Vec<Vec<Option<u32>>>,
}

impl DP {
    pub fn new(vec: Vec<u32>) -> Self {
        let n = vec.len();
        let mut search_vec = vec.clone();
        search_vec.sort_unstable();
        search_vec.dedup();
        let m = search_vec.len();

        let memo = vec![vec![None; m + 1]; n + 1];

        Self { vec, search_vec, n, m, memo }
    }
}

impl DP {
    pub fn solve(&mut self, i: usize, prev: usize) -> u32 {
        if i > self.n { return u32::MIN; }
        if prev > self.m { return u32::MIN; }

        if let Some(ret) = self.memo[i][prev] {
            return ret; // cached
        }

        let ret = self.solve_inner(i, prev);
        self.memo[i][prev] = Some(ret);
        ret
    }

    fn solve_inner(&mut self, i: usize, prev: usize) -> u32 {
        if i >= self.n { return u32::MIN; }
        if prev >= self.m { return u32::MIN; }

        if self.vec[i] < self.search_vec[prev] {
            let mut ret = self.search_vec[prev] - self.vec[i];
            ret += self.solve(i + 1, prev);
            return ret;
        }

        let mut ret = u32::MAX;

        let ptr = self.search_vec.partition_point(|&e| e <= self.vec[i]);
        for prev_next in (prev..ptr).rev() {
            let mut _ret = self.vec[i] - self.search_vec[prev_next];
            _ret += self.solve(i + 1, prev_next);
            if _ret > ret { break; }
            ret = ret.min(_ret);
        }
        ret
    }
}

impl Solution {
    pub fn convert_array(vec: Vec<i32>) -> i32 {
        let vec_0 = vec.into_iter()
            .map(|e| e as u32)
            .collect::<Vec<_>>();
        let vec_1 = vec_0.clone().into_iter()
            .map(|e| 2000 - e)
            .collect::<Vec<_>>();
        
        let mut ret = u32::MAX;
        ret = ret.min(DP::new(vec_0).solve(0, 0));
        ret = ret.min(DP::new(vec_1).solve(0, 0));
        ret as i32
    }
}
```