# Rust simple brute-force math

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/1383384/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/1383384/)

---

```
impl Solution {
    pub fn get_no_zero_integers(n: i32) -> Vec<i32> {
        let test_zero_in = |mut x: i32| -> bool {
            while x > 0 {
                match x % 10 {
                    0 => return true,
                    _ => x /= 10,
                };
            }
            false
        };

        let mut a = 1;
        while test_zero_in(a) || test_zero_in(n - a) {
            a += 1;
        }
        vec![a, n - a]
    }
}
```