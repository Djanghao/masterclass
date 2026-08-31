# Sliding Window Rust

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/3177942/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/3177942/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let (mut left, mut right, mut sum, n) = (0, 0, 0, nums.len());
        let mut ans = n + 1;
        while right < n {
            while right < n && sum < target {
                sum += nums[right];
                right += 1;
            }
            while sum >= target {
                ans = usize::min(ans, right - left);
                sum -= nums[left];
                left += 1;
            }
        }
        if ans == n + 1 { ans = 0; }

        ans as i32
    }
}
```