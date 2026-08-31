# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/2911951/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/2911951/)

---

# Code
```
impl Solution {
    pub fn intersection_size_two(intervals: Vec<Vec<i32>>) -> i32 {
        fn inside(x: i32, interval: &[i32]) -> bool {
            interval[0] <= x && x <= interval[1]
        }

        let mut intervals = intervals;
        intervals.sort_by(|a, b| if a[0] != b[0] { a[0].cmp(&b[0]) } else { b[1].cmp(&a[1]) });
        let mut n = 0;
        for interval in intervals.clone() {
            while n > 0 && interval[1] <= intervals[n - 1][1] {
                n -= 1;
            }
            intervals[n] = interval;
            n += 1;
        }
        let mut cnt = 0;
        let mut x = -1;
        let mut y = -1;
        for item in intervals.iter().take(n) {
            if !inside(y, item) {
                cnt += 2;
                x = item[1] - 1;
                y = x + 1;
            } else if !inside(x, item) {
                cnt += 1;
                x = y;
                y = item[1];
            }
        }
        cnt
    }
}
```