# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/878553/](https://leetcode.com/problems/remove-covered-intervals/solutions/878553/)

---

```rust
impl Solution {
    pub fn remove_covered_intervals(intervals: Vec<Vec<i32>>) -> i32 {
        let mut intervals = intervals;
        intervals.sort_unstable_by_key(|v: &Vec<i32>| (v[0], -v[1]));
        let mut answer = 0;
        let mut end = 0;
        for interval in intervals.iter() {
            if interval[1] > end {
                answer += 1;
                end = interval[1];
            }
        }
        answer
    }
}
```