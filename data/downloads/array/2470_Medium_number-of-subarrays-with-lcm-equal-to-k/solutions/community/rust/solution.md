# 🔥 [LeetCode The Hard Way] 🔥 Rust Solution

**Author:** tr1nity
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2810071/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2810071/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```rs
use std::cmp::{max, min};

fn gcd(a: i32, b: i32) -> i32 {
    match ((a, b), (a & 1, b & 1)) {
        ((x, y), _) if x == y => y,
        ((0, x), _) | ((x, 0), _) => x,
        ((x, y), (0, 1)) | ((y, x), (1, 0)) => gcd(x >> 1, y),
        ((x, y), (0, 0)) => gcd(x >> 1, y >> 1) << 1,
        ((x, y), (1, 1)) => {
            let (x, y) = (min(x, y), max(x, y));
            gcd((y - x) >> 1, x)
        }
        _ => unreachable!(),
    }
}

fn lcm(a: i32, b: i32) -> i32 {
    a * b / gcd(a, b)
}

impl Solution {
    pub fn subarray_lcm(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let mut ans = 0;
        for i in 0 .. n {
            let mut l = 1;
            for j in i .. n {
                l = lcm(l, nums[j]);
                if l == k {
                    ans += 1;
                }
                if l > k {
                    break;
                }
            }
        }
        ans
    }
}
```