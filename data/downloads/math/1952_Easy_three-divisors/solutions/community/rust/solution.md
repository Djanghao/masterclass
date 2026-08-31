# simple rust solution

**Author:** zhouquan0x16
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-divisors/solutions/1390878/](https://leetcode.com/problems/three-divisors/solutions/1390878/)

---

```
impl Solution {
    pub fn is_three(n: i32) -> bool {
        
        let mut count = 0;
        let mut n = n;
        for i in (1i32..n/2 + 1) {
            if i * i == n {
                count += 1;
                for j in (1i32..i/2+1) {
                    if i % j == 0 && j != 1 {
                        return false;
                    }
                }
            }
        }
        return count == 1;
    }
}
```