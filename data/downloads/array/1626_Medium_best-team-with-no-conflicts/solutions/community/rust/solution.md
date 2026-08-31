# Rust + DP

**Author:** unknown-
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120881/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120881/)

---

```
impl Solution {
    pub fn best_team_score(scores: Vec<i32>, ages: Vec<i32>) -> i32 {
        let mut idx: Vec<usize> = (0..scores.len()).collect();
        idx.sort_unstable_by(|&a, &b| if ages[a] == ages[b] {
            scores[a].cmp(&scores[b])
        } else {
            ages[a].cmp(&ages[b])
        });
        //println!("{:?}", idx);

        let mut dp = vec![0; scores.len()];
        let mut ans = -1;
        for i in 0..scores.len() {
            let t = scores[idx[i]];
            dp[i] = t;
            for j in 0..i {
                if scores[idx[j]] <= t {
                    dp[i] = dp[i].max(dp[j] + t);
                }
            }
            ans = ans.max(dp[i]);
        }

        ans
    }
}
```