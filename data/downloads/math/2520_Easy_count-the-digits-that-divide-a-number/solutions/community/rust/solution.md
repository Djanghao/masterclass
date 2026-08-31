# [Rust] Simple 1-liner solution

**Author:** kohbis
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3016425/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3016425/)

---

```rust
impl Solution {
    pub fn count_digits(num: i32) -> i32 {
        num.to_string().bytes().filter(|x| num % (x - 48) as i32 == 0).count() as i32
    }
}
```