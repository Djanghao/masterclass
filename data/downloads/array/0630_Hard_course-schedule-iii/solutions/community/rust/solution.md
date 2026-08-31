# Rust BinaryHeap solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/1187347/](https://leetcode.com/problems/course-schedule-iii/solutions/1187347/)

---

```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn schedule_course(courses: Vec<Vec<i32>>) -> i32 {
        let mut courses = courses;
        courses.sort_by_cached_key(|v| v[1]);
        let mut bh = BinaryHeap::new();
        let mut total = 0;
        for course in &courses {
            bh.push(course[0]);
            total += course[0];
            if total > course[1] {
                if let Some(max) = bh.pop() {
                    total -= max;
                }
            }
        }
        bh.len() as i32
    }
}
```