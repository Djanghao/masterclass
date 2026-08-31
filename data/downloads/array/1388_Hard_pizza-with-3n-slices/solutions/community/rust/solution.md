# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/3107696/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/3107696/)

---

# Code
```
impl Solution {
    pub fn max_size_slices(slices: Vec<i32>) -> i32 {
        fn max_sum(slices: &Vec<i32>, n: usize) -> i32 {
            let m = slices.len();
            let mut dp = vec![vec![0; n + 1]; m + 1];
            for i in 1..=m {
                for j in 1..=n {
                    if i == 1 {
                        dp[i][j] = slices[0];
                    } else {
                        dp[i][j] = std::cmp::max(dp[i - 1][j], dp[i - 2][j - 1] + slices[i - 1]);
                    }
                }
            }
            dp[m][n]
        }

        let m = slices.len();
        let n = m / 3;
        let slices1 = slices[0..m - 1].to_vec();
        let slices2 = slices[1..m].to_vec();
        let val1 = max_sum(&slices1, n);
        let val2 = max_sum(&slices2, n);
        std::cmp::max(val1, val2)
    }
}
```