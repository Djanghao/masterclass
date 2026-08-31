# Rust using binary_search and partition_point

**Author:** smathog
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/2329914/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/2329914/)

---

Rust already has plenty of decent ways to do a binary search on a slice without having to reinvent the wheel, so why not take advantage of that? 

Note that you can use partition_point alone to handle the case where the target is not in nums, but I prefer the error handling via the Result returned from binary_search, so I went with that since it doesn't influence the big-O runtime. 

```
impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        // Find if target in nums
        if let Ok(index) = nums.binary_search(&target) {
            // Target present
            vec![nums.partition_point(|&i| i < target) as i32, nums.partition_point(|&i| i <= target) as i32 - 1]
        } else {
            // Error, not found
            vec![-1, -1]
        }
    }
}
```