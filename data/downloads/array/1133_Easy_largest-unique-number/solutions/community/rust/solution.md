# rust: BTreeMap of counts

**Author:** bunnycode
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/4907633/](https://leetcode.com/problems/largest-unique-number/solutions/4907633/)

---

# Code
```
use std::collections::BTreeMap;

impl Solution {
    pub fn largest_unique_number(nums: Vec<i32>) -> i32 {
        // use BTreeMap because it is sorted, so you do not need to iterate through 
        // the entire map, but just to the first unique value
        let mut counts = BTreeMap::new();
        // populate counts, where key = number & value = count
        nums.iter().for_each(|n| *counts.entry(*n).or_insert(0) += 1);
        // search for highest key with a single count
        while let Some((k, v)) = counts.pop_last() {
            if v == 1 { return k; }
        }
        // if no unique value found, then return -1 as failure code
        -1
    }
}
```