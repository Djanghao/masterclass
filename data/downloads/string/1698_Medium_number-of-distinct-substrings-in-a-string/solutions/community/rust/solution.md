# Suffix automaton O(n)

**Author:** whoisdmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/3530367/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/3530367/)

---


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
use std::collections::BTreeMap;

struct State {
    len: u16,
    link: u16,
    to: BTreeMap<u8, u16>
}

fn suffix_automaton(s: &[u8]) -> Vec<State> {
    let mut states = Vec::with_capacity(2 * s.len());
    let mut last = 0;
    states.push(State { len: 0, link: u16::MAX, to: BTreeMap::new() });
    for &ch in s {
        let mut p = last; 
        states.push(State { len: states[p].len + 1, link: 0, to: BTreeMap::new() });
        last = states.len() - 1;
        while p  != u16::MAX as usize && !states[p].to.contains_key(&ch) {
            states[p].to.insert(ch, last as u16);
            p = states[p].link as usize;
        }
        if p != u16::MAX as usize {
            let q = states[p].to[&ch] as usize;
            if states[p].len + 1 == states[q].len {
                states[last].link = q as u16;
            } else {
                states.push(State { len: states[p].len + 1, link: states[q].link, to: states[q].to.clone() });
                let clone = states.len() - 1;
                while p != u16::MAX as usize && states[p].to[&ch] == q as u16 {
                    states[p].to.insert(ch, clone as u16);
                    p = states[p].link as usize;
                }
                states[q].link = clone as u16;
                states[last].link = clone as u16;
            }
        }
    }
    states
}

impl Solution {
    pub fn count_distinct(s: String) -> i32 {
        let states = suffix_automaton(s.as_bytes());
        let mut cnt = 0;
        for state in states.iter().skip(1) {
            cnt += (state.len - states[state.link as usize].len) as i32;
        }
        cnt
    }
}


```