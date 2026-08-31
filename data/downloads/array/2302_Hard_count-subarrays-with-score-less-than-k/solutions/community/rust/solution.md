# [Rust] Sliding window

**Author:** night-crawler
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2139160/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2139160/)

---

```rust
impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, k: i64) -> i64 {
        let mut sum = 0;
        let mut count = 0;
        let mut left = 0;
        for (right, &num) in nums.iter().enumerate() {
            sum += num as i64;

            while sum * (right - left + 1) as i64 >= k {
                sum -= nums[left] as i64;
                left += 1;
            }

            count += right - left + 1;
        }

        count as i64
    }
}
```