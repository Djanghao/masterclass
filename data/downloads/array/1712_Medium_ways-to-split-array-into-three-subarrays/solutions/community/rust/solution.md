# Rust Solution using Binary Search

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/2808581/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/2808581/)

---

# Code
```
const MOD:usize = 1_000_000_007;
impl Solution {
  pub fn ways_to_split(nums: Vec<i32>) -> i32 {
      let n = nums.len();
      let mut result = 0;
      let mut memo = vec![0;n+1];
      for i in 0..n {
        memo[i+1] = nums[i] as isize + memo[i];
      }

      for i in 2..n {
        let lv = memo[i-1];
        if memo[n-1] - lv < lv { continue }
        let mut left = i;
        let mut right = n+1;
        while left < right {
          let mid = (left+right)/2;
          let cv = memo[mid] - lv;
          if lv <= cv {
            right = mid;
          } else {
            left = mid+1;
          }
        }
        if left == n { continue }
        let min_ci = left;
        let min_cv = memo[min_ci] - lv;
        if min_cv < lv { continue }

        let max_rv = memo[n] - memo[min_ci];
        if max_rv < min_cv { continue }

        let mut left = min_ci;
        let mut right = n;
        while left+1 < right {
          let mid = (left+right)/2;
          let rv = memo[n] - memo[mid];
          let cv = memo[mid] - lv;
          if cv <= rv {
            left = mid;
          } else {
            right = mid;
          }
        }
        let max_ci = left;
        result += max_ci - min_ci + 1;
        result %= MOD;
      }

      result as i32
  }
}
```