# Rust solution using formula

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/1071018/](https://leetcode.com/problems/arithmetic-slices/solutions/1071018/)

---

```rust
impl Solution {
    pub fn number_of_arithmetic_slices(a: Vec<i32>) -> i32 {
        let mut answer = 0;
        let mut n = 0;
        for i in 2..a.len() {
            if a[i] - a[i - 1] == a[i - 1] - a[i - 2] {
                n += 1;
            } else {
                answer += n * (n + 1) / 2;
                n = 0;
            }
        }
        answer + n * (n + 1) / 2
    }
}
```