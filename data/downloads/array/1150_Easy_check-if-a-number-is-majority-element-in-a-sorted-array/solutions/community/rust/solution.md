# Rust | 3 Lines of O(log n)

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3731094/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3731094/)

---

# Approach

Literally just binary search.

# Complexity
- Time complexity:
$$O(\\log n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn is_majority_element(vec: Vec<i32>, target: i32) -> bool {        
        let p0 = vec.partition_point(|&e| e < target);
        let p1 = vec.partition_point(|&e| e <= target);
        
        p1 - p0 > vec.len() / 2
    }
}
```