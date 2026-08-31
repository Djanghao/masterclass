# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/3208619/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/3208619/)

---

# Code
```
impl Solution {
    pub fn max_absolute_sum(nums: Vec<i32>) -> i32 {
        let mut max_sum = 0;
        let mut min_sum = 0;
        let mut max = 0;
        let mut min = 0;
        for num in nums {
            max_sum += num;
            min_sum += num;
            if max_sum > max {
                max = max_sum;
            }
            if min_sum < min {
                min = min_sum;
            }
            if max_sum < 0 {
                max_sum = 0;
            }
            if min_sum > 0 {
                min_sum = 0;
            }
        }
        if max > -min {
            max
        } else {
            -min
        }
    }
}
```