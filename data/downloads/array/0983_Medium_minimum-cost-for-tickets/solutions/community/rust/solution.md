# Rust | Concise Bottom-Up DP | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3351961/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3351961/)

---

# Intuition
A typical DP problem where we look ahead 1, 7 and 30 days to find the minimum cost for the subproblems.

# Approach
To make it easy for ourselves, we allocate a `dp` array that is 30 days longer than necessary, to simplify boundary conditions.

For convenience we also mark the travel days in the `dp` array with 1. Since we need to traverse `dp` anyway, in this way we don't have to bother with `days` anymore.

After that it's plain DP, solving the subproblems in reverse order to get the minimum cost on day 1. I used some nifty tricks here to keep the logic concise.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn mincost_tickets(days: Vec<i32>, costs: Vec<i32>) -> i32 {
        let mut dp = [0; 396];
        for day in days {
            dp[day as usize] = 1;
        }
        for day in (1..=365).rev() {
            dp[day] = (dp[day] == 1).then(|| [1, 7, 30].iter().zip(&costs).map(|(d, c)| dp[day + d] + c).min().unwrap()).unwrap_or(dp[day + 1]);
        }
        dp[1]
    }
}
```