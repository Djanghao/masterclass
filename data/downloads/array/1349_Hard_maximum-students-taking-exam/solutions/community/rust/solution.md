# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/3100472/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/3100472/)

---

# Code
```
impl Solution {
    pub fn max_students(seats: Vec<Vec<char>>) -> i32 {
        let m = seats.len();
        let n = seats[0].len();
        let mut validity = vec![0; m + 1];
        for i in 0..m {
            let mut rowvalid = 0;
            for j in 0..n {
                if seats[i][j] == '.' {
                    rowvalid += 1 << j;
                }
            }
            validity[i + 1] = rowvalid;
        }
        let mut dp = vec![vec![-1; (1 << n) + 1]; m + 1];
        dp[0][0] = 0;
        for i in 1..=m {
            let valid = validity[i];
            for j in 0..(1 << n) {
                if (j & valid) != j {
                    continue;
                }
                if (j & (j >> 1)) != 0 {
                    continue;
                }
                for k in 0..(1 << n) {
                    if dp[i - 1][k] == -1 {
                        continue;
                    }
                    if (j & (k >> 1)) != 0 || (k & (j >> 1)) != 0 {
                        continue;
                    }
                    dp[i][j] = dp[i][j].max(dp[i - 1][k] + j.count_ones() as i32);
                }
            }
        }
        *dp[m].iter().max().unwrap()
    }
}
```