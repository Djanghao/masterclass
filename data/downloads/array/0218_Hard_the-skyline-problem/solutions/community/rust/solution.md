# Rust || Scanning a self-emptying BTreeMap || O(n logn) || Includes test cases

**Author:** taconite
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/2640835/](https://leetcode.com/problems/the-skyline-problem/solutions/2640835/)

---

```rust
use std::collections::BTreeMap;

impl Solution {
    pub fn get_skyline(buildings: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut retval: Vec<Vec<i32>> = vec![];
        let mut corners = Vec::with_capacity(buildings.len() * 2);
        for b in buildings {
            let (left, right, height) = (b[0], b[1], b[2]);
            corners.push( (left, height, false) );
            corners.push( (right, height, true) );
        }
        corners.sort_unstable_by(|a,b| {
            // 1. left before right
            // 2. start before end
            // 3. height is V-shaped: descending within starts; ascending within ends
            if a.0 != b.0 { return a.0.cmp(&b.0); }
            use std::cmp::Ordering::*;
            match (a.2, b.2) {
                (false, false) => b.1.cmp(&a.1),  // both start
                (false, true) => Less,
                (true, false) => Greater,
                (true, true) => a.1.cmp(&b.1),
            }
        });
        let mut active: BTreeMap<i32,u32> = BTreeMap::new();
        active.insert(0, 1);  // seed with final key point at height zero
        let mut prev = 0;
        for (x, y, is_end) in corners {
            use std::collections::btree_map::Entry;
            if is_end {
                if let Entry::Occupied(mut occ_en) = active.entry(y) {
                    *occ_en.get_mut() -= 1;
                    if *occ_en.get() == 0 {
                        occ_en.remove();
                    }
                }
            } else {
                active.entry(y)
                    .and_modify(|h| *h += 1)
                    .or_insert(1);
            }
            // Safety: all heights are >= 1, so 0 is never equal to `prev_height`.
            let (&tallest, _) = active.iter().next_back().unwrap_or((&0, &0));
            if prev != tallest {
                retval.push( vec![ x, tallest ] );
                prev = tallest;
            }
        }
        retval
    }
}
```

## Test cases
```
[[1,5,3], [1,5,3], [1,5,3]]
[[1,2,1],[1,2,2],[1,2,3]]
[[1,2,1],[1,2,2],[1,2,3], [5,10,5] ]
[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
[[0,2,3],[2,5,3]]
[[0,2,3],[2,5,4]]
[[0,2,3],[2,5,2]]
[[0,4,3],[2,5,3]]
[[0,4,3],[2,5,4]]
[[0,4,3],[2,5,2]]
[[0,9,3],[2,5,3]]
[[0,9,3],[2,5,4]]
[[0,9,3],[2,5,2]]
[ [3,7,8888] ]
[ [3,7,8888], [13,17,8888] ]
[ [3,7,8888], [13,17,777] ]
[ [3,7,777], [13,17,8888] ]
```