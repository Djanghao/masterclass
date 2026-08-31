# [Rust] Iterator scan with monotonic stack

**Author:** tiedyedvortex
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494549/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494549/)

---

# Intuition / Approach

Other solutions explain this more thoroughly but the short version is:

If we've found a previous increasing sequence like [1, 2, 3, 4, 5], and we get a new higher number like 6, we can just reuse that previous sequence, so we get [1, 2, 3, 4, 5, 6].

If not, then we can still reuse as much of the increasing sequence as we could, and from then on any number that is larger than the most recent height can use this number as well. So if we used to have [1,2,3,4,5], and we get a 3, then we can overwrite our array to be [1,2,3,3,5].

This means we can maintain a nondecreasing list, which means we can binary search, and we just have to return the insert or push position plus 1 to account for the added length.

# Complexity
- Time complexity: O(n log n), we have to do a binary search (log n) for up to n elements.

- Space complexity: O(n), stack might grow as large as the list of obstacles if it's nondecreasing.

# Code
```
use std::cmp::Ordering;
impl Solution {
    pub fn longest_obstacle_course_at_each_position(obstacles: Vec<i32>) -> Vec<i32> {
        obstacles
        .into_iter()
        .scan(Vec::new(), |monotonic_stack, height| {
            let point = monotonic_stack.partition_point(|&prev| prev <= height);
            if point == monotonic_stack.len() {
                monotonic_stack.push(height);
            } else {
                monotonic_stack[point] = height;
            }
            Some(point as i32 + 1)
        })
        .collect()
    }
}
```