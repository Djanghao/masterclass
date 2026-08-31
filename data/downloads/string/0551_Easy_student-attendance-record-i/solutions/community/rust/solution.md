# Rust, simple loop solution

**Author:** joxterrr
**Votes:** 3
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/1317358/](https://leetcode.com/problems/student-attendance-record-i/solutions/1317358/)

---

```
impl Solution {
    pub fn check_record(s: String) -> bool {
        let mut absCnt = 0;
        let mut lateCnt = 0;

        for char in s.chars() {
            match char {
                'L' => lateCnt += 1,
                'A' => {
                    lateCnt = 0;
                    absCnt += 1;
                },
                _ => lateCnt = 0,
            }

            if lateCnt == 3 || absCnt == 2 {
                return false;
            }
        }

        true
    }
}
