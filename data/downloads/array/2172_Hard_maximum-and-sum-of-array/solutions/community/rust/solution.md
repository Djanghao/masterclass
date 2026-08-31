# Rust | Top-down DP

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/3986885/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/3986885/)

---

# Code
```rust
// A non-binary bitmask serde.
struct EnbyState {
    n: usize,
    threshold: usize,

    op_vec: Vec<usize>,
}

impl EnbyState {
    // Construct a `threshold`-layer bitmask serde with `n` bits.
    pub fn new(n: usize, threshold: usize) -> Self {
        let mut op_vec = Vec::with_capacity(n + 1);
        let mut op = 1usize;
        for _ in 0..=n {
            op_vec.push(op);
            op *= threshold;
        }

        Self {
            n,
            threshold,
            op_vec,
        }
    }

    // Get the `ptr`-th bit of the bitmask `token`.
    pub fn get(&self, mut token: usize, ptr: usize) -> usize {
        assert!(ptr < self.n, "OOB");

        token /= self.op_vec[ptr];
        token %= self.threshold;

        token
    }

    // Set the `ptr`-th bit of the bitmask `token` to `state`.
    pub fn set(&self, mut token: usize, ptr: usize, state: usize) -> usize {
        assert!(ptr < self.n, "OOB");
        assert!(state < self.threshold, "OOT");

        let t0 = token % self.op_vec[ptr];

        token /= self.op_vec[ptr + 1];
        token *= self.threshold;

        token += state;

        token *= self.op_vec[ptr];
        token += t0;

        token
    }

    // Returns the upper bound for this bitmask configuration.
    pub fn upper(&self) -> usize {
        self.op_vec[self.n]
    }
}

pub struct DP {
    vec: Vec<u32>,
    n: usize, k_max: usize,

    memo: Vec<Vec<Option<u32>>>,
    enby: EnbyState,
}

impl DP {
    pub fn new(vec: Vec<u32>, k_max: usize) -> Self {
        let n = vec.len();

        let enby = EnbyState::new(k_max, 3);
        let memo = vec![vec![None; enby.upper()]; n + 1];

        Self {
            vec,
            n, k_max,
            memo, enby,
        }
    }
}

impl DP {
    pub fn solve(&mut self, i: usize, token: usize) -> u32 {
        if i > self.n { return u32::MIN; }
        if token >= self.enby.upper() { return u32::MIN; }

        if let Some(ret) = self.memo[i][token] {
            return ret; // cached
        }

        let ret = self.solve_inner(i, token);
        // println!("k: {}, flag: {:#018b}, ret={:?}", k, flag, ret);
        self.memo[i][token] = Some(ret);
        ret
    }

    fn solve_inner(&mut self, i: usize, token: usize) -> u32 {
        if i >= self.n { return u32::MIN; }

        let e = self.vec[i];
        let i_next = i + 1;

        let mut ret = u32::MIN;
        for k in 0..self.k_max {
            let state = self.enby.get(token, k);
            if state >= 2 {
                continue; // box is full
            }

            let token_next = self.enby.set(token, k, state + 1);
            let mut _ret = self.solve(i_next, token_next);
            _ret += (e & (k as u32 + 1));

            ret = ret.max(_ret);
        }

        ret
    }
}

impl Solution {
    pub fn maximum_and_sum(vec: Vec<i32>, k_max: i32) -> i32 {
        let k_max = k_max as usize;
        let mut vec = vec.into_iter()
            .map(|e| e as u32)
            .collect::<Vec<_>>();
        vec.sort_unstable();
        
        let mut dp = DP::new(vec, k_max);
        dp.solve(usize::MIN, usize::MIN) as i32
    }
}
```