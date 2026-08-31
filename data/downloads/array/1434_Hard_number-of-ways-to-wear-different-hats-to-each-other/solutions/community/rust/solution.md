# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/3112072/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/3112072/)

---

# Code
```
impl Solution {
    pub fn number_ways(hats: Vec<Vec<i32>>) -> i32 {
        fn dfs(h2p: &Vec<Vec<usize>>, all_mask: i32, hat: usize, assigned_people: i32, dp: &mut Vec<Vec<i32>>) -> i32 {
            if assigned_people == all_mask {
                return 1;
            }
            if hat > 40 {
                return 0;
            }
            if dp[hat][assigned_people as usize] != -1 {
                return dp[hat][assigned_people as usize];
            }
            let mut ans = dfs(h2p, all_mask, hat + 1, assigned_people, dp);
            for &p in &h2p[hat] {
                if ((assigned_people >> p) & 1) == 1 {
                    continue;
                }
                ans += dfs(h2p, all_mask, hat + 1, assigned_people | (1 << p), dp);
                ans %= 1_000_000_007;
            }
            dp[hat][assigned_people as usize] = ans;
            ans
        }

        let n = hats.len();
        let mut h2p = vec![vec![]; 41];
        for (i, item) in hats.iter().enumerate().take(n) {
            for &hat in item {
                h2p[hat as usize].push(i);
            }
        }
        let mut dp = vec![vec![-1; 1024]; 41];
        dfs(&h2p, (1 << n) - 1, 1, 0, &mut dp)
    }
}
```