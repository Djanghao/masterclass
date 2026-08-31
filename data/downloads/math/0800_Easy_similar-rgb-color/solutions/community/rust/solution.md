# ✅ [Rust] 0 ms, yes it's a one-liner (with detailed comments)

**Author:** iablokov
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/2705863/](https://leetcode.com/problems/similar-rgb-color/solutions/2705863/)

---

This [**solution**](https://leetcode.com/submissions/detail/822938382/) employs a smart trick with rounded division. It demonstrated **0 ms runtime (100.00%)** and used **2.0 MB memory (100.00%)**. Time complexity is constant: **O(1)**. Space complexity is constant: **O(1)**. Detailed comments are provided.

Please check the analogous solution in [**Python**](https://leetcode.com/problems/similar-rgb-color/discuss/2705272/Python-fast-two-liner-%2B-bonus-(with-detailed-comments)).

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::str;
use std::iter::once;

impl Solution 
{
    pub fn similar_rgb(color: String) -> String 
    {
        // all colors allowing a shorthand (0x11,0x22,...) notation 
        // are multiples of 0x11 that is 17 in decimal format;
        // the idea here is to find the closest one of them
        // that is achieved by rounded division by 17;
        // rounded division of integers is tricky in Rust, thus,
        // I used the following recipe: (a+(b>>1))/b
        color.as_bytes()[1..7]
             .chunks(2)
             .map(|ch| i32::from_str_radix(str::from_utf8(ch).unwrap(), 16).unwrap())
             .map(|n| format!("{:x}{:x}", (n + (17>>1)) / 17, (n + (17>>1)) / 17))
             .fold(String::from("#"), |s,it| s+&it)
    }
}
```