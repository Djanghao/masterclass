# 💥Runtime and memory beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/5725334/](https://leetcode.com/problems/meeting-scheduler/solutions/5725334/)

---

# Intuition
We need to find a common time slot that works for both people by looking for overlapping slots that can fit the meeting duration.

# Approach
Sort both lists by start time.
Use two pointers to find overlaps.
If an overlap fits the meeting, return it.
Move the pointer with the earlier end time.
Return an empty array if no slot is found.

# Complexity
- Time complexity:
O(n log n + m log m) for sorting.

- Space complexity:
O(1), using only a few extra variables.

# Code
```rust []
impl Solution {
    pub fn min_available_duration(
        mut slots1: Vec<Vec<i32>>, 
        mut slots2: Vec<Vec<i32>>, 
        duration: i32
    ) -> Vec<i32> {
        // Sort both slot lists by start time
        slots1.sort_unstable_by_key(|slot| slot[0]);
        slots2.sort_unstable_by_key(|slot| slot[0]);
        
        // Initialize pointers for both slot lists
        let (mut i, mut j) = (0, 0);
        
        // Iterate through both lists to find a suitable slot
        while i < slots1.len() && j < slots2.len() {
            // Find the overlap between the current slots
            let start = slots1[i][0].max(slots2[j][0]);
            let end = slots1[i][1].min(slots2[j][1]);
            
            // Check if the overlap is sufficient for the required duration
            if end - start >= duration {
                return vec![start, start + duration];
            }
            
            // Move the pointer of the slot that ends earlier
            if slots1[i][1] < slots2[j][1] {
                i += 1;
            } else {
                j += 1;
            }
        }
        
        // If no suitable slot is found, return an empty vector
        vec![]
    }
}

```