# One-Liner using set operations

**Author:** echase3
**Votes:** 3
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/4406232/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/4406232/)

---

# Code
```
use std::collections::HashSet;
use std::iter::FromIterator;
impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
         HashSet::<i32>::from_iter(nums1)
            .intersection(&HashSet::<i32>::from_iter(nums2))
            .map(|&n| n)
            .collect()
    }
}

```