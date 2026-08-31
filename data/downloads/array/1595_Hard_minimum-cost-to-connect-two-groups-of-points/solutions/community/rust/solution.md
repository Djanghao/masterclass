# DP

**Author:** emilHof
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/4191073/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/4191073/)

---

# Complexity
Let $m = s_1$ and $n = s_2$.
Time complexity: $\\Theta(m \	imes n + m \	imes 2^n) \\approx \\Theta(m2^n)$
Space complexity: $\\Theta(2^n)$

# Code
```
impl Solution {
    pub fn connect_two_groups(cost: Vec<Vec<i32>>) -> i32 {
        let (s1, s2) = (cost.len(), cost[0].len());

        let min = (0..s2).map(|j| (0..s1).fold(i32::MAX, |acc, i| acc.min(cost[i][j])))
            .collect::<Vec<_>>();

        let mut dp = (0..2_usize.pow(s2 as u32)).map(|m| {
            let mut cost = 0;
            for b in 0..s2 {
                if (m >> b) & 1 == 1 { continue };
                cost += min[b];
            }
            cost
        }).collect::<Vec<_>>();

        for i in (0..s1) {
            let mut new = vec![i32::MAX; 2_usize.pow(s2 as u32)];
            for m in (0..2_usize.pow(s2 as u32)) {
                for b in (0..s2) {
                    new[m] = new[m].min(cost[i][b] + dp[m | (1 << b)]);
                }
            }
            dp = new;
        }
        dp[0]
    }
}
```