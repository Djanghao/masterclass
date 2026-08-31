# Rust 0ms 🔥 2.40Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/6116968/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/6116968/)

---

# Complexity
- Time complexity:  $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn can_transform(start: String, result: String) -> bool {
        start.chars()
        .zip(result.chars())
        .fold((false, 0, 0, true), 
        |(ans, mut l, mut r, mut f), (cur, goal)| {
            match cur {
                'R' if l > 0 => f = false,
                'R' => r += 1,
                _ => (),
            };
            match goal {
                'L' if r > 0 => f = false,
                'L' => l += 1,
                'R' if r == 0 => f = false,
                'R' => r -= 1,
                _ => (),
            };
            match cur {
                'L' if l == 0 => f = false,
                'L' => l -= 1,
                _ => (),
            };
            if f {(l == 0 && r == 0, l, r, f)} else {(false, l, r, f)}
        }).0
    }
}
```