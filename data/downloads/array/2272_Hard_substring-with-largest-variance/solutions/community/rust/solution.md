# [Rust] Tracking maximum seen difference in one pass, 3ms time

**Author:** tanriol
**Votes:** 3
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/2038369/](https://leetcode.com/problems/substring-with-largest-variance/solutions/2038369/)

---

Solving this in one linear scan, tracking cumulative counts and maximum seen differences
```rust
impl Solution {
    pub fn largest_variance(s: String) -> i32 {
        let mut best = 0;
        let mut running_counts = [0i32; 26];
        let mut max_ci_minus_cj = [[0; 26]; 26]; // Maximum seen ever
        let mut max_ci_minus_cj_stable = [[-1000000; 26]; 26]; // Maximum count[i]-count[j] seen before the last `i` char
        for b in s.bytes() {
            let idx = (b - b'a') as usize;
            for oth in 0..26 { // We're seeing the idx char, so can update the maximum differences for it
                max_ci_minus_cj_stable[idx][oth] = max_ci_minus_cj[idx][oth];
            }
            running_counts[idx] += 1;
            for oth in 0..26 {
			    // Update the best seen difference ever (but don't promote it to stable for now)
                max_ci_minus_cj[idx][oth] = std::cmp::max(max_ci_minus_cj[idx][oth], running_counts[idx] - running_counts[oth]);
				// Two cases: seeing 'a' can either increase the 'a' over 'b' lead, or it can be the first 'a' in some substring allowing 'b' to compare to it
                let idx_best = running_counts[idx] - running_counts[oth] + max_ci_minus_cj_stable[oth][idx];
                let oth_best = running_counts[oth] - running_counts[idx] + max_ci_minus_cj_stable[idx][oth];
                best = std::cmp::max(best, idx_best);
                best = std::cmp::max(best, oth_best);
            }
        }
        best
    }
}
```
3ms, 2.2MB