# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/2969773/](https://leetcode.com/problems/super-egg-drop/solutions/2969773/)

---

# Code
```
impl Solution {
    pub fn super_egg_drop(k: i32, n: i32) -> i32 {
        let k = k as usize;
        let n = n as usize;

        let mut dp: Vec<Vec<i64>> = vec![vec![0; n + 1]; k + 1];
        let mut moves = 1;

        while moves <= n {
            for eggs in 1..=k {
                dp[eggs][moves] = 1 + dp[eggs - 1][moves - 1] + dp[eggs][moves - 1];
            }
            if dp[k][moves] >= n as i64 {
                break;
            }
            moves += 1;
        }

        moves as i32
    }
}
```