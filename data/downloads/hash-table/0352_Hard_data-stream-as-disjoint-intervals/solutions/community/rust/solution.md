# Rust with BTreeMap

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107533/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107533/)

---

Quite straightforward for a "hard" problem.
# Complexity
- add_num(): O(log(n))
- get_intervals(): O(n)
- Space complexity: O(n)

Where n is number of calls of add_num().
# Code
```rust
use std::collections::BTreeMap;

struct SummaryRanges {
    tree: BTreeMap<i32, i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl SummaryRanges {

    fn new() -> Self {
        Self { tree: BTreeMap::new() }
    }
    
    fn add_num(&mut self, value: i32) {
        let mut key = -1;
        if let Some((&k, v)) = self.tree.range_mut(..=value).last() {
            if *v >= value - 1 {
                *v = value.max(*v);
                key = k;
            }
        }
        if key == -1 {
            self.tree.insert(value, value);
            key = value;
        }
        if let Some(v) = self.tree.remove(&(value + 1)) {
            *self.tree.get_mut(&key).unwrap() = v;
        }
    }
    
    fn get_intervals(&self) -> Vec<Vec<i32>> {
        self.tree.iter()
            .map(|(&k, &v)| vec![k, v])
            .collect()
    }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * let obj = SummaryRanges::new();
 * obj.add_num(value);
 * let ret_2: Vec<Vec<i32>> = obj.get_intervals();
 */
```