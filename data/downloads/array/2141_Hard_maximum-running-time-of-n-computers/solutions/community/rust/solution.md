# One more binary search

**Author:** noirekoff99
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3947716/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3947716/)

---

```
use std::cmp::min;


impl Solution {
    pub fn check(batteries: & Vec<i32>, time: i64, n: i64) -> bool {
        let mut sum: i64 = 0;
        for b in batteries {
            sum += min(time, *b as i64)
        }
        return sum >= time * n
    }

    pub fn max_run_time(n: i32, batteries: Vec<i32>) -> i64 {
        let mut left: i64 = 1;
        let mut sum: i64 = 0;
        for b in batteries.iter() {sum += *b as i64};
        let mut right: i64 = sum / n as i64;
        let mut time: i64;
        loop {
            println!("{} {}", left, right);
            if left >= right {break}
            time = (left + right + 1) / 2;
            if Solution::check(&batteries, time, n as i64) {
                left = time
            }
            else {
                right = time - 1
            }
        }
        return left
    }
}
```