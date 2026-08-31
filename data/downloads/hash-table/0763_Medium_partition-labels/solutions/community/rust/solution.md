# [Rust 0ms 100%] Ranges full explanation

**Author:** shilangyu
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-labels/solutions/518487/](https://leetcode.com/problems/partition-labels/solutions/518487/)

---

1. Create a `HashMap` that will store each char as key (hence the capacity of 26) and the value is a range (first and last occurance)
2. We dont care about the char, so we map the `HashMap` into a vector which we then sort by the first occurance
3. Our data is now orginized, we will now find the start and end of each partition by marking the start, then looping each range till our upper bound, if a range has an end past our currently tracked one, we update it.

```rust
use std::collections::HashMap;
use std::cmp;

#[derive(Debug)]
struct Range {
    from: usize,
    to: usize,
}

impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut ranges = HashMap::with_capacity(26);
        
        for (i, c) in s.chars().enumerate() {
            let curr = ranges.entry(c).or_insert(Range {
                from: i,
                to: i,
            });
            
            curr.to = i;
        }
        
        let mut ranges: Vec<_> = ranges.values().collect();
        ranges.sort_by(|a, b| a.from.cmp(&b.from));
        
        let mut res = vec![];

        let mut i = 0;
        while i < ranges.len() {
            let Range { mut to, from } = ranges[i];
            i += 1;
            
            while i < ranges.len() && to > ranges[i].from {
                to = cmp::max(to, ranges[i].to);
                i += 1;
            }
            
            res.push((to - from + 1) as i32);
        }
        
        res
    }
}
```