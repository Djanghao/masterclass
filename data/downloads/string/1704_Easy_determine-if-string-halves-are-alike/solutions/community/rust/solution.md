# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 7
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/2864628/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/2864628/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```rs
impl Solution {
    pub fn halves_are_alike(s: String) -> bool {
        // count the number of vowels in the given string
        let go = |s: &str| s.chars().filter(|&c| "aeiouAEIOU".contains(c)).count();
        // check if the count of the first half is same as that of the second half
        go(&s[..s.len() / 2]) == go(&s[s.len() / 2..])
    }
}
```