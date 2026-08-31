# Rust | 0ms | O(n) | beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/5388944/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/5388944/)

---

# Intuition


# Approach
When an 'X' is encountered, increment change count, and there are two more converts reamining for the next two indices. Keep decrementing remaining if its greater than 0 and increment change count only if remaining is 0.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn minimum_moves(s: String) -> i32 {
        let (mut ans, mut remaining) = (0, 0);
        for b in s.into_bytes() {
            if b == b'X' {
                if remaining == 0 {
                    ans += 1;
                    remaining = 3;
                }
            }
            if remaining > 0 {
                remaining -= 1;
            }
        }
        ans
    }
}
```