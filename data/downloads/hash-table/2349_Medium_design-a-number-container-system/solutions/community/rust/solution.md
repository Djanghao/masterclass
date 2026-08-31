# rust solution

**Author:** TimaGhostov
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/4353587/](https://leetcode.com/problems/design-a-number-container-system/solutions/4353587/)

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
use std::collections::{HashMap, BTreeSet};

struct NumberContainers {
    map_indexes: HashMap<i32, i32>,
    map_numbers: HashMap<i32, BTreeSet<i32>>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumberContainers {

    fn new() -> Self {
        Self {
            map_indexes: HashMap::new(),
            map_numbers: HashMap::new(),
        }
    }
    
    fn change(&mut self, index: i32, number: i32) {
        if let Some(prev_number) = self.map_indexes.remove(&index) {
            if let Some(mut set_indexes) = self.map_numbers.get_mut(&prev_number) {
                set_indexes.remove(&index);
            }
        }
        self.map_indexes.insert(index, number);
        let mut set = self.map_numbers.entry(number).or_insert(BTreeSet::new());
        set.insert(index);
    }
    
    fn find(&self, number: i32) -> i32 {
        match self.map_numbers.get(&number) {
            None => -1,
            Some(set_indexes) => {
                set_indexes
                    .iter()
                    .next()
                    .copied()
                    .unwrap_or(-1)
            }
        }
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * let obj = NumberContainers::new();
 * obj.change(index, number);
 * let ret_2: i32 = obj.find(number);
 */
```