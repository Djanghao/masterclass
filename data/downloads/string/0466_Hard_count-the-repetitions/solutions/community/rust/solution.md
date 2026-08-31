# Just a runnable solution.

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/2858977/](https://leetcode.com/problems/count-the-repetitions/solutions/2858977/)

---

# Code
```
impl Solution {
    pub fn get_max_repetitions(s1: String, n1: i32, s2: String, n2: i32) -> i32 {
        let m = s1.len();
        let n = s2.len();
        let mut x = vec![vec![0; n]; m];
        let mut y = vec![vec![0; n]; m];
        let (mut i, mut j) = (0, 1);
        loop {
            i += 1;
            let ii = (i % m as i32) as usize;
            let jj = (j % n as i32) as usize;
            let xx = x[ii][jj];
            let yy = y[ii][jj];
            x[ii][jj] = i;
            y[ii][jj] = j;
            if xx > 0 {
                let k = (n1 * m as i32 - i) / (i - xx);
                i += k * (i - xx);
                j += k * (j - yy);
            }
            if i == n1 * m as i32 {
                return j / (n * n2 as usize) as i32;
            }
            if s1.chars().nth(ii) == s2.chars().nth(jj) {
                j += 1;
            }
        }
    }
}
```