# [Rust] | Idiomatic Solution

**Author:** MarkTanashchukID
**Votes:** 6
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/2753704/](https://leetcode.com/problems/teemo-attacking/solutions/2753704/)

---


Edit, shorter version:
```
impl Solution {
    pub fn find_poisoned_duration(time_series: Vec<i32>, duration: i32) -> i32 {
        time_series
			.windows(2)
			.fold(duration, |acc, pair| acc + i32::min(duration, pair[1] - pair[0]))
    }
}
```

Old version:
```
use std::cmp;

impl Solution {
    pub fn find_poisoned_duration(time_series: Vec<i32>, duration: i32) -> i32 {
        time_series
			.windows(2)
			.fold(duration, |acc, pair| if let [prev, curr] = pair {
                acc + cmp::min(duration, curr - prev)
            } else {
                acc
            })
    }
}
```