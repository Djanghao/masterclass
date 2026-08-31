# Rust Solution using easy Hashmap

**Author:** jayzern
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/5988298/](https://leetcode.com/problems/counting-elements/solutions/5988298/)

---

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn count_elements(arr: Vec<i32>) -> i32 {
        let mut hmap = HashMap::new();
        
        // Populate hashmap with counts of each element
        for &num in &arr {
            if hmap.contains_key(&num) {
                *hmap.get_mut(&num).unwrap() += 1;
            } else {
                hmap.insert(num, 1);
            }
        }

        let mut count = 0;
        
        // Loop through arr again, if hmap contains n+1 then count it
        for &num in &arr {
            if hmap.contains_key(&(num + 1)) {
                count += 1;
            }
        }

        count
    }
}


```