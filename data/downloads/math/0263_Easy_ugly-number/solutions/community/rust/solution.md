# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number/solutions/1969429/](https://leetcode.com/problems/ugly-number/solutions/1969429/)

---

```
impl Solution {
    pub fn is_ugly(n: i32) -> bool {
        match n {
            _ if n <= 0 => false,
            mut num => {
                for p in [2, 3, 5] {
                    while num % p == 0 {
                        num /= p;
                    }
                }
                num == 1
            }
        }
    }
}
```