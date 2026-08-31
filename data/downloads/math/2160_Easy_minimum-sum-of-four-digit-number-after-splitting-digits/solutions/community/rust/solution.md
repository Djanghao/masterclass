# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1749558/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1749558/)

---

1. Solution with ```if let```
```
impl Solution {
    pub fn minimum_sum(mut num: i32) -> i32 {
        let mut digits = Vec::with_capacity(4);

        (0..4).for_each(|_| {
            digits.push(num % 10);
            num /= 10;
        });

        digits.sort_unstable();

        if let &[d1, d2, d3, d4] = digits.as_slice() {
            return 10 * d1 + 10 * d2 + d3 + d4;
        }
        unreachable!();
    }
}
```
2. Solution with ```fold```
```
impl Solution {
    pub fn minimum_sum(mut num: i32) -> i32 {
        let mut digits = Vec::with_capacity(4);

        (0..4).for_each(|_| {
            digits.push(num % 10);
            num /= 10;
        });

        digits.sort_unstable();
        digits
            .into_iter()
            .enumerate()
            .fold(0, |sum, (i, x)| sum + x * if i < 2 { 10 } else { 1 })
    }
}
```