# easy Rust 5 lines

**Author:** Direktor
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2003972/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2003972/)

---

1. find the max and min value of the "Unsorted Continuous Subarray"
2. exclude the values which are not in this range
```
impl Solution {
    pub fn find_unsorted_subarray(nums: Vec<i32>) -> i32 {
        let (mut max, mut min)= (i32::MIN, i32::MAX);
        nums.iter().fold(i32::MIN, |prev, next| { if prev > *next {max = max.max(prev); min = min.min(*next);} *next });
        if let Some(l) = nums.iter().position(|&v| v > min) {
            let r = nums.iter().rposition(|&v| v < max).unwrap();
            return (r + 1 - l) as i32
        }
        0
    }
}
```