# 🔥 [LeetCode The Hard Way] 🔥 Rust - Floyd's Cycle-Finding Algorithm

**Author:** tr1nity
**Votes:** 7
**Link:** [https://leetcode.com/problems/happy-number/solutions/2809626/](https://leetcode.com/problems/happy-number/solutions/2809626/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```rs
impl Solution {
    fn nxt(mut n: i32) -> i32 {
        let mut res = 0;
        while n > 0 {
            let d = n % 10;
            res += d * d;
            n /= 10;
        }
        res
    }
    
    pub fn is_happy(n: i32) -> bool {
        let mut slow = n;
        let mut fast = Solution::nxt(n);
        while fast != 1 && slow != fast {
            slow = Solution::nxt(slow);
            fast = Solution::nxt(Solution::nxt(fast));
        }
        return fast == 1;
    }
}
```