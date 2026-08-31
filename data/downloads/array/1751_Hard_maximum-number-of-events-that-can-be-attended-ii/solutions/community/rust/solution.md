# (Rust) Top 100% time and memory, O(n * k + n log n) DP

**Author:** playwmadness
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/4720955/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/4720955/)

---

# Approach
Decide if we pick an event or not and store the larger value in DP.

# Complexity
- Time complexity: $$O(n * k + n * log (n) )$$

- Space complexity: $$O(n)$$

# Code
```
use std::mem::swap;

impl Solution {
    pub fn max_value(mut events: Vec<Vec<i32>>, k: i32) -> i32 {
        let n = events.len();
        let k = k as usize;
        // Sort events by end time
        events.sort_unstable_by_key(|x| x[1]);

        let mut dp0 = vec![i32::MIN; n + 1];
        let mut dp1 = vec![i32::MIN; n + 1];

        // Index "cache", to avoid binary search in the loop
        let mut prevs = vec![0usize; n];

        for i in 0..n {
            // for k = 1 we just pick the event with most value
            let v = dp1[i].max(events[i][2]);
            dp1[i + 1] = v;

            // "Cache" the index of an event that ends just before the current one
            // We can cut some time here by searching only in the slice before the current event
            prevs[i] = events[..i].partition_point(|x| x[1] < events[i][0]);
        }


        for i in 1..k {
            for j in i..n {
// we don't pick the event, and reuse max DP from previous k value
                let v = dp1[j + 1]                      
// or we pick this event and add it to the prev max DP before its start
                    .max(dp1[prevs[j]] + events[j][2])  
// or we don't pick this event bc we already have picked a better one earlier for current k
                    .max(dp0[j]);                       
                dp0[j + 1] = v;
            }
            swap(&mut dp0, &mut dp1);
        }

        dp1[n]
    }
}
```