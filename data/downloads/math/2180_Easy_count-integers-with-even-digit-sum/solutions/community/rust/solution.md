# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1789773/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1789773/)

---

```
impl Solution {
    pub fn count_even(num: i32) -> i32 {
        let sum_dig_is_even = |mut x: i32| -> bool {
            let mut s = 0;
            while x > 0 {
                s += x % 10;
                x /= 10;
            }
            s % 2 == 0
        };
        (1..=num).filter(|&x| sum_dig_is_even(x)).count() as _
    }
}
```