# 💥 Runtime beats 92.86% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/5717253/](https://leetcode.com/problems/maximum-frequency-stack/solutions/5717253/)

---

# Intuition
Design a stack where the most frequent element can be popped efficiently, and in case of a tie, the element closest to the top is removed.

# Approach
Hash Maps:
Track element frequencies and group elements by frequency using stacks.

Push:
Update frequency, push to the appropriate stack, and adjust max frequency.

Pop:
Remove from the stack of the highest frequency and update frequencies.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(n)

# Code
```rust []
use std::collections::{HashMap, VecDeque};

struct FreqStack {
    freq_map: HashMap<i32, i32>,           // Maps value to its frequency
    group_map: HashMap<i32, VecDeque<i32>>, // Maps frequency to stack of values
    max_freq: i32,                         // Current maximum frequency
}

impl FreqStack {
    fn new() -> Self {
        Self {
            freq_map: HashMap::new(),
            group_map: HashMap::new(),
            max_freq: 0,
        }
    }
    
    fn push(&mut self, val: i32) {
        let freq = self.freq_map.entry(val).or_insert(0);
        *freq += 1;
        let new_freq = *freq;

        // Update max frequency
        if new_freq > self.max_freq {
            self.max_freq = new_freq;
        }

        // Update group_map with the new frequency
        let group = self.group_map.entry(new_freq).or_insert(VecDeque::new());
        group.push_back(val);
    }
    
    fn pop(&mut self) -> i32 {
        let group = self.group_map.get_mut(&self.max_freq).unwrap();
        let val = group.pop_back().unwrap();

        let freq = self.freq_map.entry(val).or_insert(0);
        *freq -= 1;

        // Remove from freq_map if frequency is zero
        if *freq == 0 {
            self.freq_map.remove(&val);
        }

        // If no more elements at the current max frequency, reduce max frequency
        if group.is_empty() {
            self.group_map.remove(&self.max_freq);
            self.max_freq -= 1;
        }

        val
    }
}

```