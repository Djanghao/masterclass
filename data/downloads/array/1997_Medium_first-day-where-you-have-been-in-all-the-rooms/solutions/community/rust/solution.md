# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/3242780/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/3242780/)

---

# Code
```
impl Solution {
    pub fn first_day_been_in_all_rooms(next_visit: Vec<i32>) -> i32 {
        let mod_num = 1_000_000_007;
        let mut dp = vec![0_i64; next_visit.len() + 1];
        for i in 1..next_visit.len() {
            dp[i] = (2 + 2 * dp[i - 1] - dp[next_visit[i - 1] as usize] + mod_num) % mod_num;
        }
        dp[next_visit.len() - 1] as _
    }
}
```