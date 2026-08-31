# Rust: Recursion + Memoization ; Binary Search

**Author:** diokles
**Votes:** 0
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/4705997/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/4705997/)

---


# Code
```rust
use std::collections::HashMap;
use std::cmp::{max, min};

#[derive(Eq, Hash, PartialEq)]
struct Key(i32, i32);

impl Key {
    fn new(floor: i32, egg: i32) -> Self {
        Self(floor, egg)
    }
}

impl Solution {
    pub fn utility(floor: i32, egg: i32, memo: &mut HashMap<Key, i32>) -> i32 {
        if floor == 0 || floor == 1 || egg == 1 {
            return floor;
        }

        let key = Key::new(floor, egg);
        if let Some(val) = memo.get(&key) {
            return *val;
        }

        let mut result = i32::MAX;
        let mut low = 1;
        let mut high = floor;
        
        while low <= high {
            let mid = low + (high - low) / 2;

            let egg_break = Self::utility(mid-1, egg-1, memo);
            let egg_not_break = Self::utility(floor-mid, egg, memo);

            let worst_case = 1 + max(egg_break, egg_not_break);

            if egg_break > egg_not_break {
                high = mid - 1; 
            } else {
                low = mid + 1;
            }
            result = min(result, worst_case);
        }
        memo.insert(key, result);
        result
    }

    pub fn two_egg_drop(n: i32) -> i32 {
        let mut memo: HashMap<Key, i32> = HashMap::new();
        Self::utility(n, 2, &mut memo)
    }
}
```