# rust solution

**Author:** nothingelsematters
**Votes:** 2
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/5142472/](https://leetcode.com/problems/non-overlapping-intervals/solutions/5142472/)

---

# Complexity

- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code

```
impl Solution {
    pub fn erase_overlap_intervals(mut intervals: Vec<Vec<i32>>) -> i32 {
        intervals.sort_by_key(|x| x[1]);

        let mut prev = 0;
        let mut count = 1;

        for i in 1..intervals.len() {
            if intervals[prev][1] <= intervals[i][0] {
                prev = i;
                count += 1;
            }
        }

        (intervals.len() - count) as i32
    }
}
```