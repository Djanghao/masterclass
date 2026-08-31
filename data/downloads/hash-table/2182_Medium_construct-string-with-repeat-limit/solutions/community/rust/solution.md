# George B, be humble - 7ms

**Author:** RockGlue
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/6114565/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/6114565/)

---

## Code
```rust []
use std::collections::BinaryHeap;

const A: u8 = b'a';

impl Solution {
    pub fn repeat_limited_string(s: String, repeat_limit: i32) -> String {
        let mut result = vec![];
        let mut heap = Self::build_heap(&s);

        while let Some((curr, mut count_curr)) = heap.pop() {
            let repeat = count_curr.min(repeat_limit);

            for _ in 0..repeat {
                result.push(curr);
                count_curr -= 1;
            }

            if count_curr > 0 {
                if let Some((next, mut count_next)) = heap.pop() {
                    result.push(next);
                    count_next -= 1;

                    if count_next > 0 {
                        heap.push((next, count_next));
                    }
                } else {
                    return unsafe { String::from_utf8_unchecked(result) };
                }

                heap.push((curr, count_curr));
            }
        }

        unsafe { String::from_utf8_unchecked(result) }
    }

    fn build_heap(s: &str) -> BinaryHeap<(u8, i32)> {
        const LETTER_COUNT: usize = 26;
        let mut freq = [0; LETTER_COUNT];
        let mut heap = BinaryHeap::new();

        for b in s.bytes() {
            freq[(b - A) as usize] += 1;
        }

        for (i, &count) in freq.iter().enumerate() {
            if count > 0 {
                heap.push((i as u8 + A, count));
            }
        }

        heap
    }
}
```