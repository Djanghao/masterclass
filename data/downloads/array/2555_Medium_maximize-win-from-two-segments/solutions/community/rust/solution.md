# rust: simple partition_point and max array, beats 100%

**Author:** happysings
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/4522201/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/4522201/)

---


# Code
```
impl Solution {
    pub fn maximize_win(prize_positions: Vec<i32>, k: i32) -> i32 {
        let mut i = 0;
        let mut cmax = vec![0; prize_positions.len() + 1];
        let mut max = 0; // result
        while i < prize_positions.len() {
            let curr = prize_positions[i];
            // locate the largest segment with k from i
            let r = prize_positions.partition_point(|&x| x <= curr + k);
            // length of segment
            let wt = (r - i) as i32;
            // update cmax for r - max of segment ending at r
            // max of last max, current, or already ending ar r
            cmax[r] = cmax[i].max(cmax[r].max(wt));
            // update max with the max of last non overlapping segment
            max = max.max(cmax[i] + wt);
            // bubble up the max to all equal values for prizes
            while i < prize_positions.len() && prize_positions[i] == curr {
                i += 1;
                cmax[i] = cmax[i].max(cmax[i - 1]);
            }
        }
        max
    }
}
```