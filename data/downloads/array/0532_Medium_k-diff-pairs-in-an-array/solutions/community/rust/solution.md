# Rust | HashSet Solution | With Comments | 0 ms

**Author:** pasverm
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/2441334/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/2441334/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn find_pairs(nums: Vec<i32>, k: i32) -> i32 {
        let mut seen_set = HashSet::new();
        let mut result_set = HashSet::new();
        for num in nums.into_iter() {
			// if the current value +- k was already seen, we have a k-diff pair
			// always save the smaller value of the pair in the result set
            if seen_set.contains(&(num-k)) {
                result_set.insert(num-k);
            }
            if seen_set.contains(&(num+k)) {
                result_set.insert(num);
            }
			
			// mark current value as seen
            seen_set.insert(num);
        }
        result_set.len() as i32
    }
}
```