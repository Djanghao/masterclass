# Rust 2ms 🔥 2.04Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5263070/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5263070/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn minimum_chairs(s: String) -> i32 {
        s.chars()
        .fold((0, 0),
        |(m, cnt), c| match c {
            'E' => (m.max(cnt+1), cnt+1),
            _ => (m, cnt-1),
        }).0
    }
}
```