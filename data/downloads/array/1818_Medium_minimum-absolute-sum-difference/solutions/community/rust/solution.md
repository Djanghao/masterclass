# Rust Solution using Binary Search

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/3219928/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/3219928/)

---

# Complexity
- Time complexity: $$O(nlog(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn min_absolute_sum_diff(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut sorted = nums1.clone();
        sorted.sort_unstable();
        let n = nums1.len();

        let (mut diff, mut max_red, mut sum_diff) = (0, 0, 0);

        for i in 0..n {
            diff = (nums1[i] - nums2[i]).abs();
            sum_diff = (sum_diff + diff) % 1000000007;

            max_red = i32::max(max_red, diff - Self::binary_search_diff(nums2[i], &sorted));
        }

        (sum_diff  + 1000000007 - max_red)  % 1000000007
    }

    fn binary_search_diff(num: i32, nums: &[i32]) -> i32 {
        let pos = match nums.binary_search(&num) {
            Ok(pos) => pos,
            Err(pos) => pos,
        };

        let mut ans = i32::MAX;

        if pos < nums.len() {
            ans = ans.min(nums[pos] - num);
        }

        if pos > 0 {
            ans = ans.min(num - nums[pos - 1]);
        }

        ans
    }
}
```