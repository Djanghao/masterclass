# [Rust] In-place solution

**Author:** ikorennoy
**Votes:** 7
**Link:** [https://leetcode.com/problems/rotate-array/solutions/3197643/](https://leetcode.com/problems/rotate-array/solutions/3197643/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn rotate(nums: &mut Vec<i32>, k: i32) {
        let size = nums.len();
        if size <= 1 { return; }
        let k = (k as usize) % size;
        if k == 0 { return; }
        nums.reverse(); // 0 to size - 1
        Self::reverse(nums, 0, k - 1); // 0 to k - 1
        Self::reverse(nums, k, size - 1); // k to size - 1
    }

    fn reverse(nums: &mut Vec<i32>, mut start: usize, mut end: usize) {
        while start < end {
            nums.swap(start, end);
            start += 1;
            end -= 1;
        }
    }
}

```