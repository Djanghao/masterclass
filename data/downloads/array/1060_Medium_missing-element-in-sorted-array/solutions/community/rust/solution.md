# Binary search - Rust + Python solutions

**Author:** mjgallag
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/3833414/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/3833414/)

---

```rust []
impl Solution {
    pub fn missing_element(nums: Vec<i32>, k: i32) -> i32 {
        let (mut l, mut r) = (0, nums.len() - 1);
        while l <= r {
            let m = l + (r - l >> 1);
            let cur = nums[m] - nums[0] - m as i32;
            if cur < k {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        nums[0] + r as i32 + k
    }
}

```
```python []
class Solution:
    def missingElement(self, nums: List[int], k: int) -> int:
        l, r = 0, len(nums) - 1
        while l <= r:
            m = l + (r - l >> 1)
            cur = nums[m] - nums[0] - m
            if cur < k:
                l = m + 1
            else:
                r = m - 1
        return nums[0] + r + k

```