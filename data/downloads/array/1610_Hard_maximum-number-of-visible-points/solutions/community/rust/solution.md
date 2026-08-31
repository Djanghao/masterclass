# rust solution with no proper explanation and very messy code. it works tho. beat 100% too.

**Author:** theyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5623289/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5623289/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::VecDeque;

impl Solution {
    pub fn visible_points(points: Vec<Vec<i32>>, angle: i32, location: Vec<i32>) -> i32 {
        // translate by `location`
        // use `atan2` to get angle of polar. no need for length
        // sort by angle
        // find max subarray
        let mut temp: (Vec<_>, Vec<_>) = points.into_iter()
            .map(|x| (x[0] - location[0], x[1] - location[1]))
            .partition(|&x| x == (0, 0));

        let at_feet = temp.0.len();

        let mut angles: Vec<_> = temp.1.into_iter()
            .map(|(x, y)| f64::atan2(y as f64, x as f64))
            .collect();
        if angles.is_empty() { return at_feet as i32; }        

        angles.sort_unstable_by(|a, b| a.partial_cmp(b).unwrap());

        let angle = f64::to_radians(angle as f64);

        let mut deq = VecDeque::new();
        deq.push_back(angles[0]);
        let mut max_len = 1;

        for ang in angles[1..].iter().cloned().chain(
            angles.iter()
                .take_while(|&&x| x <= angle / 2.)
                .map(|x| x + std::f64::consts::TAU)
        ) {
            if ang - deq.front().unwrap() <= angle {
                deq.push_back(ang);
                max_len = max_len.max(deq.len());
            } else {
                while let Some(n) = deq.pop_front() {
                    if ang - n <= angle {
                        deq.push_front(n);
                        break
                    }
                }
                deq.push_back(ang);
            }
        }

        (max_len + at_feet) as i32
    }
}
```