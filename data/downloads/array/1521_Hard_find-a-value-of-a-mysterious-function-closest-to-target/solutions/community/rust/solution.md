# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/3163703/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/3163703/)

---

# Code
```
impl Solution {
    pub fn closest_to_target(arr: Vec<i32>, target: i32) -> i32 {
        let len = arr.len();
        let mut tab = vec![vec![]; 30];
        for (i, &item0) in arr.iter().enumerate().take(len) {
            for (j, item) in tab.iter_mut().enumerate().take(30) {
                if (item0 >> j) & 1 == 1 {
                    item.push(i);
                }
            }
        }

        let mut dp = vec![0; len];
        let mut ans = (arr[0] - target).abs();
        for i in (0..len).rev() {
            for j in 0..30 {
                if (arr[i] >> j) & 1 == 0 {
                    while !tab[j].is_empty() && tab[j].last().unwrap() > &i {
                        dp[*tab[j].last().unwrap()] -= 1 << j;
                        tab[j].pop();
                    }
                }
            }
            dp[i] = arr[i];
            let mut l = i;
            let mut r = len;
            while l < r {
                let m = l + (r - l) / 2;
                if dp[m] > target {
                    l = m + 1;
                } else {
                    r = m;
                }
            }
            if l == len {
                ans = ans.min((target - dp[l - 1]).abs());
            } else if l == i {
                ans = ans.min((target - dp[l]).abs());
            } else {
                ans = ans.min((target - dp[l]).abs().min((target - dp[l - 1]).abs()));
            }
        }
        ans
    }
}
```