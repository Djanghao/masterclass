# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/2854006/](https://leetcode.com/problems/find-the-pivot-integer/solutions/2854006/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```rs
impl Solution {
    pub fn pivot_integer(n: i32) -> i32 {
        // total sum: 1 + 2 + ... + n - 1 + n
        let mut s1 = n * (n + 1) / 2;
        // running sum
        let mut s2 = 0;
        for i in 1 .. n + 1 {
            // add i to s2 (prefix sum)
            s2 += i;
            // if both sum is same, then i is the pivot integer
            if s1 == s2 {
                return i;
            }
            // substract i from s1 (suffix sum)
            s1 -= i;
        }
        -1
    }
}
```