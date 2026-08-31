# Rust memoization

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/5164887/](https://leetcode.com/problems/maximize-grid-happiness/solutions/5164887/)

---

# Approach
Just following the Hints 1-3.
`prev` is a bitmask with size `n * 2`, and 2 bits are used to store the information of one cell: empty = '00', intro = '01', extro = '10'.

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn get_max_grid_happiness(m: i32, n: i32, introverts_count: i32, extroverts_count: i32) -> i32 {
        let mut dp = HashMap::<[i32; 5], i32>::new();
        let state = [0, 0, 0, introverts_count, extroverts_count];
        Self::memo(state, m, n, &mut dp)
    }

    fn memo(state: [i32; 5], m: i32, n: i32, dp: &mut HashMap<[i32; 5], i32>) -> i32 {
        if state[0] == m {
            return 0;
        }
        if let Some(&ans) = dp.get(&state) {
            return ans;
        }
        let i = state[0];
        let j = state[1];
        let prev = state[2];
        let intro = state[3];
        let extro = state[4];

        let above = (prev >> (j * 2)) & 3;
        let left = if j == 0 {0} else {(prev >> (j * 2 - 2)) & 3};
        let prev2 = prev - (above << (j * 2));

        let i2 = i + if j == n - 1 { 1 } else { 0 };
        let j2 = if j == n - 1 { 0 } else { j + 1 };
        let state2 = [i2, j2, prev2, intro, extro];
        let mut ans = Self::memo(state2, m, n, dp);

        let count = (above + 1) / 2 + (left + 1) / 2;
        let modify = [0, -30, 20];
        let extra = modify[above as usize] + modify[left as usize];
        if intro > 0 {
            let mut ans2 = 120 + modify[1] * count + extra;
            let state2 = [i2, j2, prev2 + (1 << (j * 2)), intro - 1, extro];
            ans2 += Self::memo(state2, m, n, dp);
            ans = ans.max(ans2);
        }
        if extro > 0 {
            let mut ans2 = 40 + modify[2] * count + extra;
            let state2 = [i2, j2, prev2 + (2 << (j * 2)), intro, extro - 1];
            ans2 += Self::memo(state2, m, n, dp);
            ans = ans.max(ans2);
        }
        dp.insert(state, ans);
        ans
    }
}
```