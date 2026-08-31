# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/building-boxes/solutions/3208595/](https://leetcode.com/problems/building-boxes/solutions/3208595/)

---

# Code
```
impl Solution {
    pub fn minimum_boxes(n: i32) -> i32 {
        let mut dia_sz = 0;
        let mut last_dia = 0;
        let mut n = n;
        while n - (dia_sz + 1) * (dia_sz + 2) / 2 > 0 {
            dia_sz += 1;
            n -= dia_sz * (dia_sz + 1) / 2;
        }
        while n > 0 {
            n -= last_dia + 1;
            last_dia += 1;
        }
        dia_sz * (dia_sz + 1) / 2 + last_dia
    }
}
```