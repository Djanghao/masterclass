# Rust | Simple HashMap

**Author:** icyrainz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3396100/](https://leetcode.com/problems/find-anagram-mappings/solutions/3396100/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn anagram_mappings(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut dict: HashMap<i32, Vec<i32>> = HashMap::new();

        // Loop through nums2 and keep track of the indices of the occurrences of each number
        for (i, val) in nums2.iter().enumerate() {
            dict.entry(*val).or_insert_with(Vec::new).push(i as i32);
        }

        let mut res: Vec<i32> = Vec::new();
        for val in nums1.iter() {
            if let Some(indices) = dict.get_mut(val) {
                res.push(indices[0]);
                indices.remove(0); // Remove to prevent duplicate in next lookup
            }
        }

        res
    }
}
```