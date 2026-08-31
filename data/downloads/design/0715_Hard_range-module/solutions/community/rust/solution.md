# Rust | BTreemap

**Author:** tomijaga
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-module/solutions/4203891/](https://leetcode.com/problems/range-module/solutions/4203891/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Store the range in a sorted map with left most number as the key and the right number as its value. 
- add_range(): 
    - merge all the ranges that overlap the given left and right values and those between them.

- query_range():
    - retrieves the closest range, determined by their start values, and checks if it bounds of the given range is between the closest range


# Complexity
- Time complexity:
     - add_range(): $$O(n log n)$$
     - query_range(): $$O(log n)$$
     - remove_range(): $$O(n log n)$$
    >  where n is the number of non overlapping intervals
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    - $$O(n)$$
    >  where n is the number of non overlapping intervals
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{BTreeMap, HashSet};

struct RangeModule {
    intervals: BTreeMap<i32, i32>
}

impl RangeModule {

    fn new() -> Self {
        Self{
            intervals: BTreeMap::new()
        }
    }
    
    fn add_range(&mut self, left: i32, right: i32) {
        let mut left = left;
        let mut right = right;

        let intersects = self.intervals
            .range(0..=right)
            .rev()
            .take_while(|(&l, &r)| left <= r && right >= l)
            .map(|(&l, &r)| (l, r))
            .collect::<Vec<(i32, i32)>>();

        for (l, r) in intersects.into_iter() {
            if r > right{
                right = r;
            }

            if l < left{
                left = l;
            }
            self.intervals.remove(&l);
        }

        self.intervals.insert(left, right);
    }
    
    fn query_range(&self, left: i32, right: i32) -> bool {
        if let Some((&l, &r)) = self.intervals.range(0..=left).rev().next(){
            return l <= left && r >= right;
        }

        return false;
    }
    
    fn remove_range(&mut self, left: i32, right: i32) {
        let mut outliers = vec![];

        let mut intersections = self.intervals
            .range(0..=right)
            .rev()
            .take_while(|(&l, &r)| left < r && right > l)
            .map(|(&l, &r)| (l, r))
            .collect::<HashSet<(i32, i32)>>();

        for (l, r) in intersections.into_iter(){
            if l < left{
                outliers.push((l, left));
            }

            if r > right{
                outliers.push((right, r));
            }

            self.intervals.remove(&l);
        }

        for (l, r) in outliers.into_iter(){
            self.intervals.insert(l, r);
        }
    }
}
```