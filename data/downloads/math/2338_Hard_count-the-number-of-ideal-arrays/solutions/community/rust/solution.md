# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/3268313/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/3268313/)

---

# Code
```
impl Solution {
    pub fn ideal_arrays(n: i32, max_value: i32) -> i32 {
        use std::collections::HashMap;
        const MOD: i32 = 1_000_000_007;

        fn add(a: i32, b: i32) -> i32 {
            let mut r = a + b;
            if r >= MOD {
                r -= MOD;
            }
            r
        }

        fn mul(a: i32, b: i32) -> i32 {
            ((a as i64) * (b as i64) % (MOD as i64)) as i32
        }

        fn edges(max_value: usize) -> (Vec<i32>, Vec<Vec<(i32, i32)>>) {
            let mut divisor = vec![1; max_value + 1];
            for i in 2..=max_value {
                if divisor[i] != 1 {
                    continue;
                }
                for j in (i..=max_value).step_by(i) {
                    divisor[j] = i;
                }
            }
            let mut states = HashMap::new();
            let mut state_id = vec![0; max_value + 1];
            for (i, state_id_i) in state_id.iter_mut().enumerate().take(max_value + 1).skip(1) {
                let mut state = Vec::new();
                let mut n = i;
                while n != 1 {
                    let p = divisor[n];
                    let mut d = 0;
                    while n % p == 0 {
                        d += 1;
                        n /= p;
                    }
                    state.push(d);
                }
                state.sort();
                let size = states.len() as i32;
                let id = *states.entry(state).or_insert(size);
                *state_id_i = id;
            }
            let mut some_val_for_state = vec![0; states.len()];
            for i in (1..=max_value).rev() {
                let s = state_id[i] as usize;
                some_val_for_state[s] = i;
            }
            let mut edges = vec![HashMap::new(); states.len()];
            for i in 1..=max_value {
                for j in (2 * i..=max_value).step_by(i) {
                    let s = state_id[j] as usize;
                    if j == some_val_for_state[s] {
                        *edges[s].entry(state_id[i]).or_insert(0) += 1;
                    }
                }
            }
            let edges = edges
                .into_iter()
                .map(|map| map.into_iter().collect::<Vec<_>>())
                .collect::<Vec<_>>();
            (state_id, edges)
        }

        let max_value = max_value as usize;
        let (state_id, edges) = edges(max_value);
        let mut dp = vec![0; edges.len()];
        dp[0] = 1;
        for _ in 0..n {
            for i in (0..dp.len()).rev() {
                for &(to, cnt) in edges[i].iter() {
                    dp[i] = add(dp[i], mul(dp[to as usize], cnt));
                }
            }
        }
        let mut result = 0;
        for i in 1..=max_value {
            result = add(result, dp[state_id[i] as usize]);
        }
        result
    }
}
```