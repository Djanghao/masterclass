# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/1539725/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/1539725/)

---

```
impl Solution {
    pub fn bitwise_complement(n: i32) -> i32 {
        !n & ((n as u32).next_power_of_two() - 1).max(1) as i32         
    }
}
```