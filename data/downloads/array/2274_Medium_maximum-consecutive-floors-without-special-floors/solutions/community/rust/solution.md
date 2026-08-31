# rust sort

**Author:** akaisiro
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2041557/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2041557/)

---

```rust
pub fn max_consecutive(bottom: i32, top: i32, special: Vec<i32>) -> i32 {
    let mut special = special;
    special.sort_unstable();
    let s = special.windows(2).map(|x| x[1] - x[0]).max().unwrap_or(0);
    let m = (special[0] - bottom).max(top - special.last().unwrap());
    m.max(s - 1)
}
```