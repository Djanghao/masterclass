# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/2918152/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/2918152/)

---

# Code
```
impl Solution {
    pub fn num_subarray_bounded_max(nums: Vec<i32>, left: i32, right: i32) -> i32 {
        let mut result = 0;
        let mut start = 0;
        let mut end = 0;
        let mut count = 0;
        while end < nums.len() {
            if nums[end] >= left && nums[end] <= right {
                count = end - start + 1;
                result += count;
            } else if nums[end] < left {
                result += count;
            } else {
                start = end + 1;
                count = 0;
            }
            end += 1;
        }
        result as i32
    }
}
```