# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1932846/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1932846/)

---

```
impl Solution {
    pub fn largest_integer(num: i32) -> i32 {
        use std::collections::BinaryHeap;

        let mut num = num as usize;
        let mut evens_odds = [BinaryHeap::new(), BinaryHeap::new()];
        let mut digits = Vec::new();

        while num > 0 {
            let dig = num % 10;
            evens_odds[dig % 2].push(dig as i32);
            digits.push(dig);
            num /= 10;
        }

        digits
            .iter()
            .rev()
            .fold(0, |res, &dig| 10 * res + evens_odds[dig % 2].pop().unwrap())
    }
}
```