# Bitmast & Bottom-Up DP

**Author:** emilHof
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/4188253/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/4188253/)

---

# Complexity
- Time complexity: $O(2^n)$

- Space complexity: $O(2^n)$

# Code
```
impl Solution {
    pub fn minimum_xor_sum(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut dp = vec![0; 2_usize.pow(nums2.len() as u32)];
        for i in (0..nums1.len()).rev() {
            let mut new_dp = vec![i32::MAX; 2_usize.pow(nums2.len() as u32)];
            for m in 0..new_dp.len() {
                for b in 0..nums2.len() {
                    if (m >> b) & 1 == 1{ continue };
                    new_dp[m] = new_dp[m].min(dp[m | (1 << b)] + (nums1[i] ^ nums2[b]));
                }
            }
            dp = new_dp;
        }
        dp[0]
    }
}
```