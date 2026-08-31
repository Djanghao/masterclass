# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/3239132/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/3239132/)

---

# Code
```
impl Solution {
    pub fn number_of_rounds(login_time: String, logout_time: String) -> i32 {
        let login_time = login_time.as_bytes();
        let logout_time = logout_time.as_bytes();
        let zero = '0' as i32;
        let mut in_time = ((login_time[0] as i32 - zero) * 10 + login_time[1] as i32 - zero) * 60
            + (login_time[3] as i32 - zero) * 10
            + login_time[4] as i32
            - zero;
        let mut out_time = ((logout_time[0] as i32 - zero) * 10 + logout_time[1] as i32 - zero) * 60
            + (logout_time[3] as i32 - zero) * 10
            + logout_time[4] as i32
            - zero;
        if out_time < in_time {
            out_time += 1440;
        }
        if in_time % 15 != 0 {
            let val = in_time / 15;
            in_time = (val + 1) * 15;
        }
        (out_time - in_time) / 15
    }
}
```