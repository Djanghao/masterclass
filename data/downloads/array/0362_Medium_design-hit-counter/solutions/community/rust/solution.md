# The obvious BTreeMap one

**Author:** luizc
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/6088808/](https://leetcode.com/problems/design-hit-counter/solutions/6088808/)

---

# Intuition
The `range` function is very helpful to sort things going up.

# Complexity
- Time complexity: O(log n) hit, O(log n + k) getHits

- Space complexity: O(n)

# Code
```rust []
use std::collections::btree_map::BTreeMap;

const FIVE_MINUTES: i32 = 60 * 5;

struct HitCounter {
    hits: BTreeMap<i32, i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl HitCounter {

    fn new() -> Self {
        Self {
            hits: BTreeMap::default(),
        }
    }
    
    fn hit(&mut self, timestamp: i32) {
        *self.hits.entry(timestamp).or_default() += 1;
    }
    
    fn get_hits(&self, timestamp: i32) -> i32 {
        self.hits
            .range(timestamp.saturating_sub(FIVE_MINUTES) + 1..)
            .map(|(_, hits)| *hits)
            .sum()
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * let obj = HitCounter::new();
 * obj.hit(timestamp);
 * let ret_2: i32 = obj.get_hits(timestamp);
 */
```