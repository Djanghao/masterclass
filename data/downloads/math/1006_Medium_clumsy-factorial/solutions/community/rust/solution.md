# as clumsy as it can get

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/5440920/](https://leetcode.com/problems/clumsy-factorial/solutions/5440920/)

---

```
impl Solution {
    pub fn clumsy(n: i32) -> i32 {
       let mut r = 0;
       let mut i = n;
       if n == 1 {
        return 1
       }
       if n == 2 {
        return 2
       }
       while i >= 3 {
        if i == n {
            r += i*(i-1)/(i-2)
        }  else {
            r -= i*(i-1)/(i-2)
        }
        i -= 3;
        if i >= 1 {
            r += i;
            i -= 1
        }
       }
       match i {
         2 => r -2,
         1 => r -1,
         _ => r
       }
    }
}
```