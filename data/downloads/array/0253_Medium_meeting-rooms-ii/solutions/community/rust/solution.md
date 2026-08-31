# Rust HashMap Solution

**Author:** duncpro
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/5888006/](https://leetcode.com/problems/meeting-rooms-ii/solutions/5888006/)

---

# Complexity
- Time complexity: $O(n * \\log(n))$
- Space complexity: $O(n)$

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn min_meeting_rooms(intervals: Vec<Vec<i32>>) -> i32 {
        let mut deltas: HashMap<i32, i32> = HashMap::new();
        let mut checkpoints: Vec<i32> = Vec::new();

        for interval in &intervals {
            let begin = interval[0];
            if !deltas.contains_key(&begin) { checkpoints.push(begin); }
            let mut delta = deltas.get(&begin).copied().unwrap_or_default();
            delta += 1;
            deltas.insert(begin, delta);
        }
        for interval in &intervals {
            let end = interval[1];
            if !deltas.contains_key(&end) { checkpoints.push(end); }
            let mut delta = deltas.get(&end).copied().unwrap_or_default();
            delta -= 1;
            deltas.insert(end, delta);
        }

        checkpoints.sort();

        let mut ongoing: i32 = 0;
        let mut max: i32 = 0;
        for t in checkpoints {
            ongoing += deltas.get(&t).unwrap();
            max = std::cmp::max(max, ongoing);
        }

        return max;
    }
}
```