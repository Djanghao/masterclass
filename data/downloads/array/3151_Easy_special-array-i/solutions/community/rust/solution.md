# 🏆 Super Easy One-liner in Rust || 0ms & beats 100%

**Author:** rutsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-i/solutions/6128597/](https://leetcode.com/problems/special-array-i/solutions/6128597/)

---

# \uD83D\uDCA1 Intuition
Just check all pairs for different parity in funtional style. Use `windows` & `fold` from [std::slice](https://doc.rust-lang.org/std/primitive.slice.html).

# \uD83E\uDDE0 Code
```rust []
impl Solution {
    pub fn is_array_special(nums: Vec<i32>) -> bool {
        nums.windows(2).fold(true, |acc, w| acc && w[0]%2 != w[1]%2)
    }
}
```


# \u23F1\uFE0F Complexity
- Time complexity: $O(n)$

- Space complexity: $O(1)$
