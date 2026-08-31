# Rust - Math

**Author:** idiotleon
**Votes:** 3
**Link:** [https://leetcode.com/problems/power-of-three/solutions/1179379/](https://leetcode.com/problems/power-of-three/solutions/1179379/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl1/lc0326)

<b>Problem List</b>
#Math - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/math)

```rust
/// @author: Leon
/// https://leetcode.com/problems/power-of-three/
/// Time Complexity:     O(`n` ^ (1 / 3))
/// Space Complexity:    O(1)
/// Reference:
/// https://leetcode.com/problems/power-of-three/discuss/77876/**-A-summary-of-all-solutions-(new-method-included-at-15:30pm-Jan-8th)/82291
/// https://leetcode.com/problems/power-of-three/discuss/77876/**-A-summary-of-all-solutions-(new-method-included-at-15%3A30pm-Jan-8th)
impl Solution {
    pub fn is_power_of_three(n: i32) -> bool {
        let mut n = n;
        if n > 1 {
            while n % 3 == 0 {
                n /= 3;
            }
        }
        n == 1
    }
}
```