# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/937853/](https://leetcode.com/problems/longest-mountain-in-array/solutions/937853/)

---

```rust
impl Solution {
    pub fn longest_mountain(a: Vec<i32>) -> i32 {
        let mut answer = 0;
        let mut i = 1;
        while i < a.len() {
            let (mut inc, mut dec) = (0, 0);
            while i < a.len() && a[i - 1] < a[i] {
                i += 1;
                inc += 1;
            }
            while i < a.len() && a[i - 1] > a[i] {
                i += 1;
                dec += 1;
            }
            if inc > 0 && dec > 0 {
                answer = std::cmp::max(answer, inc + dec + 1);
            }
            while i < a.len() && a[i - 1] == a[i] {
                i += 1;
            }
        }
        answer
    }
}
```