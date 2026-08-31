# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/3159938/](https://leetcode.com/problems/allocate-mailboxes/solutions/3159938/)

---

# Code
```
impl Solution {
    pub fn min_distance(houses: Vec<i32>, k: i32) -> i32 {
        let mut houses = houses;
        houses.sort();
        let n = houses.len();
        let mut dp = vec![vec![0; n]; n];
        for (i, item) in dp.iter_mut().enumerate().take(n) {
            for (j, item0) in item.iter_mut().enumerate().take(n).skip(i) {
                let mid = (i + j) / 2;
                for k in i..=j {
                    *item0 += (houses[k] - houses[mid]).abs();
                }
            }
        }
        let mut dp2 = vec![vec![0; n]; k as usize];
        for i in 0..n {
            dp2[0][i] = dp[0][i];
        }
        for i in 1..k as usize {
            for j in i..n {
                let mut min = std::i32::MAX;
                for k in i - 1..j {
                    min = min.min(dp2[i - 1][k] + dp[k + 1][j]);
                }
                dp2[i][j] = min;
            }
        }
        dp2[k as usize - 1][n - 1]
    }
}
```