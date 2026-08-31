# Rust || O(n) || 0ms

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/5266447/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/5266447/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn min_operations(mut nums: Vec<i32>) -> i32 {
        let mut ans = 0;
        for i in 1..nums.len() {
            if nums[i] <= nums[i-1] {
                let change = nums[i-1] - nums[i] + 1;
                ans += change;
                nums[i] += change;
            }
        }
        ans
    }
}
```