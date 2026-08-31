# Rust 7ms 🔥 2.77Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5436998/](https://leetcode.com/problems/alternating-groups-ii/solutions/5436998/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn number_of_alternating_groups(colors: Vec<i32>, k: i32) -> i32 {
        (0..(colors.len() + k as usize))
        .fold((0, 1, colors[0] == 1, colors.len(), colors.len() + k as usize-1),
        |(mut ans, mut cnt, mut prev, n, last), i| {
            if i == last || prev == (colors[i%n] == 1) {
                (ans + 0.max(cnt - k+1), 1, colors[i%n] == 1, n, last)
            } else {
                (ans, cnt+1, colors[i%n] == 1, n, last)
            }
        }).0
    }
}
```