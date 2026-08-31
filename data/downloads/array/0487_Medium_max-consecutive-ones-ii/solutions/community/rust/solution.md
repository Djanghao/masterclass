# Rust | DP

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1966349/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1966349/)

---

IMHO a little simpler than the previous Rust solution.

```
impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut curr = 0;
        let mut prev = 0;
        let mut zero = 0;
        let mut max = 0;

        for i in 0..nums.len() {
            match nums[i] {
                0 => {
                    prev = curr;
                    curr = 0;
                    zero = 1;
                }
                1 => curr += 1,
                _ => (),
            }
            max = max.max(curr + prev + zero)
        }
        max
    }
}
```