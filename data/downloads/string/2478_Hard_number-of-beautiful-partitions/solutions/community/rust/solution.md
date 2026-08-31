# Rust | Top-down DP

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/3794517/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/3794517/)

---

# Code
```
type Chr = u32;

pub struct DP {
    vec: Vec<Chr>,
    n: usize,
    k_max: usize,
    min_length: usize,
    
    memo: Vec<Vec<Option<usize>>>,
}

impl DP {
    pub fn new(
        vec: Vec<Chr>,
        k_max: usize, min_length: usize
    ) -> Self {
        let n = vec.len();

        let memo = vec![vec![None; k_max + 1]; n + 1];

        Self {
            vec, n,
            k_max, min_length,

            memo,
        }
    }
}

const MOD: usize = 1_000_000_007;

impl DP {
    pub fn solve(&mut self, i: usize, k: usize) -> usize {
        if i > self.n { return usize::MIN; }
        if k > self.k_max { return usize::MIN; }

        if let Some(ret) = self.memo[i][k] {
            return ret; // cached
        }

        let ret = self.solve_inner(i, k);
        self.memo[i][k] = Some(ret);
        ret
    }

    fn is_prime(c: Chr) -> bool {
        [2, 3, 5, 7].contains(&c)
    }

    fn solve_inner(&mut self, i: usize, k: usize) -> usize {
        if i >= self.n && k < 1 { return 1; } // found one
        if i >= self.n || k < 1 { return usize::MIN; } // still some left

        if !Self::is_prime(self.vec[i]) {
            return usize::MIN; // does not start with prime
        }

        let mut ret = usize::MIN;
        let i_start = i + self.min_length - 1;
        let i_end = self.n - (self.min_length * (k - 1)).min(self.n);
        for i_next in i_start..i_end {
            if Self::is_prime(self.vec[i_next]) {
                continue; // does not end with non-prime
            }

            ret += self.solve(i_next + 1, k - 1);
            ret %= MOD;
        }
        ret
    }
}

impl Solution {
    fn preproc(s: String) -> Vec<Chr> {
        s.chars()
            .map(|c| c as Chr - '0' as Chr)
            .collect::<Vec<_>>()
    }

    pub fn beautiful_partitions(s: String, k: i32, min_length: i32) -> i32 {
        let k = k as usize;
        let min_length = min_length as usize;

        let vec = Self::preproc(s);

        let mut dp = DP::new(vec, k, min_length);
        dp.solve(0, k) as i32
    }
}

```