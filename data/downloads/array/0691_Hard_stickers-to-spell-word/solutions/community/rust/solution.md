# rust: bitmasking solution

**Author:** happysings
**Votes:** 0
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/4891273/](https://leetcode.com/problems/stickers-to-spell-word/solutions/4891273/)

---

# Code
```rust
impl Solution {
    pub fn min_stickers(stickers: Vec<String>, target: String) -> i32 {
        let n = target.len();
        let mut dp = vec![i32::MAX; 1 << n];
        dp[0] = 0;
        let t = target.chars().collect::<Vec<_>>();
        for state in 0..(1 << n) {
            if dp[state] == i32::MAX {
                continue;
            }
            for sticker in &stickers {
                let mut now = state;
                for c in sticker.chars() {
                    for i in 0..n {
                        if ((now >> i) & 1) == 1 {
                            continue;
                        }
                        if t[i] == c {
                            now |= 1 << i;
                            break;
                        }
                    }
                }
                if dp[now] == i32::MAX || dp[now] > dp[state] + 1 {
                    dp[now] = dp[state] + 1;
                }
            }
        }
        if dp[(1 << n) - 1] == i32::MAX {
            -1
        } else {
            dp[(1 << n) - 1]
        }
    }
}
```