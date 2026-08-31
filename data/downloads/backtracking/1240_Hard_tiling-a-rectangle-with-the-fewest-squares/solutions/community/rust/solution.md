# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/3068765/](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/3068765/)

---

# Code
```
impl Solution {
    pub fn tiling_rectangle(n: i32, m: i32) -> i32 {
        use std::cmp::{max, min};

        fn solve(memo: &mut Vec<Vec<i32>>, n: i32, m: i32) -> i32 {
            if memo[n as usize][m as usize] != -1 {
                return memo[n as usize][m as usize];
            }
            if n == m {
                return 1;
            } else if n == 0 || m == 0 {
                return 0;
            } else if n == 1 {
                return m;
            }
            let nextn = min(n, m);
            let nextm = max(n, m) - nextn;
            let mut res = solve(memo, min(nextn, nextm), max(nextn, nextm)) + 1;
            for s in (1..nextn).rev() {
                let a = max((n - s).abs(), (m - s).abs());
                let b = min((n - s).abs(), (m - s).abs());
                for k in b..=a {
                    if k > n {
                        break;
                    }
                    let x = min((a - k).abs(), (b - k).abs());
                    let y = max((a - k).abs(), (b - k).abs());
                    let rect1 = solve(memo, min(b, m - k), max(b, m - k));
                    let rect2 = solve(memo, x, y);
                    let rect3 = solve(memo, min(n - k, a), max(n - k, a));
                    let ans = 2 + rect1 + rect2 + rect3;
                    res = min(res, ans);
                }
            }
            memo[n as usize][m as usize] = res;
            res
        }

        let (x, y) = (min(n, m), max(n, m));
        let mut memo = vec![vec![-1; y as usize + 1]; x as usize + 1];
        solve(&mut memo, x, y)
    }
}
```