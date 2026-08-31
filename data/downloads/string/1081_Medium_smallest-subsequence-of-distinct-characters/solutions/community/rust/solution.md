# Rust Functional Solution

**Author:** bios8086
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/5719899/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/5719899/)

---

# Code
```rust []
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn smallest_subsequence(s: String) -> String {
        let last_occurrence_map: HashMap<char, usize> = s
        .chars()
        .enumerate()
        .map(|(i, c)| (c, i))
        .collect::<HashMap<_, _>>();
    s.chars()
        .enumerate()
        .fold(
            (Vec::with_capacity(s.len()), HashSet::with_capacity(s.len())),
            |(mut stack, mut visited_before), (i, c)| {
                if visited_before.contains(&c) {
                    return (stack, visited_before);
                }
                while let Some(&top_char) = stack.last() {
                    let last_index = last_occurrence_map[&top_char];
                    if last_index > i && top_char > c {
                        visited_before.remove(&top_char);
                        stack.pop();
                    } else {
                        break;
                    }
                }
                visited_before.insert(c);
                stack.push(c);
                (stack, visited_before)
            },
        )
        .0
        .iter()
        .collect()

    }
}
```