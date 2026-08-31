# 🔥 [LeetCode The Hard Way] 🔥 Rust - Iterate and Swap

**Author:** tr1nity
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/2809701/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/2809701/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```rs
impl Solution {
    pub fn are_almost_equal(s1: String, s2: String) -> bool {
        let n = s1.len();
        let mut last = usize::MAX;
        let mut c1: Vec<_> = s1.chars().collect();
        let c2: Vec<_> = s2.chars().collect();
        for i in 0 .. n { 
            if c1[i] != c2[i] {
                if last == usize::MAX {
                    last = i;
                } else {
                    c1.swap(i, last);
                    return c1 == c2;
                }
            }
        }
        c1 == c2
    }
}
```