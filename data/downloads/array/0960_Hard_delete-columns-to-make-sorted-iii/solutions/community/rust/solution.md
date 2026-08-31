# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3001245/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3001245/)

---

# Code
```
impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        let m = strs.len();
        let n = strs[0].len();
        let mut res = n as i32 - 1;
        let mut dp = vec![1; n];
        for j in 0..n {
            for i in 0..j {
                let mut k = 0;
                while k < m {
                    if strs[k].as_bytes()[i] > strs[k].as_bytes()[j] {
                        break;
                    }
                    k += 1;
                }
                if k == m && dp[i] + 1 > dp[j] {
                    dp[j] = dp[i] + 1;
                }
            }
            res = res.min(n as i32 - dp[j]);
        }
        res
    }
}
```