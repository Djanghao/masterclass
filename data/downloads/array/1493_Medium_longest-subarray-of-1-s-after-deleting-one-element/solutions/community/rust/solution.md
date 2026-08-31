# Very short and fast

**Author:** randomizedinput
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4839414/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4839414/)

---

`i` is the "normal" index, but `j` moves forward only if there are more than one zero in the current window. This solution should be faster than a split, since it is a pure one loop without anything "under the hood".

# Code
```
impl Solution {
    pub fn longest_subarray(nums: Vec<i32>) -> i32 {
        let (mut j, mut z) = (0, 0);

        for i in 0..nums.len() {
            if nums[i] == 0 { z += 1; }
            if z > 1 {
                z -= 1 - nums[j];
                j += 1;
            }
        }
        (nums.len() - j - 1) as i32       
    }
}
```