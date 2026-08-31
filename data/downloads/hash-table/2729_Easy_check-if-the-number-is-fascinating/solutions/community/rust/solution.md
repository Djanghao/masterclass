# Idiomatic Rust | 0ms

**Author:** h1410101
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5151524/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5151524/)

---

Time: $O(\\log n)$ | $0$ms
Space: $O(1)$ | $2.2$mb

```
use std::iter;

impl Solution {
    pub fn is_fascinating(n: i32) -> bool {
        const GET_MASK_FOR_DIGIT: fn(i32) -> i32 = |digit| 1 << digit;
        const FASCINATING_MASK: i32 = 0b1111111110; // digits 1 to 9, but not 0

        fn get_digits_iter(x: i32) -> impl Iterator<Item = i32> {
            iter::successors(Some(x), |&x| Some(x / 10))
                .take_while(|&x| x != 0)
                .map(|x| x % 10)
        }

        let result = (1..=3).map(|i| i*n)
            .flat_map(get_digits_iter)
            .map(GET_MASK_FOR_DIGIT)
            .try_fold(0, |acc, mask| {
                match acc & mask {
                    0 => Ok(acc | mask),
                    _ => Err(()),
                }
            });

        match result {
            Ok(mask) => mask == FASCINATING_MASK,
            Err(_) => false,
        }
    }
}
```