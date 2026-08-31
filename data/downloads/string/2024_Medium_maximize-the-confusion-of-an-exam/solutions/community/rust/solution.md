# sliding window

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/5337441/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/5337441/)

---

# Code
```
impl Solution {
    pub fn max_consecutive_answers(s: String, k: i32) -> i32 {
        let s = s.as_bytes();
        let mut best = 0;
        for toggle in [true, false] {
            let mut j = 0;
            let mut used = 0;
            for (i, &x) in s.iter().enumerate() {
                if (x == 'F' as u8) ^ toggle {used += 1}
                while used > k {
                    if (s[j] == 'F' as u8) ^ toggle {used -=1}
                    j += 1
                }
                best = best.max(i-j+1)
            }
        }
        best as _
    }
}
```