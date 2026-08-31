# Rust one-liner (fibbonacci numbers)

**Author:** BigMih
**Votes:** 12
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/1327557/](https://leetcode.com/problems/climbing-stairs/solutions/1327557/)

---

```
impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        (0..n)
            .fold((1, 0), |(res, prev), _| (res + prev, res))
            .0
    }
}
```