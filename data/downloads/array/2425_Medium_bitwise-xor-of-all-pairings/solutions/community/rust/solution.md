# Rust Solution

**Author:** mudream4869
**Votes:** 1
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2665136/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2665136/)

---

# Intuition

Every element in $num_i$ will xor $num_{1-i}.len()$ times

# Complexity
- Time complexity: $O(N)$

- Space complexity: $O(1)$

# Code
```
impl Solution {
    pub fn xor_all_nums(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut ret = 0;
        if nums1.len() % 2 == 1 {
            ret ^= nums2.iter().fold(0, |n, x| {n^x});
        }
        if nums2.len() % 2 == 1 {
           ret ^= nums1.iter().fold(0, |n, x| {n^x});
        }
        ret
    }
}
```