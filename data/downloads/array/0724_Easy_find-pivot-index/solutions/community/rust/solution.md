# 🦀[RUST]  Fast O(N) Solution

**Author:** blessingman
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/2868730/](https://leetcode.com/problems/find-pivot-index/solutions/2868730/)

---

# **Hey,mate! This is my quick solution**
    impl Solution {
        pub fn pivot_index(nums: Vec<i32>) -> i32 {
            let sum: i32 = nums.iter().sum();
            let mut left = 0;
            for i in 0..nums.len() {
                if left == sum - left - nums[i] {
                    return i as _;
                }
                left += nums[i]
            }
            -1
        }
    }
# **if you like it ,please, push arrow to lift up solution to the top ,thanks!**