# Rust 3ms 🔥 2.12Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5425588/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5425588/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust
impl Solution {
    pub fn number_of_substrings(s: String) -> i32 {
        s.chars()
        .enumerate()
        .fold((-1, -1, -1, 0),
        |(a, b, c, m), (i, ch)| {
            let i = i as i32;
            match ch {
                'a' => (i, b, c, m + i.min(b).min(c) + 1),
                'b' => (a, i, c, m + i.min(a).min(c) + 1),
                 _  => (a, b, i, m + i.min(a).min(b) + 1),
            }
        }).3
    }
}
```