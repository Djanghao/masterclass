# Rust 1D DP, swap

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/4472767/](https://leetcode.com/problems/valid-palindrome-iii/solutions/4472767/)

---

```
impl Solution {
    pub fn is_valid_palindrome(s: String, k: i32) -> bool {
        let s = s.as_bytes();
        let N = s.len();
        let mut prev = vec![0; N];
        let mut dp = vec![0; N];

        for beg in (0..N).rev() {
            dp[beg] = 1;
            for end in (beg + 1)..N {
                dp[end] = match s[beg] == s[end] {
                    true => 2 + prev[end - 1],
                    false => dp[end - 1].max(prev[end]),
                };
            }
            std::mem::swap(&mut prev, &mut dp);
        }
        prev[N - 1] + k >= N as i32
    }
}

```