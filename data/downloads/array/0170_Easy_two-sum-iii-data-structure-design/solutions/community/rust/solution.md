# Rust - hashmap solution

**Author:** va-an
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/3382002/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/3382002/)

---

# Complexity
- Time complexity:
  - for `add` function - $$O(1)$$
  - for `find` function - $$O(N))$$

- Space complexity:
$$O(N)$$

# Code
```
use std::collections::HashMap;

struct TwoSum {
    nums: HashMap<i32, i32>,
}

impl TwoSum {
    fn new() -> Self {
        TwoSum {
            nums: HashMap::new(),
        }        
    }
    
    fn add(&mut self, number: i32) {
        *self.nums.entry(number).or_insert(0) += 1;
    }
    
    fn find(&self, value: i32) -> bool {
        for (num, count) in self.nums.iter() {
            let k = value - num;

            if k != *num {
                if self.nums.contains_key(&k) {
                    return true;
                }
            } else {
                if count > &1 {
                    return true;
                }
            }
        }        
        
        false
    }
}

```