# Rust Solution | TC - 24 ms | HashMap

**Author:** kunal221
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4521273/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4521273/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;
use std::cmp;
impl Solution {
    pub fn maximum_set_size(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let n = nums1.len();
        let mut mp : HashMap<i32, i32> = HashMap::new();
        let mut mp1 : HashMap<i32, i32> = HashMap::new();
        for &i in nums1.iter() {
            *mp.entry(i).or_insert(0) += 1;
        }
        for &i in nums2.iter() {
            *mp1.entry(i).or_insert(0) += 1;
        }
        let (mut in_one, mut in_two, mut both) = (0, 0, 0);
        for (&value, _) in mp.iter() {
            if mp1.contains_key(&value) {
                both += 1;
            } else {
                in_one += 1;
            }
        }
        for (&value, _) in mp1.iter() {
            if !mp.contains_key(&value) {
                in_two += 1;
            }
        }
        //use std::cmp
        in_one = cmp::min(in_one, n / 2);
        in_two = cmp::min(in_two, n / 2);
        if (in_one < n / 2) {
            let req = n / 2 - in_one;
            let mut has = cmp::min(both, req);
            both -= has;
            in_one += has;
        }
        if (in_two < n / 2) {
            let req = n / 2 - in_two;
            let mut has = cmp::min(both, req);
            both -= has;
            in_two += has;
        }
        (in_one + in_two) as i32 
    }
}
```