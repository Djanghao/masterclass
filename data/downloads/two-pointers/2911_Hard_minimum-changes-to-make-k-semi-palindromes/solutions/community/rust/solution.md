# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4200253/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4200253/)

---

```
impl Solution {
    pub fn minimum_changes(s: String, k: i32) -> i32 {
        Self::_minimum_changes(&s, k as usize) as _
    }

    fn _minimum_changes(s: &str, k: usize) -> i64 {
        let mut memo = vec![vec![0_i64; 101]; 201];
        let mut memo_s = vec![vec![0_i64; 201]; 201];

        for (i, memo_s_i) in memo_s.iter_mut().enumerate().take(s.len()) {
            for (len, memo_s_i_len) in memo_s_i.iter_mut().enumerate().take(s.len() + 1).skip(2) {
                if i + len > s.len() {
                    break;
                }
                *memo_s_i_len = std::i32::MAX as i64;
                for d in 1..=len / 2 {
                    if *memo_s_i_len <= 0 {
                        break;
                    }

                    if len % d == 0 {
                        let mut res_d = 0_i64;
                        for offset in 0..d {
                            let mut l = i + offset;
                            let mut r = i + offset + len - d;
                            while l < r {
                                res_d += (s.as_bytes()[l] != s.as_bytes()[r]) as i64;
                                l += d;
                                r -= d;
                            }
                        }
                        *memo_s_i_len = (*memo_s_i_len).min(res_d);
                    }
                }
            }
        }
        Self::dfs(0, k, s, &mut memo, &mut memo_s)
    }

    fn dfs(i: usize, k: usize, s: &str, memo: &mut Vec<Vec<i64>>, memo_s: &mut Vec<Vec<i64>>) -> i64 {
        if i >= s.len() || k == 0 {
            return if i == s.len() && k == 0 { 0 } else { 10_000 };
        }
        if memo[i][k] == 0 {
            memo[i][k] = 10_000;
            for len in 2..=s.len() {
                if i + len <= s.len() {
                    memo[i][k] = memo[i][k].min(1 + memo_s[i][len] + Self::dfs(i + len, k - 1, s, memo, memo_s));
                }
            }
        }
        memo[i][k] - 1
    }
}

```