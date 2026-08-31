# Rust: Constant Time Reversal Using Double-Ended Queue

**Author:** Lindelt
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/5888547/](https://leetcode.com/problems/faulty-keyboard/solutions/5888547/)

---

# Intuition

The problem is conceptually simple: build a result string character-by-character, and when an `'i'` character is encountered reverse the result string before continuing the building process. With the string sizes given by the problem constraints this approach isn't terribly burdensome, but scaling up could result in potentially thousands of string reversals on increasingly large strings depending upon the number of `'i'` characters encountered.

In order to avoid these expensive operations and reduce our time complexity to $O(n)$, we require a way to perform a string reversal in constant time.

# Approach

We can simulate a string capable of constant time reversal by using a double-ended queue and accompanying flag. Whenever the flag is `false`, the string has undergone an even number of reversals and we push characters onto the back of the deque. Conversely a `true` flag indicates an odd number of reversals and we push characters onto the front of the deque.

This approach requires a single pass over the input string to build the deque, and a single pass over the completed deque (direction depending upon the final state of the flag) to build the resulting string.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```rust []
use std::collections::VecDeque;

impl Solution {
    pub fn final_string(s: String) -> String {
        // A double-ended queue plus flag enables semantic reverse
        // operations in O(1) time.
        let mut deque = VecDeque::with_capacity(s.len());
        let mut reversed = false;
        for c in s.chars() {
            match (c, reversed) {
                ('i', prior) => reversed = !prior,
                (_, false) => deque.push_back(c),
                (_, true) => deque.push_front(c),
            }
        }
        if reversed {
            deque.into_iter().rev().collect()
        } else {
            deque.into_iter().collect()
        }
    }
}
```