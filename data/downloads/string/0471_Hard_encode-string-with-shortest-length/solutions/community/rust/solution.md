# Rust | Top-down DP

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-string-with-shortest-length/solutions/3939121/](https://leetcode.com/problems/encode-string-with-shortest-length/solutions/3939121/)

---

# Intuition

It's some sort of dynamic programming problem.

# Approach

The first idea that came to my mind is that it's a 1D DP problem, where we greedily encode windows of substring. However, **nested encoding** is allowed. This means we also need to check the minimum encoding of the window itself. Therefore, **2D dynamic programming** is required.

# Complexity
- Time complexity:
$$O(n^4)$$ probably.

- Space complexity:
$$O(n^3)$$

# Code
```
pub struct DP {
    vec: Vec<char>,
    n: usize,

    memo: Vec<Vec<Option<Vec<char>>>>,
}

impl DP {
    pub fn new(s: String) -> Self {
        let vec = s.chars().collect::<Vec<_>>();
        let n = vec.len();

        let memo = vec![vec![None; n + 1]; n + 1];

        Self { vec, n, memo }
    }
}

impl DP {
    pub fn solve(&mut self, i: usize, j: usize) -> Vec<char> {
        if i > j || j > self.n { return vec![]; }

        if let Some(ret) = &self.memo[i][j] {
            return ret.clone(); // cached
        }

        let ret = self.solve_inner(i, j);
        self.memo[i][j] = Some(ret.clone());
        ret
    }

    fn solve_inner(&mut self, i: usize, j: usize) -> Vec<char> {
        if i >= j || i >= self.n { return vec![]; }

        let mut ret = Vec::with_capacity(j - i);
        ret.push(self.vec[i]);
        ret.extend(self.solve(i + 1, j)); // passthrough

        for window_size in 1..(j - i) {
            for (window_id, window_end_ptr) in (i..=j)
                .step_by(window_size)
                .skip(2)
                .enumerate() {
                let window_start_ptr = window_end_ptr - window_size;
                if &self.vec[window_start_ptr..window_end_ptr]
                    != &self.vec[i..(i + window_size)] {
                    break;
                }

                let window_count = window_id + 2;
                let mut _ret = window_count.to_string().chars().collect::<Vec<_>>();
                _ret.push('[');
                _ret.extend(self.solve(i, i + window_size));
                _ret.push(']');
                _ret.extend(self.solve(window_end_ptr, j));

                if _ret.len() >= ret.len() {
                    continue;
                }

                std::mem::swap(&mut ret, &mut _ret);
            }
        }

        ret
    }
}

impl Solution {
    pub fn encode(s: String) -> String {
        let n = s.len();
        DP::new(s)
            .solve(usize::MIN, n)
            .into_iter()
            .collect::<String>()
    }
}
```