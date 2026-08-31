# Rust min-heap = 84%/84%

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4016405/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4016405/)

---

NOTE: Not sure if this solution is the best idiomatic Rust. I would be thankful for feedback & improvements. Only submitting because I did not see any Rust submissions so far that I could compare against to learn how to improve this code.

# Approach
Implement same rough logic as what I had in another language.

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn min_build_time(blocks: Vec<i32>, split: i32) -> i32 {
        let mut h: BinaryHeap<_> = blocks.into_iter().map(Reverse).collect();

        while h.len() > 1 {
            h.pop();
            match h.pop() {
                Some(Reverse(b)) => h.push(Reverse(b + split)),
                _ => println!("error: should always have a value"),
            }
        }

        if let Some(Reverse(b)) = h.pop() { return b; }
        return 0;
    }
}
```