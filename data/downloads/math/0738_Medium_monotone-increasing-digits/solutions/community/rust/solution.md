# Rust Solution

**Author:** Spxg
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/4931192/](https://leetcode.com/problems/monotone-increasing-digits/solutions/4931192/)

---

# Code
```
impl Solution {
    pub fn monotone_increasing_digits(n: i32) -> i32 {
        let mut n = n;
        let mut mul = 1;
        let mut result = 0;
        let mut prev = 9;
        while n > 0 {
            let digit = n % 10;
            (result, prev) = if digit <= prev {
                (digit * mul + result, digit)
            } else {
                (digit * mul - 1, digit - 1)
            };
            mul *= 10;
            n /= 10;
        }
        result
    }
}
```