# 2 ms, Beats 100.00%

**Author:** Ceyed
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5386472/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5386472/)

---

# Code
```
impl Solution {
    pub fn repeated_n_times(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        for i in 0..(nums.len()-1) {
            if nums[i] == nums[i+1] {
                return nums[i]
            }
        }
        42
    }
}
```