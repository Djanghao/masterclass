# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5283029/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5283029/)

---


```
impl Solution {
    pub fn max_total_reward(reward_values: Vec<i32>) -> i32 {
        let mut reward_values = reward_values;
        reward_values.sort_unstable();
        let mut dp = vec![0; 50000];
        let sz = reward_values.len();
        for i in 0..sz {
            let tmp_i = reward_values[i];
            if i == 0 || reward_values[i - 1] != tmp_i {
                let lim = tmp_i.min(reward_values[sz - 1] - tmp_i);
                for x in 0..lim {
                    let tmp = dp[x as usize];
                    dp[(tmp_i + tmp) as usize] = tmp_i + tmp;
                }
            }
        }
        reward_values[sz - 1] + *dp.iter().take(reward_values[sz - 1] as usize).max().unwrap()
    }
}
```