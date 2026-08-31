# Rust | DP | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590371/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590371/)

---

EDIT 2022-09-18: With 20-20 hindsight, this is the clean functional-style solution that I would have wanted to come up with at 4:30 AM during the contest :D :

```
impl Solution {
    pub fn longest_continuous_substring(s: String) -> i32 {
        s.bytes()
            .fold((1, 0, 0), |(max, len, prev), curr| {
                if curr == prev + 1 {
                    (max.max(len + 1), len + 1, curr)
                } else {
                    (max, 1, curr)
                }
            })
            .0
    }
}
```

**Original Post**

This is my unrevised submission for the 2022-09-18 Weekly Contest 311. We extend a window as long as possible. If the previous character comes before the current in the alphabet, we can extend the window by one. If not, we reset the window to one, since single letters are a substring of length one.

Comment: I knew I should reset the window to one, but did the typo to reset it to zero anyway when I submitted, and couldn't understand what I had missed. \xAF\\_(\u30C4)_/\xAF

```rust
impl Solution {
    pub fn longest_continuous_substring(s: String) -> i32 {
        let mut max = 1;
        let mut curr = 1;
        let s = s.as_bytes();
        for i in 1..s.len() {
            if s[i] == s[i-1] + 1 {
                curr += 1;
            } else {
                curr = 1;
            }
            max = max.max(curr);
        }
        max as _
    }
}
```