# [RUST] Queue

**Author:** keep_of_kalessin
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/2546735/](https://leetcode.com/problems/jump-game-vii/solutions/2546735/)

---

```rust
use std::collections::VecDeque;

pub fn can_reach(s: impl AsRef<[u8]>, min_jump: i32, max_jump: i32) -> bool {
    assert!(min_jump >= 1);
    assert!(min_jump <= max_jump);
    let mn = min_jump as usize;
    let mx = max_jump as usize;

    let s = s.as_ref();
    assert!((max_jump as usize) < s.len());

    // Fast path: The last value is `1`, which means it's always unreachable
    if s[s.len() - 1] != b'0' {
        return false;
    }

    // The index of the last added element, we use it to avoid
    // re-adding already processed elements in the queue
    let mut last = 0;

    let mut queue = VecDeque::new();

    // we always start from index 0
    queue.push_back(0);

    while let Some(idx) = queue.pop_front() {
        let from = idx + mn;
        let to = idx + mx + 1 as usize;

        // Process the unprocessed elements until `idx + max_jump`
        for pos in last.max(from)..s.len().min(to) {
            // Add in the queue only the positions we can jump into
            if s[pos] == b'0' {
                // we reached the last element so we can terminate early
                if pos == s.len() - 1 {
                    return true;
                }

                queue.push_back(pos);
            }
        }

        // update the last processed elements, in order to 
        // avoid processing those again and again
        last = last.max(idx + mx + 1);
    }

    // we failed to reach the last element
    false
}
```