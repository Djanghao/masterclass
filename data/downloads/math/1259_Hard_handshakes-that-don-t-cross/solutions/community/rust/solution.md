# Rust | Easy Top-down DP

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3692190/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3692190/)

---

# Intuition

Choose a pair of handshake; that handshake will split the population into two groups! Recursively solve the problem for each subgroup, and multiply them.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
const MOD: usize = 1_000_000_007;

pub struct DP {
    memo: Vec<Option<usize>>,
}

impl DP {
    pub fn new(count: usize) -> Self {
        let memo = vec![None; count + 1];

        Self { memo }
    }
}

impl DP {
    pub fn solve(&mut self, count: usize) -> usize {
        if count >= self.memo.len() { return 0; } // out-of-bound
        if let Some(ret) = self.memo[count] { return ret; } // cached

        let ret = self.solve_inner(count);
        self.memo[count] = Some(ret);
        ret
    }

    fn solve_inner(&mut self, count: usize) -> usize {
        if count < 1 { return 1; } // base case
        if count % 2 > 0 { return 0; } // odd number, impossible

        let mut ret = usize::MIN;
        for mid in 1..count {
            let mut _ret = 1usize;
            {
                let inner_count = mid - 1;
                _ret *= self.solve(inner_count);

                let outer_count = count - mid - 1;
                _ret *= self.solve(outer_count);
            }
            _ret %= MOD;

            ret += _ret;
            ret %= MOD;
        }

        ret
    }
}

impl Solution {
    pub fn number_of_ways(num_people: i32) -> i32 {
        let num_people = num_people as usize;
        let mut dp = DP::new(num_people);
        dp.solve(num_people) as i32
    }
}
```