# Rust dp solution

**Author:** williamcs
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/3150246/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/3150246/)

---

f[i][j] = 1 if i == j
            = 2 * f[i + 1][j - 1] + 2 if s[i] == s[j] no duplicate between i and j
            = 2 * f[i + 1][j - 1] + 1 if s[i] == s[j] one duplicate between i and j
            = 2 * f[i + 1][j - 1] - f[left + 1][right - 1] if s[i] == s[j] more than one duplicate between i and j
            = f[i + 1][j] + f[i][j - 1] - f[i + 1][j - 1] if s[i] != f[j]
```
impl Solution {
    pub fn count_palindromic_subsequences(s: String) -> i32 {
        let module: i64 = 1e9 as i64 + 7;
        let n = s.len();
        let chars: Vec<char> = s.chars().collect();
        let mut f = vec![vec![0 as i64; n]; n];

        for len in 1..n + 1 {
            for i in 0..n - len + 1 {
                let j = i + len - 1;

                if i == j {
                    f[i][j] = 1;
                } else {
                    if chars[i] == chars[j] {
                        let (mut left, mut right) = (i + 1, j - 1);

                        while left <= right && chars[left] != chars[i] {
                            left += 1;
                        }
                        while left <= right && chars[right] != chars[j] {
                            right -= 1;
                        }

                        if left > right {
                            f[i][j] = 2 * f[i + 1][j - 1] + 2;
                        } else if left == right {
                            f[i][j] = 2 * f[i + 1][j - 1] + 1;
                        } else {
                            f[i][j] = 2 * f[i + 1][j - 1] - f[left + 1][right - 1];
                        }
                    } else {
                        f[i][j] = f[i][j - 1] + f[i + 1][j] - f[i + 1][j - 1];
                    }
                }

                f[i][j] = (f[i][j] + module) % module;
            }
        }

        f[0][n - 1] as i32
    }
}
```