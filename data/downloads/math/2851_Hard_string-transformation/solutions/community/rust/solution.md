# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transformation/solutions/4181632/](https://leetcode.com/problems/string-transformation/solutions/4181632/)

---

```
impl Solution {
    const M: i64 = 1_000_000_007;

    fn add(x: i64, y: i64) -> i64 {
        if (x + y) >= Solution::M {
            x + y - Solution::M
        } else {
            x + y
        }
    }

    fn mul(x: i64, y: i64) -> i64 {
        x * y % Solution::M
    }

    fn getz(s: &str) -> Vec<i64> {
        let n = s.len();
        let mut z = vec![0_i64; n];
        let mut left = 0;
        let mut right = 0;
        for i in 1..n {
            if i <= right && z[i - left] <= right as i64 - i as i64 {
                z[i] = z[i - left];
            } else {
                z[i] = std::cmp::max(0, right as i64 - i as i64 + 1);
                while i as i64 + z[i] < n as i64 && s.as_bytes()[i + z[i] as usize] == s.as_bytes()[z[i] as usize] {
                    z[i] += 1;
                }
            }
            if i as i64 + z[i] - 1 > right as i64 {
                left = i;
                right = i + z[i] as usize - 1;
            }
        }
        z
    }

    fn mul2(a: &Vec<Vec<i64>>, b: &[Vec<i64>]) -> Vec<Vec<i64>> {
        let m = a.len();
        let n = a[0].len();
        let p = b[0].len();
        let mut r = vec![vec![0; p]; m];
        for i in 0..m {
            for (j, b_j) in b.iter().enumerate().take(n) {
                for (k, &b_j_k) in b_j.iter().enumerate().take(p) {
                    r[i][k] = Solution::add(r[i][k], Solution::mul(a[i][j], b_j_k));
                }
            }
        }
        r
    }

    fn pow(a: &Vec<Vec<i64>>, y: i64) -> Vec<Vec<i64>> {
        let n = a.len();
        let mut r = vec![vec![0; n]; n];
        for (i, r_i) in r.iter_mut().enumerate().take(n) {
            r_i[i] = 1;
        }
        let mut x = a.clone();
        let mut y = y;
        while y > 0 {
            if y & 1 == 1 {
                r = Solution::mul2(&r, &x);
            }
            x = Solution::mul2(&x, &x);
            y >>= 1;
        }
        r
    }

    pub fn number_of_ways(s: String, t: String, k: i64) -> i32 {
        let n = s.len() as i64;
        let dp = &Solution::pow(&vec![vec![0_i64, 1], vec![n - 1, n - 2]], k)[0];
        let mut s = s;
        s.push_str(&t);
        s.push_str(&t);
        let z = Solution::getz(&s);
        let m = n + n;
        let mut r = 0;
        for i in n..m {
            if z[i as usize] >= n {
                r = Solution::add(r, dp[if (i - n) == 0 { 0 } else { 1 }]);
            }
        }
        r as _
    }
}
```